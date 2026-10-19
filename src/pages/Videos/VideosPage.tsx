import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, Filter, Clock, Eye } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { SAMPLE_VIDEOS, YOUTUBE_SHORTS } from '../../data/sampleData';


const CATEGORIES = [
  { id: 'all', label: '🌟 All Videos' },
  { id: 'songs', label: '🎵 Songs & Rhymes' },
  { id: 'stories', label: '📖 Cartoon Stories' },
  { id: 'learning', label: '🎨 Play & Learn' },
  { id: 'adventures', label: '🚀 Adventures' },
];

export const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredVideos =
    selectedCategory === 'all'
      ? SAMPLE_VIDEOS
      : SAMPLE_VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <div>
      <PageHeader
        badgeEmoji="🎬"
        badgeText="Official Video Theater"
        badgeBg="#DBEAFE"
        badgeColor="#2563EB"
        title="Explore Colorful Cartoon Episodes"
        subtitle="Watch full animated videos, joyful songs, and playful learning episodes with Coco and friends!"
        gradientText="linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #7C3AED 100%)"
      />

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '36px',
        }}
      >
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '14.5px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                backgroundColor: isSelected ? '#3B82F6' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#475569',
                border: `2px solid ${isSelected ? '#2563EB' : '#E2E8F0'}`,
                boxShadow: isSelected
                  ? '0 4px 12px rgba(59, 130, 246, 0.3)'
                  : '0 2px 6px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Video Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {filteredVideos.map((video) => (
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
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#93C5FD';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(59, 130, 246, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(100, 116, 139, 0.08)';
            }}
          >
            {/* Thumbnail Box */}
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
                  transition: 'transform 0.3s ease',
                }}
              />
              {/* Play Overlay Button */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EC4899',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <Play size={24} fill="#EC4899" style={{ marginLeft: '4px' }} />
                </div>
              </div>

              {/* Duration Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#FFFFFF',
                  padding: '3px 8px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Clock size={12} />
                <span>{video.duration}</span>
              </div>

              {/* Age Group Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  backgroundColor: video.badgeColor,
                  color: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {video.ageGroup}
              </div>
            </div>

            {/* Video Details */}
            <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3
                style={{
                  fontSize: '17px',
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
                  fontSize: '13.5px',
                  color: '#64748B',
                  lineHeight: 1.5,
                  marginBottom: '14px',
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
                  fontSize: '12.5px',
                  color: '#94A3B8',
                  paddingTop: '10px',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Eye size={14} /> {video.views}
                </span>
                <span
                  style={{
                    color: '#3B82F6',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Play Video →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Official YouTube Shorts Reel */}
      <section style={{ marginTop: '56px' }}>
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: '#FCE7F3',
              color: '#DB2777',
              fontSize: '12.5px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '6px',
            }}
          >
            <span>⚡</span>
            <span>Bite-Sized Fun</span>
          </div>
          <h2 style={{ fontSize: '26px', color: '#1E293B' }}>
            Popular Cartoon Shorts & Rhymes
          </h2>
          <p style={{ color: '#64748B', fontSize: '14px' }}>
            Quick songs, color games, and funny animal moments from our YouTube Shorts collection.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '16px',
          }}
        >
          {YOUTUBE_SHORTS.map((short) => (
            <a
              key={short.id}
              href={short.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '2px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#F472B6';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(236, 72, 153, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9/16',
                  backgroundColor: '#1E1B4B',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '12px',
                  }}
                >
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: 'rgba(239, 68, 68, 0.9)',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      width: 'fit-content',
                      marginBottom: '4px',
                    }}
                  >
                    Short
                  </span>
                </div>
              </div>

              <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h4
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.35,
                    color: '#1E293B',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginBottom: '8px',
                  }}
                >
                  {short.title}
                </h4>
                <span
                  style={{
                    marginTop: 'auto',
                    fontSize: '11.5px',
                    color: '#EC4899',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Watch Short ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
