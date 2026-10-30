import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Sparkles, BookOpen, Music, Gamepad2, Heart, ArrowRight, Play, Clock, Eye } from 'lucide-react';
import { YoutubeIcon } from '../../components/common/YoutubeIcon';
import { CHARACTERS } from '../../data/characters';
import { YOUTUBE_VIDEOS, CHANNEL_INFO, YOUTUBE_SHORTS } from '../../data/youtubeData';
import { ShortsSlider } from '../../components/common/ShortsSlider';



export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* Magical 3D Hero Section */}
      <section
        className="home-hero-card"
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(243, 232, 255, 0.8) 50%, rgba(254, 240, 138, 0.4) 100%)',
          borderRadius: '32px',
          border: '4px solid #FFFFFF',
          boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.15)',
          overflow: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Hero Content */}
        <div style={{ zIndex: 2, minWidth: 0, width: '100%' }}>
          {/* Welcome Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: '#FFE4E9',
              color: '#E11D48',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(12px, 3.2vw, 14px)',
              marginBottom: '16px',
              boxShadow: '0 4px 10px rgba(225, 29, 72, 0.15)',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ flexShrink: 0 }}>🎈</span>
            <span style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
              Welcome to the Official Cartoon World
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(24px, 4.5vw, 48px)',
              lineHeight: 1.18,
              fontWeight: 700,
              marginBottom: '16px',
              maxWidth: '100%',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(120deg, #1E293B 0%, #7C3AED 50%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline',
              }}
            >
              Laugh, Sing & Explore in Coco’s Magical Cartoon Kingdom!
            </span>{' '}
            <span style={{ display: 'inline-block' }}>🌟</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 2.2vw, 19px)',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '520px',
              overflowWrap: 'break-word',
            }}
          >
            Join Coco the Bunny, Leo the Lion, and cheerful friends for colorful adventures, cheerful rhymes, and joyful learning every single day.
          </p>

          {/* Action Buttons */}
          <div className="hero-action-buttons">
            <Link
              to="/videos"
              className="hero-btn hero-btn-watch"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #FF4B82 0%, #EC4899 50%, #D946EF 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                border: '2px solid #FFFFFF',
                boxShadow: '0 5px 0 #9D174D, 0 10px 20px rgba(236, 72, 153, 0.32)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(3px)';
                e.currentTarget.style.boxShadow = '0 2px 0 #9D174D, 0 4px 8px rgba(236, 72, 153, 0.22)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 0 #9D174D, 0 10px 20px rgba(236, 72, 153, 0.32)';
              }}
            >
              <PlayCircle size={20} fill="rgba(255,255,255,0.2)" color="#FFFFFF" style={{ flexShrink: 0 }} />
              <span>Watch Cartoons</span>
            </Link>

            <Link
              to="/songs-rhymes"
              className="hero-btn hero-btn-sing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #FDE047 0%, #F59E0B 100%)',
                color: '#78350F',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                border: '2px solid #FFFFFF',
                boxShadow: '0 5px 0 #B45309, 0 10px 20px rgba(245, 158, 11, 0.28)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(3px)';
                e.currentTarget.style.boxShadow = '0 2px 0 #B45309, 0 4px 8px rgba(245, 158, 11, 0.2)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 0 #B45309, 0 10px 20px rgba(245, 158, 11, 0.28)';
              }}
            >
              <Music size={19} color="#78350F" style={{ flexShrink: 0 }} />
              <span>Sing Songs</span>
            </Link>
          </div>
        </div>

        {/* Right Hero Mascot & 3D Cartoon Asset */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            minWidth: 0,
          }}
        >
          {/* Animated 3D Mascot Card */}
          <div
            className="animate-float"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '340px',
              aspectRatio: '1',
              borderRadius: '28px',
              padding: '10px',
              background: 'linear-gradient(135deg, #FFFFFF, #E0F2FE)',
              boxShadow: '0 16px 36px rgba(56, 189, 248, 0.22)',
              border: '4px solid #FFFFFF',
              overflow: 'hidden',
              boxSizing: 'border-box',
              margin: '0 auto',
            }}
          >
            <img
              src="/coco-mascot.jpg"
              alt="Coco the Bunny Mascot"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block',
              }}
            />
            {/* Mascot floating ribbon */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '6px 16px',
                borderRadius: '9999px',
                border: '2px solid #FBCFE8',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                maxWidth: '92%',
                boxSizing: 'border-box',
              }}
            >
              <Sparkles size={15} color="#EC4899" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 3.2vw, 14px)',
                  color: '#BE185D',
                }}
              >
                Say Hi to Coco! 🐰✨
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Magical World Preview Banner */}
      <section
        style={{
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0 16px 36px rgba(99, 102, 241, 0.12)',
          border: '3px solid #FFFFFF',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ position: 'relative', width: '100%', minHeight: '260px', height: 'clamp(260px, 35vw, 320px)' }}>
          <img
            src="/magical-world.jpg"
            alt="Magical World of Coco Kids"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(30, 27, 75, 0.8) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'clamp(16px, 4vw, 36px)',
              color: '#FFFFFF',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '16px',
                width: 'fit-content',
                maxWidth: '100%',
                fontSize: 'clamp(11px, 3vw, 13px)',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                marginBottom: '8px',
              }}
            >
              🌈 A Land of Wonder & Play
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 32px)', color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.25, overflowWrap: 'break-word' }}>
              Step Into the Floating Island of Sweet Songs & Stories
            </h2>
            <p style={{ maxWidth: '600px', fontSize: 'clamp(13px, 2.5vw, 15px)', color: '#E0E7FF', overflowWrap: 'break-word' }}>
              Explore candy hills, marshmallow clouds, and sparkling waterfalls with Coco and friends.
            </p>
          </div>
        </div>
      </section>

      {/* Real YouTube Channel Videos Section */}
      <section>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: '#FEE2E2',
                color: '#EF4444',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                marginBottom: '6px',
              }}
            >
              <YoutubeIcon size={14} fill="#EF4444" />
              <span>Official Channel Videos ({CHANNEL_INFO.handle})</span>
            </div>
            <h2 style={{ fontSize: '28px', color: '#1E293B' }}>
              🌟 Featured Cartoon Episodes
            </h2>
          </div>

          <Link
            to="/videos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#2563EB',
              fontWeight: 700,
              fontSize: '14.5px',
              fontFamily: 'var(--font-display)',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '16px',
              backgroundColor: '#EFF6FF',
              border: '2px solid #DBEAFE',
              transition: 'all 0.15s ease',
            }}
          >
            <span>See All {YOUTUBE_VIDEOS.length} Videos</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {YOUTUBE_VIDEOS.slice(0, 3).map((video) => (
            <Link
              key={video.id}
              to={`/videos/${video.id}`}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '3px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(100, 116, 139, 0.08)',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#93C5FD';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(100, 116, 139, 0.08)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  backgroundColor: '#F1F5F9',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Clock size={11} />
                  <span>{video.duration}</span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    backgroundColor: video.badgeColor,
                    color: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {video.categoryLabel}
                </div>
              </div>

              <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: '8px',
                    color: '#1E293B',
                  }}
                >
                  {video.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.5,
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {video.description}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#94A3B8',
                    paddingTop: '10px',
                    borderTop: '1px solid #F1F5F9',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Eye size={13} /> {video.views}
                  </span>
                  <span
                    style={{
                      color: '#2563EB',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Play Episode →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Official YouTube Shorts Carousel Slider */}
      <ShortsSlider
        title="🌟 Trending YouTube Shorts & Rhymes"
        subtitle="Swipe or click the arrows to explore fun bite-sized moments, funny cartoons, and quick lessons!"
        shorts={YOUTUBE_SHORTS}
      />

      {/* Pages & Adventures Roadmap Navigation Cards */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2
            style={{
              fontSize: '28px',
              color: '#1E293B',
              marginBottom: '8px',
            }}
          >
            🎡 Explore the Magical Lands
          </h2>
          <p style={{ color: '#64748B', fontSize: '15px' }}>
            Choose a path to jump into your favorite videos, songs, or games!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Card 1: Videos */}
          <Link
            to="/videos"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '3px solid #DBEAFE',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(59, 130, 246, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.08)';
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                background: '#DBEAFE',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlayCircle size={28} />
            </div>
            <h3 style={{ fontSize: '20px', color: '#1E293B' }}>Cartoon Videos</h3>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.5 }}>
              Browse entertaining animated episodes, friendly skits, and full playlist adventures.
            </p>
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#2563EB',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span>Explore Videos</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 2: Stories */}
          <Link
            to="/stories"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '3px solid #EDE9FE',
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(139, 92, 246, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.08)';
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                background: '#EDE9FE',
                color: '#7C3AED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BookOpen size={28} />
            </div>
            <h3 style={{ fontSize: '20px', color: '#1E293B' }}>Stories & Adventures</h3>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.5 }}>
              Exciting fairy tales, bedtime stories, and uplifting moral lessons told by cute characters.
            </p>
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#7C3AED',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span>Read Stories</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 3: Play & Learn */}
          <Link
            to="/play-learn"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '3px solid #D1FAE5',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(16, 185, 129, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.08)';
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                background: '#D1FAE5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Gamepad2 size={28} />
            </div>
            <h3 style={{ fontSize: '20px', color: '#1E293B' }}>Play & Learn</h3>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.5 }}>
              Color discovery, ABC phonics, number games, animal sounds, and body parts recognition.
            </p>
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span>Start Learning</span>
              <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 4: Songs & Rhymes */}
          <Link
            to="/songs-rhymes"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '3px solid #FEF3C7',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(245, 158, 11, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 158, 11, 0.08)';
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                background: '#FEF3C7',
                color: '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Music size={28} />
            </div>
            <h3 style={{ fontSize: '20px', color: '#1E293B' }}>Songs & Rhymes</h3>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.5 }}>
              Catchy sing-alongs, calming bedtime lullabies, and lively dance songs for toddler parties.
            </p>
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#D97706',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span>Sing Rhymes</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* YouTube Channel Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 50%, #FCE7F3 100%)',
          borderRadius: '28px',
          border: '3px solid #FECDD3',
          padding: 'clamp(20px, 4vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 12px 28px rgba(244, 63, 94, 0.12)',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '580px', minWidth: 0, width: '100%' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: '#FF0000',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '10px',
            }}
          >
            <YoutubeIcon size={16} fill="#FFFFFF" />
            <span>Official YouTube Channel</span>
          </div>
          <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#881337', marginBottom: '8px', lineHeight: 1.25, overflowWrap: 'break-word' }}>
            Subscribe to Coco Kids World on YouTube! 📺
          </h2>
          <p style={{ color: '#9F1239', fontSize: '14.5px', lineHeight: 1.6, overflowWrap: 'break-word' }}>
            Never miss a new episode! New songs and animated stories are published every week in crystal clear animation.
          </p>
        </div>

        <a
          href="https://www.youtube.com/@CocoKidsWorld-h1o"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '14px 28px',
            borderRadius: '22px',
            background: '#FF0000',
            color: '#FFFFFF',
            fontSize: 'clamp(15px, 3.5vw, 17px)',
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            boxShadow: '0 5px 0 #991B1B, 0 10px 20px rgba(239, 68, 68, 0.35)',
            transition: 'transform 0.15s ease',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(3px)';
            e.currentTarget.style.boxShadow = '0 2px 0 #991B1B';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 5px 0 #991B1B, 0 10px 20px rgba(239, 68, 68, 0.35)';
          }}
        >
          <YoutubeIcon size={22} fill="#FFFFFF" />
          <span>Subscribe Now (Free)</span>
        </a>
      </section>

      {/* Responsive Styles for Home Hero Section */}
      <style>{`
        .home-hero-card {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 36px;
          padding: clamp(24px, 4.5vw, 54px);
        }
        .hero-action-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-btn {
          padding: 13px 26px;
          font-size: 15.5px;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.04);
        }
        @media (max-width: 860px) {
          .home-hero-card {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 24px 18px !important;
            border-radius: 28px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-action-buttons {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .hero-btn {
            padding: 12px 6px !important;
            font-size: clamp(12px, 3.4vw, 14px) !important;
            gap: 6px !important;
            border-radius: 20px !important;
            letter-spacing: -0.01em;
          }
          .hero-btn svg {
            width: 17px !important;
            height: 17px !important;
          }
        }
        @media (max-width: 480px) {
          .home-hero-card {
            padding: 20px 14px !important;
            border-radius: 24px !important;
            gap: 22px !important;
          }
        }
        @media (max-width: 340px) {
          .hero-action-buttons {
            gap: 6px !important;
          }
          .hero-btn {
            padding: 10px 4px !important;
            font-size: 11px !important;
            gap: 4px !important;
          }
          .hero-btn svg {
            width: 14px !important;
            height: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};
