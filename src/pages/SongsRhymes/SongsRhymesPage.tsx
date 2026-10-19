import React from 'react';
import { Music, Play, Sparkles, Heart, Disc, Volume2 } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';

const RHYMES = [
  {
    title: 'Twinkle, Twinkle, Little Star 🌟',
    theme: 'Calm Lullaby',
    badgeBg: '#EDE9FE',
    badgeColor: '#7C3AED',
    lyrics: 'Twinkle, twinkle, little star, how I wonder what you are! Up above the world so high, like a diamond in the sky...',
    time: '3:10',
  },
  {
    title: 'The Wheels on the Magic Bus 🚌',
    theme: 'Action & Sing-Along',
    badgeBg: '#FEF3C7',
    badgeColor: '#B45309',
    lyrics: 'The wheels on the bus go round and round, round and round, round and round! All through the candy town...',
    time: '2:45',
  },
  {
    title: 'Coco’s Bunny Hop Dance 🐰',
    theme: 'Energetic Movement',
    badgeBg: '#FCE7F3',
    badgeColor: '#BE185D',
    lyrics: 'Put your paws up high, touch the sunny sky! Now hop, hop, hop, don’t you ever stop!',
    time: '3:30',
  },
  {
    title: 'Old MacDonald’s Happy Jungle 🦁',
    theme: 'Animal Fun',
    badgeBg: '#DCFCE7',
    badgeColor: '#047857',
    lyrics: 'Old MacDonald had a farm, E-I-E-I-O! And on that farm he had a lion cub, E-I-E-I-O!',
    time: '3:50',
  },
  {
    title: 'If You’re Happy and You Know It 👏',
    theme: 'Interactive Rhythm',
    badgeBg: '#DBEAFE',
    badgeColor: '#1D4ED8',
    lyrics: 'If you’re happy and you know it, clap your hands! If you’re happy and you know it, shout HOORAY!',
    time: '2:55',
  },
  {
    title: 'Sweet Dreams Cloud Lullaby 🌙',
    theme: 'Bedtime Soother',
    badgeBg: '#F3E8FF',
    badgeColor: '#6D28D9',
    lyrics: 'Soft pink clouds and gentle breeze, sleepy birds upon the trees. Close your eyes and dream of stars...',
    time: '4:20',
  },
];

export const SongsRhymesPage: React.FC = () => {
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
        {RHYMES.map((rhyme, idx) => (
          <div
            key={idx}
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
              style={{
                backgroundColor: '#FFFBEB',
                borderRadius: '16px',
                padding: '14px',
                border: '1px dashed #FDE68A',
                fontSize: '13.5px',
                color: '#78350F',
                fontStyle: 'italic',
                lineHeight: 1.5,
              }}
            >
              "{rhyme.lyrics}"
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
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '16px',
                  backgroundColor: '#F59E0B',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)',
                }}
              >
                <Play size={16} fill="#FFFFFF" />
                <span>Sing Along</span>
              </button>

              <span style={{ fontSize: '20px' }}>🎶</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
