import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Music,
  Sparkles,
  Mic,
  Disc,
  Heart,
  Volume1,
} from 'lucide-react';
import { RhymeItem } from '../../data/rhymesData';
import { playPopSound } from '../../utils/soundEffects';

interface SingAlongModalProps {
  rhyme: RhymeItem | null;
  onClose: () => void;
}

export const SingAlongModal: React.FC<SingAlongModalProps> = ({ rhyme, onClose }) => {
  if (!rhyme) return null;

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(rhyme.durationSeconds);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [voiceSingAlong, setVoiceSingAlong] = useState<boolean>(true);
  const [activeStanzaIndex, setActiveStanzaIndex] = useState<number>(0);

  // Real HTML5 Audio element reference for MP3 playback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Web Audio Context & Synthesizer Fallback References
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const noteTimeoutsRef = useRef<number[]>([]);
  const isPlayingRef = useRef<boolean>(true);
  const currentTimeRef = useRef<number>(0);

  // Keep refs synchronized
  isPlayingRef.current = isPlaying;
  currentTimeRef.current = currentTime;

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || !isFinite(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Get or initialize AudioContext (for Web Audio synthesizer fallback)
  const getAudioContext = (): AudioContext | null => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
        const gain = audioCtxRef.current.createGain();
        gain.gain.value = isMuted ? 0 : volume;
        gain.connect(audioCtxRef.current.destination);
        masterGainRef.current = gain;
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Clear all pending audio note timeouts
  const clearNoteTimeouts = () => {
    noteTimeoutsRef.current.forEach((t) => window.clearTimeout(t));
    noteTimeoutsRef.current = [];
  };

  // Speak stanzas aloud using SpeechSynthesis (fallback when no MP3)
  const speakCurrentStanza = (stanzaIdx: number) => {
    if (!voiceSingAlong || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const stanzaLines = rhyme.stanzas[stanzaIdx];
      if (!stanzaLines) return;
      const textToSpeak = stanzaLines.join(' ');
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.pitch = 1.3;
      utterance.rate = 0.9;
      utterance.volume = isMuted ? 0 : volume;

      const voices = window.speechSynthesis.getVoices();
      const friendlyVoice = voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('Natural') ||
            v.name.includes('Online') ||
            v.name.includes('Samantha') ||
            v.name.includes('Google') ||
            v.name.includes('Zira'))
      );
      if (friendlyVoice) utterance.voice = friendlyVoice;

      window.speechSynthesis.speak(utterance);
    } catch {
      // SpeechSynthesis error ignored safely
    }
  };

  // Play a single musical note using Web Audio API (fallback)
  const playMelodyNote = (ctx: AudioContext, masterGain: GainNode, freq: number, noteDuration: number) => {
    if (freq <= 0) return;
    try {
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.35, now + 0.02);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + Math.max(0.1, noteDuration * 0.95));

      osc1.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + noteDuration);
      osc2.stop(now + noteDuration);
    } catch {
      // Ignored
    }
  };

  // Schedule all melody notes (fallback)
  const scheduleMelodyNotes = (startOffsetSeconds: number) => {
    clearNoteTimeouts();
    const ctx = getAudioContext();
    const masterGain = masterGainRef.current;
    if (!ctx || !masterGain) return;

    let accumulatedTime = 0;
    rhyme.melody.forEach((item) => {
      const noteStart = accumulatedTime;
      const noteEnd = accumulatedTime + item.duration;

      if (noteEnd > startOffsetSeconds) {
        const delayMs = Math.max(0, (noteStart - startOffsetSeconds) * 1000);
        const timeoutId = window.setTimeout(() => {
          if (isPlayingRef.current) {
            playMelodyNote(ctx, masterGain, item.note, item.duration);
          }
        }, delayMs);
        noteTimeoutsRef.current.push(timeoutId);
      }
      accumulatedTime += item.duration;
    });
  };

  // Start synth playback (fallback)
  const startSynthPlayback = (fromTime: number = 0) => {
    setIsPlaying(true);
    isPlayingRef.current = true;
    setCurrentTime(fromTime);
    currentTimeRef.current = fromTime;

    scheduleMelodyNotes(fromTime);

    const totalDur = duration || rhyme.durationSeconds;
    const currentStanzaIdx = Math.min(
      rhyme.stanzas.length - 1,
      Math.floor((fromTime / totalDur) * rhyme.stanzas.length)
    );
    setActiveStanzaIndex(currentStanzaIdx);
    speakCurrentStanza(currentStanzaIdx);

    if (timerIntervalRef.current) {
      window.clearInterval(timerIntervalRef.current);
    }

    timerIntervalRef.current = window.setInterval(() => {
      if (!isPlayingRef.current) return;

      setCurrentTime((prev) => {
        const nextTime = prev + 0.25;
        currentTimeRef.current = nextTime;

        const progressRatio = nextTime / totalDur;
        const newStanzaIdx = Math.min(
          rhyme.stanzas.length - 1,
          Math.floor(progressRatio * rhyme.stanzas.length)
        );
        setActiveStanzaIndex((curStanza) => {
          if (curStanza !== newStanzaIdx) {
            speakCurrentStanza(newStanzaIdx);
          }
          return newStanzaIdx;
        });

        if (nextTime >= totalDur) {
          startSynthPlayback(0);
          return 0;
        }
        return nextTime;
      });
    }, 250);
  };

  // Pause synth playback (fallback)
  const pauseSynthPlayback = () => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    clearNoteTimeouts();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (timerIntervalRef.current) {
      window.clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // Seek / Scrub timeline
  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
    currentTimeRef.current = newTime;

    const totalDur = duration || rhyme.durationSeconds;
    const newStanzaIdx = Math.min(
      rhyme.stanzas.length - 1,
      Math.floor((newTime / totalDur) * rhyme.stanzas.length)
    );
    setActiveStanzaIndex(newStanzaIdx);

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      if (!isPlaying) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      pauseSynthPlayback();
      startSynthPlayback(newTime);
    }
  };

  // Play / Pause toggle
  const togglePlayPause = () => {
    playPopSound();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        pauseSynthPlayback();
      } else {
        startSynthPlayback(currentTime);
      }
    }
  };

  // Reset playback to 0:00
  const handleReset = () => {
    playPopSound();
    setCurrentTime(0);
    currentTimeRef.current = 0;
    setActiveStanzaIndex(0);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      pauseSynthPlayback();
      startSynthPlayback(0);
    }
  };

  // COMPLETE RESET AND CLOSE HANDLER
  // Required on Cross button (X), backdrop click, Escape key, or Close button
  const handleCloseAndReset = () => {
    // 1. Immediately pause, rewind to 0, and clear HTML5 audio element
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current = null;
    }

    // 2. Pause and clear synth timeouts & SpeechSynthesis
    pauseSynthPlayback();
    if (masterGainRef.current) {
      try {
        masterGainRef.current.gain.setValueAtTime(0, 0);
      } catch {
        // Ignored
      }
    }

    // 3. Reset state variables
    setCurrentTime(0);
    currentTimeRef.current = 0;
    setActiveStanzaIndex(0);
    setIsPlaying(false);
    isPlayingRef.current = false;

    // 4. Pop sound and close
    playPopSound();
    onClose();
  };

  // Mount effect: load and play MP3 audio or fallback
  useEffect(() => {
    setDuration(rhyme.durationSeconds);
    setCurrentTime(0);
    setActiveStanzaIndex(0);

    if (rhyme.audioSrc) {
      const audio = new Audio(rhyme.audioSrc);
      audio.preload = 'auto';
      audio.volume = isMuted ? 0 : volume;
      audio.muted = isMuted;
      audioRef.current = audio;

      audio.onloadedmetadata = () => {
        if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
          setDuration(audio.duration);
        }
      };

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
        currentTimeRef.current = audio.currentTime;

        const totalDur = audio.duration || rhyme.durationSeconds;
        if (totalDur > 0 && rhyme.stanzas.length > 0) {
          const ratio = Math.min(1, Math.max(0, audio.currentTime / totalDur));
          const sIdx = Math.min(
            rhyme.stanzas.length - 1,
            Math.floor(ratio * rhyme.stanzas.length)
          );
          setActiveStanzaIndex(sIdx);
        }
      };

      audio.onended = () => {
        // Endless loop for kids
        audio.currentTime = 0;
        audio.play().catch(() => {});
      };

      audio.onplay = () => {
        setIsPlaying(true);
        isPlayingRef.current = true;
      };

      audio.onpause = () => {
        setIsPlaying(false);
        isPlayingRef.current = false;
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Autoplay prevented or audio load issue:', err);
          });
      }
    } else {
      startSynthPlayback(0);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = '';
        audioRef.current = null;
      }
      clearNoteTimeouts();
      if (timerIntervalRef.current) {
        window.clearInterval(timerIntervalRef.current);
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [rhyme.id, rhyme.audioSrc]);

  // Sync volume and mute to audio element and synth gain
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.muted = isMuted;
    }
    if (masterGainRef.current && audioCtxRef.current) {
      const targetGain = isMuted ? 0 : volume;
      masterGainRef.current.gain.setValueAtTime(targetGain, audioCtxRef.current.currentTime);
    }
  }, [volume, isMuted]);

  // Listen for Escape key to close and reset
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseAndReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const currentTotal = duration || rhyme.durationSeconds || 1;
  const progressPercent = Math.min(100, Math.max(0, (currentTime / currentTotal) * 100));


  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${rhyme.title} Sing Along Player`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.78)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={handleCloseAndReset}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '640px',
          maxHeight: 'min(86vh, 750px)',
          backgroundColor: '#FFFFFF',
          borderRadius: '32px',
          boxShadow: '0 25px 60px -10px rgba(124, 58, 237, 0.45), 0 10px 24px rgba(0,0,0,0.15)',
          border: '4px solid #FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* ================= MODAL HEADER WITH PROMINENT CROSS (X) BUTTON ================= */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 22px',
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)',
            borderBottom: '2px solid #FDE68A',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                backgroundColor: '#F59E0B',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)',
              }}
            >
              🎶
            </span>
            <div>
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#92400E',
                  lineHeight: 1.2,
                  fontFamily: 'var(--font-display)',
                }}
              >
                Sing-Along Music Room
              </h4>
              <span style={{ fontSize: '12px', color: '#B45309', fontWeight: 600 }}>
                {rhyme.theme} • {formatTime(currentTotal)}
              </span>
            </div>
          </div>

          {/* CROSS BUTTON: Immediately resets and closes playback */}
          <button
            type="button"
            aria-label="Close and Reset Audio"
            title="Close and Reset Audio"
            onClick={handleCloseAndReset}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#FEE2E2',
              color: '#DC2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '2px solid #FECACA',
              boxShadow: '0 3px 8px rgba(220, 38, 38, 0.15)',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.15) rotate(90deg)';
              e.currentTarget.style.backgroundColor = '#EF4444';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.backgroundColor = '#FEE2E2';
              e.currentTarget.style.color = '#DC2626';
            }}
          >
            <X size={20} strokeWidth={2.6} />
          </button>
        </div>

        {/* ================= AUDIO PLAYER PINNED TOP SECTION ================= */}
        <div
          style={{
            padding: '16px 20px 10px',
            flexShrink: 0,
            backgroundColor: '#FAFAFA',
          }}
        >
          {/* ================= AUDIO PLAYER CARD ================= */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4C1D95 100%)',
              borderRadius: '26px',
              padding: '20px',
              color: '#FFFFFF',
              boxShadow: '0 12px 28px -6px rgba(76, 29, 149, 0.4)',
              border: '3px solid #EDE9FE',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background sparkle bubbles */}
            <div
              style={{
                position: 'absolute',
                top: '-25px',
                right: '-25px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Top Row: Mascot Record & Song Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
              }}
            >
              {/* Spinning Vinyl Record with Emoji */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  border: '3px solid #F472B6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
                  position: 'relative',
                  flexShrink: 0,
                  animation: isPlaying ? 'spinSlow 4s linear infinite' : 'none',
                }}
              >
                {/* Center Record Label */}
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: rhyme.badgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}
                >
                  {rhyme.emoji}
                </div>
              </div>

              {/* Title & Live Status */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '2px 8px',
                    borderRadius: '8px',
                    backgroundColor: isPlaying ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: isPlaying ? '#4ADE80' : '#FCA5A5',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginBottom: '4px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isPlaying ? '#22C55E' : '#EF4444',
                    }}
                  />
                  <span>
                    {isPlaying
                      ? rhyme.audioSrc
                        ? 'Playing Studio Song'
                        : 'Playing Melody & Vocals'
                      : 'Paused'}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    fontFamily: 'var(--font-display)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {rhyme.title}
                </h3>

                {/* Animated Equalizer Sound Bars */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px',
                    height: '14px',
                    marginTop: '6px',
                  }}
                >
                  {[0.6, 1.0, 0.8, 1.2, 0.7, 1.1, 0.9].map((scale, i) => (
                    <span
                      key={i}
                      style={{
                        width: '3.5px',
                        backgroundColor: '#F472B6',
                        borderRadius: '2px',
                        height: isPlaying ? `${Math.min(14, 6 + (i % 3) * 4)}px` : '4px',
                        transition: 'height 0.2s ease',
                        animation: isPlaying
                          ? `equalize 0.6s ease-in-out ${i * 0.08}s infinite alternate`
                          : 'none',
                      }}
                    />
                  ))}
                  <span style={{ fontSize: '11px', color: '#DDD6FE', marginLeft: '6px' }}>
                    {rhyme.audioSrc ? 'Studio Kids Song 🎼' : 'Music Box Melodies 🎼'}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Progress Bar */}
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                  const newTime = ratio * currentTotal;
                  handleSeek(newTime);
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progressPercent}%`,
                    background: 'linear-gradient(90deg, #F472B6 0%, #FBBF24 100%)',
                    borderRadius: '9999px',
                    transition: 'width 0.2s linear',
                  }}
                />
              </div>

              {/* Time Indicators */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '6px',
                  fontSize: '11.5px',
                  color: '#C7D2FE',
                  fontWeight: 600,
                }}
              >
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(currentTotal)}</span>
              </div>
            </div>

            {/* Controls Bar: Reset, Play/Pause, Volume, Voice Toggle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Left Buttons: Reset & Play/Pause */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Reset / Rewind Button */}
                <button
                  type="button"
                  title="Restart poem from beginning"
                  onClick={handleReset}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <RotateCcw size={17} />
                </button>

                {/* Main Play / Pause Button */}
                <button
                  type="button"
                  title={isPlaying ? 'Pause' : 'Play'}
                  onClick={togglePlayPause}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '20px',
                    background: isPlaying
                      ? 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)'
                      : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    fontFamily: 'var(--font-display)',
                    cursor: 'pointer',
                    boxShadow: isPlaying
                      ? '0 6px 16px rgba(236, 72, 153, 0.4)'
                      : '0 6px 16px rgba(16, 185, 129, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={17} fill="#FFFFFF" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play size={17} fill="#FFFFFF" style={{ marginLeft: '2px' }} />
                      <span>Play Poem</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Controls: Voice Toggle & Volume */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {rhyme.audioSrc ? (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(16, 185, 129, 0.25)',
                      color: '#6EE7B7',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    <Disc size={14} />
                    <span>Studio MP3 🎶</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    title={voiceSingAlong ? 'Vocals On: Click to mute voice' : 'Vocals Off: Click to hear voice'}
                    onClick={() => {
                      const nextVal = !voiceSingAlong;
                      setVoiceSingAlong(nextVal);
                      if (!nextVal && typeof window !== 'undefined' && 'speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                      } else if (nextVal && isPlaying) {
                        speakCurrentStanza(activeStanzaIndex);
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      backgroundColor: voiceSingAlong
                        ? 'rgba(245, 158, 11, 0.25)'
                        : 'rgba(255, 255, 255, 0.12)',
                      color: voiceSingAlong ? '#FDE047' : '#94A3B8',
                      border: voiceSingAlong
                        ? '1px solid rgba(245, 158, 11, 0.5)'
                        : '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <Mic size={14} />
                    <span>Voice: {voiceSingAlong ? 'ON' : 'OFF'}</span>
                  </button>
                )}

                {/* Mute/Volume Icon & Slider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    type="button"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    onClick={() => setIsMuted(!isMuted)}
                    style={{
                      background: 'transparent',
                      color: isMuted ? '#F87171' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    aria-label="Volume Slider"
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setVolume(val);
                      if (val > 0 && isMuted) setIsMuted(false);
                    }}
                    style={{
                      width: '64px',
                      accentColor: '#F472B6',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SCROLLABLE LYRICS SECTION ================= */}
        <div
          className="no-scrollbar"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '4px 20px 18px',
            backgroundColor: '#FAFAFA',
          }}
        >
          {/* ================= LYRICS SING-ALONG BOOK ================= */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '20px',
              border: '2px solid #E2E8F0',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
            }}
          >
            {/* Lyrics Section Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px dashed #F1F5F9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📖</span>
                <h4
                  style={{
                    fontSize: '16px',
                    color: '#1E293B',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Poem Lyrics & Verses
                </h4>
              </div>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#6D28D9',
                  backgroundColor: '#F3E8FF',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Sing Along! 🎤
              </span>
            </div>

            {/* Stanzas Display with Active Verse Highlight */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {rhyme.stanzas.map((stanza, sIdx) => {
                const isActive = isPlaying && activeStanzaIndex === sIdx;

                return (
                  <div
                    key={sIdx}
                    onClick={() => {
                      // Click stanza to jump to that stanza in audio
                      const targetTime = (sIdx / rhyme.stanzas.length) * currentTotal;
                      handleSeek(targetTime);
                    }}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '18px',
                      backgroundColor: isActive ? '#FEF3C7' : '#F8FAFC',
                      border: isActive ? '2.5px solid #F59E0B' : '2px solid #F1F5F9',
                      boxShadow: isActive
                        ? '0 6px 18px rgba(245, 158, 11, 0.2)'
                        : 'none',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                  >
                    {/* Active Stanza Indicator */}
                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '12px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          backgroundColor: '#F59E0B',
                          color: '#FFFFFF',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '8px',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        <span>Singing now</span>
                        <span>🎶</span>
                      </div>
                    )}

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: isActive ? '#92400E' : '#94A3B8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      Verse {sIdx + 1}
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {stanza.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          style={{
                            fontSize: '14.5px',
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? '#78350F' : '#334155',
                            lineHeight: 1.45,
                            fontFamily: 'var(--font-body)',
                            margin: 0,
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= MODAL FOOTER ACTION BAR ================= */}
        <div
          style={{
            padding: '12px 22px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '12.5px' }}>
            <span>🌟</span>
            <span>Tap any verse above to jump and sing!</span>
          </div>

          {/* Close & Stop Button */}
          <button
            type="button"
            onClick={handleCloseAndReset}
            style={{
              padding: '8px 18px',
              borderRadius: '16px',
              backgroundColor: '#F1F5F9',
              color: '#475569',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              border: '1px solid #CBD5E1',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0';
              e.currentTarget.style.color = '#0F172A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.color = '#475569';
            }}
          >
            <X size={15} />
            <span>Close Player</span>
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes equalize {
          0% { height: 4px; }
          100% { height: 14px; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : modalContent;
};

