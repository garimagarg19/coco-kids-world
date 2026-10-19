import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  Heart, 
  Star, 
  BookOpen, 
  Volume2, 
  Type, 
  Share2, 
  Check, 
  Play, 
  ArrowRight,
  Smile
} from 'lucide-react';
import { getStoryById, ALL_STORIES, StoryItem } from '../../data/storiesData';
import { YoutubeIcon } from '../../components/common/YoutubeIcon';

export const StoryDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story: StoryItem = getStoryById(id || '') || ALL_STORIES[0];

  // Font size multiplier: 0 = standard (18px), 1 = medium (20px), 2 = large (23px)
  const [fontSizeStep, setFontSizeStep] = useState<number>(0);
  const [hasLoved, setHasLoved] = useState<boolean>(false);
  const [loveCount, setLoveCount] = useState<number>(348);
  const [copied, setCopied] = useState<boolean>(false);

  // Scroll to top when story changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fontSizes = ['17.5px', '20px', '23px'];
  const currentFontSize = fontSizes[fontSizeStep];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLove = () => {
    if (!hasLoved) {
      setLoveCount(loveCount + 1);
      setHasLoved(true);
    } else {
      setLoveCount(loveCount - 1);
      setHasLoved(false);
    }
  };

  // Find other stories for the next reading recommendation
  const otherStories = ALL_STORIES.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Top Navigation & Reader Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <Link
          to="/stories"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #E2E8F0',
            color: '#475569',
            fontSize: '14px',
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.15s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-3px)';
            e.currentTarget.style.borderColor = story.accentColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = '#E2E8F0';
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Stories</span>
        </Link>

        {/* Reader Controls: Font Size & Share */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '2px solid #E2E8F0',
              borderRadius: '16px',
              padding: '4px 8px',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', padding: '0 4px' }}>
              Text Size:
            </span>
            <button
              onClick={() => setFontSizeStep(Math.max(0, fontSizeStep - 1))}
              disabled={fontSizeStep === 0}
              title="Smaller Text"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '10px',
                backgroundColor: fontSizeStep === 0 ? '#F1F5F9' : '#F8FAFC',
                border: '1px solid #E2E8F0',
                color: '#334155',
                fontWeight: 700,
                fontSize: '12px',
                cursor: fontSizeStep === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeStep(Math.min(2, fontSizeStep + 1))}
              disabled={fontSizeStep === 2}
              title="Larger Text for Bedtime Reading"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '10px',
                backgroundColor: fontSizeStep === 2 ? '#F1F5F9' : '#F8FAFC',
                border: '1px solid #E2E8F0',
                color: '#334155',
                fontWeight: 700,
                fontSize: '14px',
                cursor: fontSizeStep === 2 ? 'not-allowed' : 'pointer',
              }}
            >
              A+
            </button>
          </div>

          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #E2E8F0',
              color: '#475569',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              cursor: 'pointer',
            }}
          >
            {copied ? <Check size={14} color="#10B981" /> : <Share2 size={14} />}
            <span>{copied ? 'Link Copied!' : 'Share Story'}</span>
          </button>
        </div>
      </div>

      {/* Story Header & Character Badge Hero Card */}
      <header
        style={{
          background: `linear-gradient(135deg, #FFFFFF 0%, ${story.bg} 100%)`,
          borderRadius: '32px',
          border: `4px solid ${story.border}`,
          padding: 'clamp(24px, 4vw, 42px)',
          boxShadow: `0 16px 36px ${story.border}66`,
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '28px',
          alignItems: 'center',
        }}
        className="story-header-grid"
      >
        {/* Giant Cover Mascot Emoji */}
        <div
          style={{
            width: 'clamp(80px, 12vw, 110px)',
            height: 'clamp(80px, 12vw, 110px)',
            borderRadius: '28px',
            backgroundColor: '#FFFFFF',
            border: `3px solid ${story.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(44px, 7vw, 64px)',
            boxShadow: `0 10px 24px ${story.accentColor}25`,
            flexShrink: 0,
          }}
          className="animate-float"
        >
          {story.coverEmoji}
        </div>

        <div>
          {/* Metadata Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <span
              style={{
                backgroundColor: story.accentColor,
                color: '#FFFFFF',
                padding: '4px 14px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.02em',
              }}
            >
              {story.moralTag}
            </span>
            <span
              style={{
                backgroundColor: '#FFFFFF',
                color: '#64748B',
                border: '1px solid #E2E8F0',
                padding: '4px 10px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Clock size={13} /> {story.readTime}
            </span>
            <span
              style={{
                backgroundColor: '#FFFFFF',
                color: '#64748B',
                border: '1px solid #E2E8F0',
                padding: '4px 10px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              👶 {story.ageGroup}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(24px, 4.5vw, 38px)',
              lineHeight: 1.2,
              marginBottom: '12px',
              color: '#1E293B',
            }}
          >
            {story.title}
          </h1>

          <p style={{ color: '#475569', fontSize: '15.5px', lineHeight: 1.5, marginBottom: '16px' }}>
            {story.excerpt}
          </p>

          {/* Character Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#64748B', fontFamily: 'var(--font-display)' }}>
              Featuring:
            </span>
            {story.characterBadges.map((char, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${char.color}33`,
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: char.color,
                  fontFamily: 'var(--font-display)',
                }}
              >
                <span>{char.icon}</span>
                <span>{char.name}</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Storyteller Voice & Reading Tip */}
      <div
        style={{
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)',
          borderRadius: '20px',
          border: '2px dashed #FDE68A',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span style={{ fontSize: '24px' }}>💡</span>
        <div>
          <strong style={{ fontSize: '13.5px', color: '#92400E', display: 'block', fontFamily: 'var(--font-display)' }}>
            Storyteller’s Fun Tip for Parents & Kids:
          </strong>
          <span style={{ fontSize: '13.5px', color: '#B45309', fontStyle: 'italic' }}>
            "{story.storytellerTip}"
          </span>
        </div>
      </div>

      {/* Story Book Fairytale Canvas */}
      <article
        style={{
          backgroundColor: '#FFFDF9',
          borderRadius: '36px',
          border: `4px solid ${story.border}`,
          padding: 'clamp(28px, 6vw, 56px)',
          boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.06)',
          position: 'relative',
        }}
      >
        {/* Decorative Fairytale Book Ribbon */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '48px',
            width: '28px',
            height: '42px',
            backgroundColor: story.accentColor,
            borderBottomLeftRadius: '6px',
            borderBottomRightRadius: '6px',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          }}
          title="Fairytale Bookmark"
        />

        {/* Chapters Loop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>
          {story.chapters.map((chap) => (
            <section key={chap.chapterNumber}>
              {/* Chapter Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: `2px dashed ${story.border}`,
                }}
              >
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: story.bg,
                    color: story.textColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    border: `2px solid ${story.border}`,
                  }}
                >
                  {chap.chapterNumber}
                </span>

                <h2
                  style={{
                    fontSize: 'clamp(19px, 3vw, 24px)',
                    color: '#1E293B',
                    margin: 0,
                  }}
                >
                  {chap.chapterTitle}
                </h2>

                <span style={{ fontSize: '24px', marginLeft: 'auto' }}>{chap.emoji}</span>
              </div>

              {/* Chapter Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {chap.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      fontSize: currentFontSize,
                      lineHeight: 1.8,
                      color: '#334155',
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Golden Star Moral of the Story Chest */}
        <div
          style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 40%, #FEF9C3 100%)',
            borderRadius: '28px',
            border: '3px solid #FACC15',
            padding: 'clamp(24px, 4vw, 36px)',
            boxShadow: '0 12px 28px rgba(234, 179, 8, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '32px' }} className="animate-float">
              ⭐
            </span>
            <div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#A16207',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Golden Star Lesson
              </span>
              <h3 style={{ fontSize: '22px', color: '#713F12', margin: 0 }}>
                {story.moralLesson.title}
              </h3>
            </div>
          </div>

          <p style={{ fontSize: '15.5px', color: '#854D0E', lineHeight: 1.6, margin: 0 }}>
            {story.moralLesson.description}
          </p>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '12px 18px',
              border: '2px dashed #FDE047',
              color: '#A16207',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: '15px',
              fontFamily: 'var(--font-display)',
            }}
          >
            {story.moralLesson.quote}
          </div>
        </div>

        {/* Story Reaction Bar */}
        <div
          style={{
            marginTop: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '2px solid #F1F5F9',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleLove}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '20px',
                backgroundColor: hasLoved ? '#FCE7F3' : '#F8FAFC',
                color: hasLoved ? '#EC4899' : '#64748B',
                border: `2px solid ${hasLoved ? '#F472B6' : '#E2E8F0'}`,
                fontSize: '14.5px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Heart size={18} fill={hasLoved ? '#EC4899' : 'none'} />
              <span>{loveCount} Loved It!</span>
            </button>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '20px',
                backgroundColor: '#EFF6FF',
                color: '#2563EB',
                border: '2px solid #DBEAFE',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
              }}
            >
              <Star size={16} fill="#3B82F6" />
              <span>Bedtime Favorite ⭐</span>
            </span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor: '#F8FAFC',
              border: '2px solid #E2E8F0',
              color: '#475569',
              fontSize: '13.5px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              cursor: 'pointer',
            }}
          >
            <span>Read Again 🔄</span>
          </button>
        </div>
      </article>

      {/* Official YouTube Video Companion (If story has matching animated cartoon) */}
      {story.relatedVideoId && (
        <section
          style={{
            background: 'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 50%, #FCE7F3 100%)',
            borderRadius: '28px',
            border: '3px solid #FECDD3',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 8px 24px rgba(244, 63, 94, 0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                backgroundColor: '#FF0000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
                flexShrink: 0,
              }}
            >
              <YoutubeIcon size={26} fill="#FFFFFF" />
            </div>
            <div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#BE123C',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Watch the Animated 3D Cartoon Episode
              </span>
              <h3 style={{ fontSize: '18px', color: '#881337', margin: 0 }}>
                {story.relatedVideoTitle}
              </h3>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link
              to={`/videos/${story.relatedVideoId}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '18px',
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
              }}
            >
              <Play size={16} fill="#FFFFFF" />
              <span>Watch Episode</span>
            </Link>
          </div>
        </section>
      )}

      {/* More Magical Stories to Explore */}
      <section style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '24px', color: '#1E293B', margin: 0 }}>
              📖 More Magical Tales to Read
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              Keep the storytime magic going with more adventures!
            </p>
          </div>

          <Link
            to="/stories"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#7C3AED',
              fontWeight: 700,
              fontSize: '14px',
              fontFamily: 'var(--font-display)',
              textDecoration: 'none',
            }}
          >
            <span>See All 9 Stories</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {otherStories.map((other) => (
            <Link
              key={other.id}
              to={`/stories/${other.id}`}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px',
                border: `3px solid ${other.border}`,
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 14px 28px ${other.accentColor}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '28px' }}>{other.coverEmoji}</span>
                <span
                  style={{
                    backgroundColor: other.bg,
                    color: other.textColor,
                    padding: '3px 10px',
                    borderRadius: '10px',
                    fontSize: '11px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {other.readTime}
                </span>
              </div>

              <h4 style={{ fontSize: '17px', color: '#1E293B', margin: 0, lineHeight: 1.3 }}>
                {other.title}
              </h4>

              <p
                style={{
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: 1.5,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {other.excerpt}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: other.accentColor,
                  fontWeight: 700,
                  fontSize: '13px',
                  fontFamily: 'var(--font-display)',
                  paddingTop: '8px',
                }}
              >
                <span>Read Episode</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 680px) {
          .story-header-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </div>
  );
};
