import React, { useState } from 'react';
import {
  Gamepad2,
  Sparkles,
  Smile,
  Star,
  Palette,
  Volume2,
  VolumeX,
  Music,
  RotateCcw,
  Award,
  CheckCircle,
  HelpCircle,
  Heart,
  Lightbulb,
} from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import {
  speakText,
  playPopSound,
  playXylophoneNote,
  playStarChime,
  playAnimalSoundEffect,
  playCrunchSound,
  playFanfare,
} from '../../utils/soundEffects';

interface ColorItem {
  name: string;
  hex: string;
  emoji: string;
  phrase: string;
  freq: number;
}

interface AnimalItem {
  id: string;
  name: string;
  soundText: string;
  icon: string;
  bg: string;
  color: string;
}

interface BodyPartItem {
  id: string;
  name: string;
  icon: string;
  action: string;
  desc: string;
}

interface AlphabetItem {
  letter: string;
  word: string;
  emoji: string;
  speechText: string;
  displayText: string;
  color: string;
}

interface ShapeItem {
  name: string;
  symbol: string;
  color: string;
  corners: string;
  phrase: string;
}

interface FruitItem {
  name: string;
  emoji: string;
  color: string;
  fact: string;
}

interface XyloKey {
  note: string;
  solfege: string;
  freq: number;
  color: string;
  labelColor: string;
}

