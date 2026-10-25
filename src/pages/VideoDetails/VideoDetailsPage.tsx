import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Heart, Star, Sparkles, Clock, Eye } from 'lucide-react';
import { YoutubeIcon } from '../../components/common/YoutubeIcon';
import { SAMPLE_VIDEOS } from '../../data/sampleData';


export const VideoDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);

  // Find matching video or fallback to first
  const currentVideo = SAMPLE_VIDEOS.find((v) => v.id === id) || SAMPLE_VIDEOS[0];
  const relatedVideos = SAMPLE_VIDEOS.filter((v) => v.id !== currentVideo.id);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Back Navigation Bar */}
      <div>
        <Link
          to="/videos"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #E2E8F0',
            color: '#475569',
            fontSize: '14px',
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.15s ease',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Videos</span>
        </Link>
      </div>

      {/* Main Grid: Player on left, Related on right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)',
          gap: '32px',
          alignItems: 'start',
        }}
        className="video-layout-grid"
      >
        {/* Left: Cartoon Theater Player */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Cartoon Bezel Player Box */}
          <div
            style={{
              position: 'relative',
              borderRadius: '32px',
              border: '6px solid #FFFFFF',
              boxShadow: '0 20px 45px -10px rgba(124, 58, 237, 0.25)',
              overflow: 'hidden',
              backgroundColor: '#1E1B4B',
              aspectRatio: '16/9',
            }}
          >
            {!isPlaying ? (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #EC4899, #F43F5E)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(236, 72, 153, 0.6)',
                      border: '4px solid #FFFFFF',
                      transform: 'scale(1)',
                      transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    className="animate-pulse-glow"
                  >
                    <Play size={36} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '4px' }} />
                  </div>
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                      fontSize: '16px',
                      textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                    }}
                  >
                    Click to Play! ✨
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#000000' }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '6px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    zIndex: 10,
                  }}
                >
                  ✕ Close Player
                </button>
              </div>
            )}
          </div>

          {/* Video Meta & Interactive Reactions */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '2px solid #E2E8F0',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span
                style={{
                  backgroundColor: currentVideo.badgeColor,
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {currentVideo.ageGroup}
              </span>
              <span style={{ fontSize: '13px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> {currentVideo.duration}
              </span>
              <span style={{ fontSize: '13px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Eye size={14} /> {currentVideo.views}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(22px, 3.5vw, 28px)',
                lineHeight: 1.25,
                color: '#1E293B',
                marginBottom: '14px',
              }}
            >
              {currentVideo.title}
            </h1>

            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
              {currentVideo.description}
            </p>

            {/* Reaction Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                paddingTop: '16px',
                borderTop: '1px solid #F1F5F9',
              }}
            >

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  borderRadius: '18px',
                  backgroundColor: '#FEF3C7',
                  color: '#B45309',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}
              >
                <Star size={16} fill="#F59E0B" color="#F59E0B" />
                <span>Kid Favorite ⭐</span>
              </div>

              <a
                href={currentVideo.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '18px',
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(239, 68, 68, 0.25)',
                  marginLeft: 'auto',
                }}
              >
                <YoutubeIcon size={18} fill="#FFFFFF" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Up Next / Related Videos Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '20px',
              backgroundColor: '#F5F3FF',
              border: '2px solid #DDD6FE',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                color: '#6D28D9',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={18} /> Up Next For You
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {relatedVideos.map((item) => (
              <Link
                key={item.id}
                to={`/videos/${item.id}`}
                style={{
                  display: 'flex',
                  gap: '12px',
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '12px',
                  border: '2px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s ease',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#C4B5FD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100px',
                    height: '66px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      right: '4px',
                      background: 'rgba(0,0,0,0.7)',
                      color: '#FFF',
                      fontSize: '10px',
                      padding: '2px 4px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.duration}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.3,
                      marginBottom: '4px',
                      color: '#1E293B',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.title}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#94A3B8' }}>{item.views}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .video-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
