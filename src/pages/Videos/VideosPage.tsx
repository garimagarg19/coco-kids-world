import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, Filter, Clock, Eye } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { SAMPLE_VIDEOS, YOUTUBE_SHORTS } from '../../data/sampleData';
import { ShortsSlider } from '../../components/common/ShortsSlider';


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

  const filteredShorts =
    selectedCategory === 'all'
      ? YOUTUBE_SHORTS
      : YOUTUBE_SHORTS.filter((s) => s.category === selectedCategory);

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
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '36px',
          padding: '4px 12px',
        }}
      >
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '9px 18px',
                borderRadius: '22px',
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
                transition: 'all 0.18s ease',
                transform: isSelected ? 'translateY(-2px)' : 'translateY(0)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)';
                }
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
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
      ) : (
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '24px',
            border: '2px dashed #CBD5E1',
            padding: '36px 20px',
            textAlign: 'center',
            marginBottom: '16px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div style={{ fontSize: '38px', marginBottom: '8px' }}>🎬✨</div>
          <h3 style={{ fontSize: '19px', color: '#1E293B', marginBottom: '6px' }}>
            Full episodes for {CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'this category'} are coming soon!
          </h3>
          <p style={{ color: '#64748B', fontSize: '14.5px' }}>
            Enjoy our bite-sized YouTube Shorts in this category below! 👇
          </p>
        </div>
      )}

      {/* Official YouTube Shorts Reel Filtered by Category with Left-Right Arrows Slider */}
      <ShortsSlider
        shorts={filteredShorts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        showCategoryFilter={false}
        title={
          selectedCategory === 'all'
            ? 'Popular Cartoon Shorts & Rhymes'
            : selectedCategory === 'songs'
            ? '🎵 Songs & Rhymes Shorts'
            : selectedCategory === 'stories'
            ? '📖 Cartoon Story Shorts'
            : selectedCategory === 'learning'
            ? '🎨 Play & Learn Educational Shorts'
            : '🚀 Action & Adventure Shorts'
        }
        subtitle={
          selectedCategory === 'all'
            ? 'Quick songs, color games, funny animal moments, and bedtime tales from our YouTube Shorts collection.'
            : `Showing ${filteredShorts.length} bite-sized cartoon shorts in ${
                CATEGORIES.find((c) => c.id === selectedCategory)?.label || selectedCategory
              }.`
        }
      />
    </div>
  );
};