export const PlayLearnPage: React.FC = () => {
  // Global sound toggle
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // --- 1. Colors State ---
  const colors: ColorItem[] = [
    { name: 'Ruby Red', hex: '#EF4444', emoji: '🍎', phrase: 'Ruby Red! Bright like a sweet red apple!', freq: 261.63 },
    { name: 'Sunshine Orange', hex: '#F97316', emoji: '🍊', phrase: 'Sunshine Orange! Warm and glowing like a fresh orange!', freq: 293.66 },
    { name: 'Sunny Yellow', hex: '#EAB308', emoji: '☀️', phrase: 'Sunny Yellow! Bright like shining golden sunlight!', freq: 329.63 },
    { name: 'Meadow Green', hex: '#22C55E', emoji: '🍀', phrase: 'Meadow Green! Fresh and green like spring grass!', freq: 349.23 },
    { name: 'Sky Blue', hex: '#0EA5E9', emoji: '☁️', phrase: 'Sky Blue! Wide and cheerful like a sunny summer sky!', freq: 392.0 },
    { name: 'Dreamy Violet', hex: '#8B5CF6', emoji: '🔮', phrase: 'Dreamy Violet! Magical like twinkling fairy dust!', freq: 440.0 },
    { name: 'Cotton Candy Pink', hex: '#EC4899', emoji: '🌸', phrase: 'Cotton Candy Pink! Sweet and joyful like blooming blossoms!', freq: 523.25 },
  ];
  const [activeColor, setActiveColor] = useState<ColorItem>(colors[4]);

  const handleSelectColor = (color: ColorItem) => {
    setActiveColor(color);
    if (soundEnabled) {
      playXylophoneNote(color.freq);
      setTimeout(() => {
        speakText(color.phrase);
      }, 180);
    }
  };

  // --- 2. Animal Safari State (ONLY authentic animal sound effect!) ---
  const animals: AnimalItem[] = [
    {
      id: 'lion',
      name: 'Leo the Lion',
      soundText: 'Roooaaar!',
      icon: '🦁',
      bg: '#FEF3C7',
      color: '#B45309',
    },
    {
      id: 'bird',
      name: 'Pip Birdie',
      soundText: 'Chirp chirp chirp!',
      icon: '🐦',
      bg: '#E0F2FE',
      color: '#0369A1',
    },
    {
      id: 'monkey',
      name: 'Milo Monkey',
      soundText: 'Ooh ooh aah aah!',
      icon: '🐵',
      bg: '#FEF9C3',
      color: '#A16207',
    },
    {
      id: 'bunny',
      name: 'Coco Bunny',
      soundText: 'Boing boing boing!',
      icon: '🐰',
      bg: '#FCE7F3',
      color: '#BE185D',
    },
    {
      id: 'elephant',
      name: 'Ellie Elephant',
      soundText: 'Pawoo-ooo!',
      icon: '🐘',
      bg: '#EDE9FE',
      color: '#6D28D9',
    },
    {
      id: 'cat',
      name: 'Kitty Mew',
      soundText: 'Meow meow!',
      icon: '🐱',
      bg: '#FFE4E6',
      color: '#E11D48',
    },
    {
      id: 'dog',
      name: 'Barnaby Dog',
      soundText: 'Woof woof!',
      icon: '🐶',
      bg: '#FFEDD5',
      color: '#C2410C',
    },
    {
      id: 'duck',
      name: 'Dottie Duck',
      soundText: 'Quack quack quack!',
      icon: '🦆',
      bg: '#CCFBF1',
      color: '#0F766E',
    },
    {
      id: 'cow',
      name: 'Daisy Cow',
      soundText: 'Moooooo!',
      icon: '🐮',
      bg: '#F3E8FF',
      color: '#7E22CE',
    },
    {
      id: 'frog',
      name: 'Freddy Frog',
      soundText: 'Ribbit ribbit!',
      icon: '🐸',
      bg: '#DCFCE7',
      color: '#15803D',
    },
  ];
  const [activeAnimal, setActiveAnimal] = useState<AnimalItem>(animals[0]);
  const [isAnimalPlaying, setIsAnimalPlaying] = useState(false);

  const handlePlayAnimalSound = (animal: AnimalItem) => {
    setActiveAnimal(animal);
    if (!soundEnabled) return;

    setIsAnimalPlaying(true);
    // Play ONLY the authentic animal sound effect - no extra talking
    playAnimalSoundEffect(animal.id);

    setTimeout(() => {
      setIsAnimalPlaying(false);
    }, 800);
  };

  // --- 3. Body Parts State ---
  const bodyParts: BodyPartItem[] = [
    { id: 'eyes', name: 'Sparkly Eyes', icon: '👀', action: 'Blink blink!', desc: 'We see rainbows and pretty flowers with our eyes!' },
    { id: 'ears', name: 'Happy Ears', icon: '👂', action: 'Listen closely!', desc: 'We hear sweet birds singing and music with our ears!' },
    { id: 'nose', name: 'Cute Nose', icon: '👃', action: 'Take a deep breath!', desc: 'We smell yummy cookies and blooming roses with our nose!' },
    { id: 'mouth', name: 'Bright Smile', icon: '👄', action: 'Say cheese!', desc: 'We smile, laugh, and sing cheerful songs with our mouth!' },
    { id: 'hands', name: 'Clapping Hands', icon: '👏', action: 'Clap clap clap!', desc: 'We clap, draw pictures, and hug friends with our hands!' },
    { id: 'feet', name: 'Dancing Feet', icon: '🦶', action: 'Tap tap tap!', desc: 'We hop, dance, and run across the playground with our feet!' },
  ];
  const [activeBodyPart, setActiveBodyPart] = useState<BodyPartItem>(bodyParts[0]);
  const [challengeText, setChallengeText] = useState<string>('Touch your sparkly eyes and blink twice! 👀');

  const handleSelectBodyPart = (part: BodyPartItem) => {
    setActiveBodyPart(part);
    if (soundEnabled) {
      playPopSound();
      speakText(`${part.name}! ${part.desc}`);
    }
  };

  const handleRandomChallenge = () => {
    const random = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const text = `Coco says: Find your ${random.name}! ${random.action}`;
    setChallengeText(text);
    setActiveBodyPart(random);
    if (soundEnabled) {
      playStarChime();
      setTimeout(() => speakText(text), 250);
    }
  };

  // --- 4. Star Counting State ---
  const [starCount, setStarCount] = useState<number>(5);
  const [starMessage, setStarMessage] = useState<string>('5 Shiny Stars glowing brightly!');

  const handleAddStar = () => {
    if (starCount >= 10) return;
    const nextCount = starCount + 1;
    setStarCount(nextCount);
    const msg = nextCount === 10 ? 'Hooray! You reached all 10 stars! Superstar! 🌟' : `${nextCount} Shiny Stars!`;
    setStarMessage(msg);

    if (soundEnabled) {
      if (nextCount === 10) {
        playFanfare();
        setTimeout(() => speakText('Superstar! You counted all 10 stars! Amazing job!'), 450);
      } else {
        playPopSound();
        speakText(`${nextCount}`);
      }
    }
  };

  const handleRemoveStar = () => {
    if (starCount <= 1) return;
    const nextCount = starCount - 1;
    setStarCount(nextCount);
    setStarMessage(`${nextCount} Shiny Stars!`);
    if (soundEnabled) {
      playPopSound();
      speakText(`${nextCount}`);
    }
  };

  const handleTapIndividualStar = (index: number) => {
    const starNum = index + 1;
    if (soundEnabled) {
      playPopSound();
      speakText(`Star number ${starNum}!`);
    }
  };

  const handleCountAllStars = () => {
    if (!soundEnabled) return;
    playStarChime();
    let current = 1;
    const interval = setInterval(() => {
      if (current <= starCount) {
        speakText(`${current}`);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          playStarChime();
          speakText(`Total ${starCount} stars! Great counting!`);
        }, 550);
      }
    }, 650);
  };

  // --- 5. ABC Phonics State (Clean Natural Spoken Sentences, NO Slashes!) ---
  const alphabetData: AlphabetItem[] = [
    {
      letter: 'A',
      word: 'Apple',
      emoji: '🍎',
      speechText: 'A is for Apple, it is crisp and sweet!',
      displayText: 'It is crisp and sweet!',
      color: '#EF4444',
    },
    {
      letter: 'B',
      word: 'Butterfly',
      emoji: '🦋',
      speechText: 'B is for Butterfly, fluttering high and colorful!',
      displayText: 'Fluttering high and colorful!',
      color: '#3B82F6',
    },
    {
      letter: 'C',
      word: 'Cat',
      emoji: '🐱',
      speechText: 'C is for Cat, soft and purring sweetly!',
      displayText: 'Soft and purring sweetly!',
      color: '#F59E0B',
    },
    {
      letter: 'D',
      word: 'Dolphin',
      emoji: '🐬',
      speechText: 'D is for Dolphin, splashing happily in the ocean!',
      displayText: 'Splashing happily in the ocean!',
      color: '#06B6D4',
    },
    {
      letter: 'E',
      word: 'Elephant',
      emoji: '🐘',
      speechText: 'E is for Elephant, gentle, strong and big!',
      displayText: 'Gentle, strong and big!',
      color: '#8B5CF6',
    },
    {
      letter: 'F',
      word: 'Flower',
      emoji: '🌸',
      speechText: 'F is for Flower, blooming pretty in the garden!',
      displayText: 'Blooming pretty in the garden!',
      color: '#EC4899',
    },
    {
      letter: 'G',
      word: 'Giraffe',
      emoji: '🦒',
      speechText: 'G is for Giraffe, tall with a lovely long neck!',
      displayText: 'Tall with a lovely long neck!',
      color: '#10B981',
    },
    {
      letter: 'M',
      word: 'Moon',
      emoji: '🌙',
      speechText: 'M is for Moon, glowing softly in the night sky!',
      displayText: 'Glowing softly in the night sky!',
      color: '#6366F1',
    },
    {
      letter: 'S',
      word: 'Sun',
      emoji: '☀️',
      speechText: 'S is for Sun, shining bright and warm!',
      displayText: 'Shining bright and warm!',
      color: '#EAB308',
    },
    {
      letter: 'Z',
      word: 'Zebra',
      emoji: '🦓',
      speechText: 'Z is for Zebra, running fast with pretty stripes!',
      displayText: 'Running fast with pretty stripes!',
      color: '#14B8A6',
    },
  ];
  const [activeLetter, setActiveLetter] = useState<AlphabetItem>(alphabetData[0]);

  const handleSelectLetter = (item: AlphabetItem) => {
    setActiveLetter(item);
    if (soundEnabled) {
      playPopSound();
      speakText(item.speechText);
    }
  };

  // --- 6. Shapes Kingdom State ---
  const shapesData: ShapeItem[] = [
    { name: 'Circle', symbol: '⚪', color: '#EF4444', corners: '0 Corners (Round)', phrase: 'Circle! Round and round, with zero corners, like a spinning balloon!' },
    { name: 'Triangle', symbol: '🔺', color: '#F59E0B', corners: '3 Pointy Corners', phrase: 'Triangle! Three pointy corners and three edges, like a slice of yummy pizza!' },
    { name: 'Square', symbol: '🟦', color: '#3B82F6', corners: '4 Equal Sides', phrase: 'Square! Four equal straight sides, strong like a lovely picture frame!' },
    { name: 'Star', symbol: '⭐', color: '#EAB308', corners: '5 Twinkling Points', phrase: 'Star! Five bright points shining high up in the magical sky!' },
    { name: 'Heart', symbol: '💖', color: '#EC4899', corners: 'Soft Curves', phrase: 'Heart! Full of love, big warm hugs, and friendship for everyone!' },
    { name: 'Diamond', symbol: '💎', color: '#8B5CF6', corners: '4 Diamond Corners', phrase: 'Diamond! Sparkling and shining like a soaring kite in the air!' },
  ];
  const [activeShape, setActiveShape] = useState<ShapeItem>(shapesData[0]);

  const handleSelectShape = (shape: ShapeItem) => {
    setActiveShape(shape);
    if (soundEnabled) {
      playXylophoneNote(440);
      setTimeout(() => speakText(shape.phrase), 150);
    }
  };

  // --- 7. Yummy Fruits Basket State ---
  const fruitsData: FruitItem[] = [
    { name: 'Crisp Red Apple', emoji: '🍎', color: '#EF4444', fact: 'Apples give you strong teeth and healthy vitamins! Crunch crunch!' },
    { name: 'Golden Banana', emoji: '🍌', color: '#FACC15', fact: 'Bananas give monkeys and children lots of bouncy energy!' },
    { name: 'Juicy Orange', emoji: '🍊', color: '#F97316', fact: 'Oranges are filled with refreshing Vitamin C to keep you strong!' },
    { name: 'Sweet Strawberry', emoji: '🍓', color: '#E11D48', fact: 'Strawberries are dotted with tiny seeds and taste like summer treats!' },
    { name: 'Cool Watermelon', emoji: '🍉', color: '#10B981', fact: 'Watermelon is 92% pure sweet water, super refreshing on sunny days!' },
    { name: 'Plump Purple Grapes', emoji: '🍇', color: '#8B5CF6', fact: 'Grapes grow in happy clusters on vines and pop with sweet juice!' },
  ];
  const [activeFruit, setActiveFruit] = useState<FruitItem>(fruitsData[0]);

  const handleSelectFruit = (fruit: FruitItem) => {
    setActiveFruit(fruit);
    if (soundEnabled) {
      playCrunchSound();
      setTimeout(() => speakText(`${fruit.name}! ${fruit.fact}`), 250);
    }
  };

  // --- 8. Cartoon Xylophone State ---
  const xylophoneKeys: XyloKey[] = [
    { note: 'C', solfege: 'Do', freq: 261.63, color: '#EF4444', labelColor: '#FFFFFF' },
    { note: 'D', solfege: 'Re', freq: 293.66, color: '#F97316', labelColor: '#FFFFFF' },
    { note: 'E', solfege: 'Mi', freq: 329.63, color: '#EAB308', labelColor: '#1E293B' },
    { note: 'F', solfege: 'Fa', freq: 349.23, color: '#22C55E', labelColor: '#FFFFFF' },
    { note: 'G', solfege: 'Sol', freq: 392.0, color: '#0EA5E9', labelColor: '#FFFFFF' },
    { note: 'A', solfege: 'La', freq: 440.0, color: '#3B82F6', labelColor: '#FFFFFF' },
    { note: 'B', solfege: 'Ti', freq: 493.88, color: '#8B5CF6', labelColor: '#FFFFFF' },
    { note: 'C2', solfege: 'High Do', freq: 523.25, color: '#EC4899', labelColor: '#FFFFFF' },
  ];
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  const handlePlayKey = (key: XyloKey) => {
    setPlayingKey(key.note);
    if (soundEnabled) {
      playXylophoneNote(key.freq);
    }
    setTimeout(() => setPlayingKey(null), 250);
  };

  const playSongTwinkle = () => {
    if (!soundEnabled) return;
    const song = [
      { freq: 261.63, note: 'C' },
      { freq: 261.63, note: 'C' },
      { freq: 392.0, note: 'G' },
      { freq: 392.0, note: 'G' },
      { freq: 440.0, note: 'A' },
      { freq: 440.0, note: 'A' },
      { freq: 392.0, note: 'G' },
    ];
    song.forEach((step, idx) => {
      setTimeout(() => {
        playXylophoneNote(step.freq);
        setPlayingKey(step.note);
        setTimeout(() => setPlayingKey(null), 250);
      }, idx * 380);
    });
  };

  const playSongHappyBirthday = () => {
    if (!soundEnabled) return;
    const song = [
      { freq: 261.63, note: 'C' },
      { freq: 261.63, note: 'C' },
      { freq: 293.66, note: 'D' },
      { freq: 261.63, note: 'C' },
      { freq: 349.23, note: 'F' },
      { freq: 329.63, note: 'E' },
    ];
    song.forEach((step, idx) => {
      setTimeout(() => {
        playXylophoneNote(step.freq);
        setPlayingKey(step.note);
        setTimeout(() => setPlayingKey(null), 250);
      }, idx * 400);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        badgeEmoji="🎨"
        badgeText="Early Explorer Discovery Zone"
        badgeBg="#D1FAE5"
        badgeColor="#059669"
        title="Play & Learn Interactive Kindergarten"
        subtitle="Step into Coco's interactive kindergarten! Real animal sounds, spoken phonics, playful xylophone scales, and engaging mini-games for curious little minds."
        gradientText="linear-gradient(135deg, #065F46 0%, #059669 50%, #0284C7 100%)"
      />

      {/* Real Sound Technology & Parent Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #ECFDF5 0%, #EFF6FF 100%)',
          borderRadius: '24px',
          border: '3px solid #A7F3D0',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 300px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: soundEnabled ? '#10B981' : '#94A3B8',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
              flexShrink: 0,
            }}
          >
            {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#065F46', margin: 0 }}>
                {soundEnabled ? 'Live Voice & Real Audio Active!' : 'Audio Muted'}
              </h4>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  backgroundColor: '#D1FAE5',
                  color: '#047857',
                  padding: '2px 8px',
                  borderRadius: '10px',
                }}
              >
                Zero-Latency Web Audio & Speech
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0 0 0' }}>
              Animal sounds, musical notes, and spoken words play <strong>live in your browser</strong> using HTML5 Audio synthesis and friendly SpeechSynthesis!
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => {
              if (soundEnabled) {
                playAnimalSoundEffect('lion');
              }
            }}
            style={{
              padding: '8px 16px',
              borderRadius: '14px',
              backgroundColor: '#FFFFFF',
              color: '#059669',
              fontSize: '13px',
              fontWeight: 700,
              border: '2px solid #6EE7B7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <Sparkles size={16} />
            <span>Test Sound 🔊</span>
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            style={{
              padding: '8px 16px',
              borderRadius: '14px',
              backgroundColor: soundEnabled ? '#10B981' : '#64748B',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            {soundEnabled ? 'Sound: ON 🔊' : 'Sound: OFF 🔇'}
          </button>
        </div>
      </div>

      {/* Activity Filter Badges */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          padding: '4px 2px 8px 2px',
          scrollbarWidth: 'none',
        }}
      >
        {[
          { id: 'all', label: '⭐ All 8 Activities' },
          { id: 'animals', label: '🦁 Animal Safari' },
          { id: 'colors', label: '🎈 Colors' },
          { id: 'piano', label: '🎹 Rainbow Piano' },
          { id: 'abc', label: '🔤 ABC Phonics' },
          { id: 'stars', label: '⭐ Star Counting' },
          { id: 'body', label: '👀 Body Parts' },
          { id: 'shapes', label: '🔺 Shapes' },
          { id: 'fruits', label: '🍎 Sweet Fruits' },
        ].map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: '9px 18px',
                borderRadius: '22px',
                fontSize: '13.5px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                border: isActive ? '2px solid #1D4ED8' : '2px solid transparent',
                backgroundColor: isActive ? '#2563EB' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#475569',
                boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.3)' : '0 2px 6px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.18s ease',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Container of Interactive Learning Zones */}
      <div
        style={
          activeFilter === 'all'
            ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '24px',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }
        }
      >
        {/* ============================================================== */}
        {/* ACTIVITY 1: ANIMAL SOUND SAFARI (ONLY Authentic Animal Sounds) */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'animals') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #FED7AA',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(249, 115, 22, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>🦁</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#C2410C', margin: 0, fontWeight: 800 }}>
                    Animal Sound Safari
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Tap any animal to hear their <strong>real roar, chirp, moo & ribbit!</strong>
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#FFEDD5',
                  color: '#C2410C',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                10 Real Sounds
              </span>
            </div>

            {/* Animal Showcase Podium */}
            <div
              style={{
                padding: '20px',
                borderRadius: '24px',
                background: activeAnimal.bg,
                border: `2px solid ${activeAnimal.color}40`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
                transition: 'all 0.25s ease',
              }}
            >
              <div
                style={{
                  fontSize: '56px',
                  lineHeight: 1,
                  marginBottom: '8px',
                  transform: isAnimalPlaying ? 'scale(1.2) translateY(-4px)' : 'scale(1)',
                  transition: 'transform 0.25s ease',
                }}
              >
                {activeAnimal.icon}
              </div>
              <h4 style={{ fontSize: '20px', color: activeAnimal.color, margin: '0 0 4px 0', fontWeight: 800 }}>
                {activeAnimal.name}
              </h4>
              <p
                style={{
                  fontSize: '15px',
                  color: '#475569',
                  fontStyle: 'italic',
                  margin: '0 0 12px 0',
                  fontWeight: 700,
                }}
              >
                "{activeAnimal.soundText}"
              </p>

              <button
                onClick={() => handlePlayAnimalSound(activeAnimal)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '16px',
                  backgroundColor: activeAnimal.color,
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: `0 4px 12px ${activeAnimal.color}40`,
                }}
              >
                <Volume2 size={16} />
                <span>Play Animal Sound 🔊</span>
              </button>
            </div>

            {/* Animals Grid Selector (Proper gap & translateY to prevent touching) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '12px',
                padding: '4px',
              }}
            >
              {animals.map((a) => {
                const isSelected = activeAnimal.id === a.id;
                return (
                  <button
                    key={a.id}
                    onClick={() => handlePlayAnimalSound(a)}
                    title={`Hear ${a.name}`}
                    style={{
                      height: '54px',
                      borderRadius: '16px',
                      fontSize: '24px',
                      backgroundColor: isSelected ? a.bg : '#F8FAFC',
                      border: isSelected ? `3px solid ${a.color}` : '2px solid #E2E8F0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isSelected ? `0 6px 14px ${a.color}40` : '0 2px 4px rgba(0,0,0,0.04)',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    {a.icon}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 2: RAINBOW COLOR EXPLORER */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'colors') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #BAE6FD',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(56, 189, 248, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>🎈</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0369A1', margin: 0, fontWeight: 800 }}>
                    Rainbow Color Balloons
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Tap a balloon to hear its cheerful musical tone & spoken name!
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#E0F2FE',
                  color: '#0284C7',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                7 Colors
              </span>
            </div>

            {/* Interactive Color Canvas */}
            <div
              style={{
                padding: '20px',
                borderRadius: '24px',
                background: `${activeColor.hex}18`,
                border: `3px solid ${activeColor.hex}`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
                transition: 'all 0.25s ease',
              }}
            >
              <span style={{ fontSize: '48px', marginBottom: '4px' }} className="animate-float">
                {activeColor.emoji}
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 800,
                  color: activeColor.hex,
                  margin: '0 0 4px 0',
                }}
              >
                {activeColor.name}
              </h4>
              <p style={{ fontSize: '13.5px', color: '#475569', margin: '0 0 10px 0', fontWeight: 600 }}>
                {activeColor.phrase}
              </p>
              <button
                onClick={() => handleSelectColor(activeColor)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '14px',
                  backgroundColor: activeColor.hex,
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                }}
              >
                Hear Color Again 🔊
              </button>
            </div>

            {/* 7 Color Balloon Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', padding: '4px' }}>
              {colors.map((c) => {
                const isSelected = activeColor.name === c.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => handleSelectColor(c)}
                    title={c.name}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: isSelected ? '3.5px solid #0F172A' : '3px solid #FFFFFF',
                      boxShadow: isSelected ? '0 8px 16px rgba(0,0,0,0.22)' : '0 3px 8px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transform: isSelected ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.18s ease',
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 3: HEAD, SHOULDERS & DISCOVERY */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'body') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #DDD6FE',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>👀</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#6D28D9', margin: 0, fontWeight: 800 }}>
                    Head, Shoulders & Senses
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Tap any body part to hear what wonderful superpowers it has!
                  </p>
                </div>
              </div>
              <button
                onClick={handleRandomChallenge}
                title="Simon Says Challenge!"
                style={{
                  padding: '6px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#EDE9FE',
                  color: '#6D28D9',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: '1.5px solid #C4B5FD',
                  cursor: 'pointer',
                }}
              >
                🎲 Challenge!
              </button>
            </div>

            {/* Simon Says Challenge Bar */}
            <div
              style={{
                backgroundColor: '#FAF5FF',
                border: '2px dashed #C4B5FD',
                borderRadius: '16px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={18} color="#9333EA" />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#7E22CE' }}>
                {challengeText}
              </span>
            </div>

            {/* 6 Body Parts Interactive Buttons */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '4px',
              }}
            >
              {bodyParts.map((item) => {
                const isSelected = activeBodyPart.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectBodyPart(item)}
                    style={{
                      padding: '12px 8px',
                      borderRadius: '16px',
                      backgroundColor: isSelected ? '#EDE9FE' : '#F8FAFC',
                      border: isSelected ? '2.5px solid #7C3AED' : '1.5px solid #E2E8F0',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.18s ease',
                      transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isSelected ? '0 6px 14px rgba(124, 58, 237, 0.2)' : '0 2px 4px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{ fontSize: '26px', marginBottom: '2px' }}>{item.icon}</div>
                    <strong style={{ fontSize: '13px', color: '#5B21B6', display: 'block' }}>
                      {item.name}
                    </strong>
                    <span style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 600 }}>
                      {item.action}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 4: STAR COUNTING GARDEN */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'stars') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #FEF08A',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(234, 179, 8, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>⭐</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#A16207', margin: 0, fontWeight: 800 }}>
                    Star Counting Garden
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Tap stars to count from 1 to 10 with celebration fanfare!
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#FEF9C3',
                  color: '#A16207',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                Max 10 Stars
              </span>
            </div>

            {/* Stars Display Field */}
            <div
              style={{
                padding: '16px',
                borderRadius: '24px',
                background: '#FEF9C3',
                border: '2px solid #FDE047',
                textAlign: 'center',
                minHeight: '145px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '320px',
                }}
              >
                {Array.from({ length: starCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleTapIndividualStar(i)}
                    title={`Star ${i + 1}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '30px',
                      cursor: 'pointer',
                      transform: 'scale(1)',
                      transition: 'transform 0.15s ease',
                      padding: 0,
                    }}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <strong style={{ fontSize: '18px', color: '#854D0E', fontFamily: 'var(--font-display)' }}>
                {starMessage}
              </strong>
            </div>

            {/* Star Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={handleRemoveStar}
                disabled={starCount <= 1}
                style={{
                  padding: '8px 16px',
                  borderRadius: '14px',
                  backgroundColor: '#FEF3C7',
                  color: '#B45309',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: '2px solid #FDE68A',
                  cursor: starCount <= 1 ? 'not-allowed' : 'pointer',
                  opacity: starCount <= 1 ? 0.5 : 1,
                }}
              >
                - 1 Star
              </button>
              <button
                onClick={handleAddStar}
                disabled={starCount >= 10}
                style={{
                  padding: '8px 20px',
                  borderRadius: '14px',
                  backgroundColor: '#F59E0B',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: starCount >= 10 ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)',
                  opacity: starCount >= 10 ? 0.5 : 1,
                }}
              >
                + Add Star ⭐
              </button>
              <button
                onClick={handleCountAllStars}
                style={{
                  padding: '8px 16px',
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  color: '#A16207',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: '2px solid #FDE047',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Volume2 size={15} />
                <span>Count All!</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 5: ABC PHONICS (Natural Speech: "A is for apple...") */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'abc') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #BFDBFE',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>🔤</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#1D4ED8', margin: 0, fontWeight: 800 }}>
                    ABC Phonics & Letters
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Click letters to hear clean spoken phonics & words!
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#DBEAFE',
                  color: '#1E40AF',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                Early Reading
              </span>
            </div>

            {/* Phonics Active Card */}
            <div
              style={{
                padding: '20px',
                borderRadius: '24px',
                background: '#EFF6FF',
                border: `2px solid ${activeLetter.color}50`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '52px',
                    fontWeight: 800,
                    color: activeLetter.color,
                  }}
                >
                  {activeLetter.letter}
                </span>
                <span style={{ fontSize: '46px' }}>{activeLetter.emoji}</span>
              </div>
              <h4 style={{ fontSize: '20px', color: '#1E293B', margin: '0 0 4px 0', fontWeight: 800 }}>
                {activeLetter.letter} is for {activeLetter.word}!
              </h4>
              <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 10px 0', fontWeight: 600 }}>
                {activeLetter.displayText}
              </p>
              <button
                onClick={() => handleSelectLetter(activeLetter)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '14px',
                  backgroundColor: activeLetter.color,
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 4px 12px ${activeLetter.color}40`,
                }}
              >
                Hear Phonics Again 🔊
              </button>
            </div>

            {/* Letters Grid (Proper gap & translateY to prevent touching) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '12px',
                padding: '4px',
              }}
            >
              {alphabetData.map((item) => {
                const isSelected = activeLetter.letter === item.letter;
                return (
                  <button
                    key={item.letter}
                    onClick={() => handleSelectLetter(item)}
                    style={{
                      height: '50px',
                      borderRadius: '14px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 800,
                      backgroundColor: isSelected ? '#EFF6FF' : '#F8FAFC',
                      color: isSelected ? item.color : '#334155',
                      border: isSelected ? `3px solid ${item.color}` : '2px solid #E2E8F0',
                      cursor: 'pointer',
                      transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isSelected ? `0 6px 14px ${item.color}35` : '0 2px 4px rgba(0,0,0,0.04)',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    {item.letter}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 6: RAINBOW CARTOON XYLOPHONE / PIANO */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'piano') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #FBCFE8',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(236, 72, 153, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>🎹</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#BE185D', margin: 0, fontWeight: 800 }}>
                    Rainbow Cartoon Xylophone
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Play real musical scales & cute nursery song tunes!
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#FCE7F3',
                  color: '#BE185D',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                8 Notes
              </span>
            </div>

            {/* Xylophone Keyboard Keys */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: '145px',
                padding: '12px 10px',
                backgroundColor: '#FFF1F2',
                borderRadius: '20px',
                border: '2px solid #F43F5E30',
              }}
            >
              {xylophoneKeys.map((k, idx) => {
                const heightPercent = 100 - idx * 4;
                const isPressed = playingKey === k.note;
                return (
                  <button
                    key={k.note}
                    onClick={() => handlePlayKey(k)}
                    style={{
                      flex: 1,
                      height: `${heightPercent}%`,
                      backgroundColor: k.color,
                      borderRadius: '12px',
                      border: '2px solid #FFFFFF',
                      boxShadow: isPressed
                        ? '0 1px 2px rgba(0,0,0,0.2)'
                        : '0 6px 12px rgba(0,0,0,0.18)',
                      transform: isPressed ? 'translateY(4px)' : 'translateY(0)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 2px',
                      transition: 'transform 0.08s ease, box-shadow 0.08s ease',
                    }}
                  >
                    <span style={{ fontSize: '11px', fontWeight: 800, color: k.labelColor }}>
                      {k.note}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: k.labelColor,
                        opacity: 0.9,
                      }}
                    >
                      {k.solfege}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Auto Play Nursery Songs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={playSongTwinkle}
                style={{
                  padding: '8px 16px',
                  borderRadius: '14px',
                  backgroundColor: '#FFF1F2',
                  color: '#BE185D',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: '1.5px solid #FDA4AF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Music size={15} />
                <span>Twinkle Twinkle 🌟</span>
              </button>
              <button
                onClick={playSongHappyBirthday}
                style={{
                  padding: '8px 16px',
                  borderRadius: '14px',
                  backgroundColor: '#EFF6FF',
                  color: '#1D4ED8',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: '1.5px solid #93C5FD',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Music size={15} />
                <span>Happy Birthday 🎂</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 7: MAGIC SHAPES KINGDOM */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'shapes') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #FEF08A',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(202, 138, 4, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>🔺</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#A16207', margin: 0, fontWeight: 800 }}>
                    Shapes Magic Kingdom
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Learn circles, triangles, stars & hearts with cheerful rhymes!
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#FEF9C3',
                  color: '#854D0E',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                Geometry Fun
              </span>
            </div>

            {/* Shape Active Stage */}
            <div
              style={{
                padding: '20px',
                borderRadius: '24px',
                background: '#FEFCE8',
                border: `2px solid ${activeShape.color}60`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
              }}
            >
              <span style={{ fontSize: '48px', marginBottom: '6px' }} className="animate-float">
                {activeShape.symbol}
              </span>
              <h4 style={{ fontSize: '20px', color: activeShape.color, margin: '0 0 4px 0', fontWeight: 800 }}>
                {activeShape.name}
              </h4>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#64748B',
                  backgroundColor: '#FFFFFF',
                  padding: '2px 10px',
                  borderRadius: '10px',
                  marginBottom: '8px',
                  border: '1px solid #E2E8F0',
                }}
              >
                {activeShape.corners}
              </span>
              <p style={{ fontSize: '13.5px', color: '#475569', margin: '0', fontWeight: 600 }}>
                {activeShape.phrase}
              </p>
            </div>

            {/* Shape Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '4px' }}>
              {shapesData.map((s) => {
                const isSelected = activeShape.name === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => handleSelectShape(s)}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '14px',
                      backgroundColor: isSelected ? '#FEF08A' : '#F8FAFC',
                      border: isSelected ? `2.5px solid ${s.color}` : '1.5px solid #E2E8F0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: isSelected ? '#854D0E' : '#334155',
                      transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isSelected ? '0 6px 14px rgba(234, 179, 8, 0.25)' : '0 2px 4px rgba(0,0,0,0.04)',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    <span>{s.symbol}</span>
                    <span>{s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ACTIVITY 8: YUMMY FRUITS & HEALTHY BASKET */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'fruits') && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              border: '3px solid #BBF7D0',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(34, 197, 94, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: activeFilter === 'all' ? '100%' : '720px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '32px' }}>🍎</span>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#15803D', margin: 0, fontWeight: 800 }}>
                    Sweet Healthy Fruits
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0 0' }}>
                    Tap delicious fruits for crispy crunch sounds & nutrition facts!
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: '#DCFCE7',
                  color: '#15803D',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                Healthy Habits
              </span>
            </div>

            {/* Active Fruit Showcase */}
            <div
              style={{
                padding: '20px',
                borderRadius: '24px',
                background: '#F0FDF4',
                border: `2px solid ${activeFruit.color}50`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
              }}
            >
              <span style={{ fontSize: '48px', marginBottom: '6px' }} className="animate-float">
                {activeFruit.emoji}
              </span>
              <h4 style={{ fontSize: '20px', color: activeFruit.color, margin: '0 0 4px 0', fontWeight: 800 }}>
                {activeFruit.name}
              </h4>
              <p style={{ fontSize: '13.5px', color: '#475569', margin: '0 0 10px 0', fontWeight: 600 }}>
                "{activeFruit.fact}"
              </p>
              <button
                onClick={() => handleSelectFruit(activeFruit)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '14px',
                  backgroundColor: activeFruit.color,
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                }}
              >
                Take a Yummy Bite! 😋
              </button>
            </div>

            {/* Fruits Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '4px' }}>
              {fruitsData.map((f) => {
                const isSelected = activeFruit.name === f.name;
                return (
                  <button
                    key={f.name}
                    onClick={() => handleSelectFruit(f)}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '14px',
                      backgroundColor: isSelected ? '#DCFCE7' : '#F8FAFC',
                      border: isSelected ? `2.5px solid ${f.color}` : '1.5px solid #E2E8F0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: isSelected ? '#15803D' : '#334155',
                      transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isSelected ? '0 6px 14px rgba(34, 197, 94, 0.25)' : '0 2px 4px rgba(0,0,0,0.04)',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    <span>{f.emoji}</span>
                    <span>{f.name.split(' ')[1] || f.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Parents & Early Learning Note Footer */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '3px solid #EDE9FE',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 6px 18px rgba(139, 92, 246, 0.06)',
        }}
      >
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#F3E8FF',
            color: '#7C3AED',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Lightbulb size={24} />
        </div>
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#5B21B6', margin: '0 0 4px 0' }}>
            Note for Parents & Teachers
          </h4>
          <p style={{ fontSize: '13px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
            All activities in Coco's Play & Learn zone are designed with repetition, multi-sensory feedback (visual animation + musical tones + clean phonics pronunciation), and positive encouragement to foster early cognitive development for kids aged 2 to 6.
          </p>
        </div>
      </div>
    </div>
  );
};
