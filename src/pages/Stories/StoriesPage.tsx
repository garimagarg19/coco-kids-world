import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Star, Heart, Clock, ArrowRight, Filter } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { ALL_STORIES, StoryItem } from '../../data/storiesData';

const STORY_FILTERS = [
  { id: 'all', label: '📚 All 9 Stories' },
  { id: 'friendship', label: '💖 Friendship & Sharing' },
  { id: 'adventure', label: '🚀 Jungle & Park Adventures' },
  { id: 'learning', label: '🎨 Learning Stories' },
  { id: 'bedtime', label: '🌙 Calming Bedtime' },
];

export const StoriesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredStories =
    selectedFilter === 'all'
      ? ALL_STORIES
      : ALL_STORIES.filter((s) => s.category === selectedFilter);

  return (
    <div>
      <PageHeader
        badgeEmoji="📖"
        badgeText="Fairy Tales & Cartoon Tales"
        badgeBg="#EDE9FE"
        badgeColor="#7C3AED"
        title="Stories & Magical Adventures"
        subtitle="Wholesome animated story episodes and bedtime fairy tales with gentle lessons about sharing, courage, patience, and kindness."
        gradientText="linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #EC4899 100%)"
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
        {STORY_FILTERS.map((f) => {
          const isSelected = selectedFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              style={{
                padding: '9px 18px',
                borderRadius: '22px',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                backgroundColor: isSelected ? '#8B5CF6' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#475569',
                border: `2px solid ${isSelected ? '#7C3AED' : '#E2E8F0'}`,
                boxShadow: isSelected
                  ? '0 4px 14px rgba(139, 92, 246, 0.35)'
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
              {f.label}
            </button>
          );
        })}
      </div>

      {/* 9 Stories Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '26px',
        }}
      >
        {filteredStories.map((story) => (
          <div
            key={story.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '28px',
              border: `3px solid ${story.border}`,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 18px 36px ${story.accentColor}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
            }}
          >
            {/* Top Row: Tag, Age & Read Time */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span
                style={{
                  backgroundColor: story.bg,
                  color: story.textColor,
                  padding: '5px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {story.tag}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    color: '#64748B',
                    backgroundColor: '#F8FAFC',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    fontWeight: 600,
                  }}
                >
                  {story.ageGroup}
                </span>
                <span style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Clock size={13} /> {story.readTime}
                </span>
              </div>
            </div>

            {/* Story Title & Cover Emoji */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '18px',
                  backgroundColor: story.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0,
                  border: `2px solid ${story.border}`,
                }}
              >
                {story.coverEmoji}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '19px',
                    color: '#1E293B',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {story.title}
                </h3>
                <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
                  {story.characters}
                </span>
              </div>
            </div>

            {/* Excerpt */}
            <p
              style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: 1.6,
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {story.excerpt}
            </p>

            {/* Bottom Row: Characters & Action Button */}
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '16px',
                borderTop: '1px dashed #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {story.characterBadges.slice(0, 3).map((cb, idx) => (
                  <span
                    key={idx}
                    title={cb.name}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: `${cb.color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                    }}
                  >
                    {cb.icon}
                  </span>
                ))}
              </div>

              {/* Read Episode Button linking to /stories/:id */}
              <Link
                to={`/stories/${story.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  borderRadius: '16px',
                  backgroundColor: story.accentColor,
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  textDecoration: 'none',
                  boxShadow: `0 4px 12px ${story.accentColor}35`,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Sparkles size={14} />
                <span>Read Episode</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
