import React, { useState } from 'react';
import { Music, Play, Sparkles, Heart, Disc, Volume2 } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { RHYMES_DATA, RhymeItem } from '../../data/rhymesData';
import { SingAlongModal } from '../../components/rhymes/SingAlongModal';

export const SongsRhymesPage: React.FC = () => {
  const [selectedRhyme, setSelectedRhyme] = useState<RhymeItem | null>(null);

  return (
    <div>
      <PageHeader
        badgeEmoji="🎵"
        badgeText="Sing-Along Music Hall"
        badgeBg="#FEF3C7"
        badgeColor="#D97706"
        title="Nursery Rhymes & Sing-Alongs"
        subtitle="Clap your hands and tap your toes! Discover timeless nursery rhymes, dance songs, and soothing bedtime melodies."
        gradientText="linear-gradient(135deg, #B45309 0%, #D97706 40%, #EC4899 100%)"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {RHYMES_DATA.map((rhyme) => (
          <div
            key={rhyme.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '3px solid #F1F5F9',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'all 0.2s ease',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#FCD34D';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(245, 158, 11, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#F1F5F9';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  backgroundColor: rhyme.badgeBg,
                  color: rhyme.badgeColor,
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {rhyme.theme}
              </span>
              <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>
                {rhyme.time}
              </span>
            </div>

            <h3 style={{ fontSize: '18px', color: '#1E293B', lineHeight: 1.3 }}>
              {rhyme.title}
            </h3>

            <div
              onClick={() => setSelectedRhyme(rhyme)}
              title="Click to open Sing-Along Player"
              style={{
                backgroundColor: '#FFFBEB',
                borderRadius: '16px',
                padding: '14px',
                border: '1px dashed #FDE68A',
                fontSize: '13.5px',
                color: '#78350F',
                fontStyle: 'italic',
                lineHeight: 1.5,
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FEF3C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFBEB';
              }}
            >
              "{rhyme.shortLyrics}"
            </div>

            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '10px',
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedRhyme(rhyme)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '16px',
                  backgroundColor: '#F59E0B',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = '#D97706';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#F59E0B';
                }}
              >
                <Play size={16} fill="#FFFFFF" />
                <span>Sing Along</span>
              </button>

              <span
                style={{ fontSize: '22px', cursor: 'pointer' }}
                onClick={() => setSelectedRhyme(rhyme)}
                title="Play poem"
              >
                {rhyme.emoji}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Sing-Along Popup Modal */}
      {selectedRhyme && (
        <SingAlongModal
          rhyme={selectedRhyme}
          onClose={() => setSelectedRhyme(null)}
        />
      )}
    </div>
  );
};

