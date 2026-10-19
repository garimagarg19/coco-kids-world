import React from 'react';
import { Heart, Sparkles, Smile, Star, Shield, Award } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { CHARACTERS } from '../../data/characters';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <PageHeader
        badgeEmoji="💖"
        badgeText="Our Story & Vision"
        badgeBg="#FCE7F3"
        badgeColor="#BE185D"
        title="Meet Coco Kids World"
        subtitle="We build heartwarming 3D cartoon worlds where kindness, curiosity, and joyful songs help children flourish."
        gradientText="linear-gradient(135deg, #9D174D 0%, #DB2777 50%, #7C3AED 100%)"
      />

      {/* Story Card */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF2F8 100%)',
          borderRadius: '32px',
          border: '4px solid #FFFFFF',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 12px 32px rgba(236, 72, 153, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center',
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
              background: '#FCE7F3',
              color: '#DB2777',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={14} /> Our Mission
          </div>
          <h2 style={{ fontSize: '28px', color: '#1E293B', marginBottom: '16px' }}>
            Making Screen Time Wholesome, Joyful & Inspiring
          </h2>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}>
            Coco Kids World was born out of a desire to create a safe, vibrant haven on YouTube where children are greeted with warm smiles, joyful melodies, and positive lessons in every single episode.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7 }}>
            Every cartoon story is crafted alongside early childhood educators to nurture emotional intelligence, curiosity, friendship, and positive communication.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '320px',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(124, 58, 237, 0.2)',
              border: '4px solid #FFFFFF',
            }}
          >
            <img
              src="/channel-avatar.jpg"
              alt="Coco Kids World Official Channel Art"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Meet the Characters Grid */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', color: '#1E293B', marginBottom: '8px' }}>
            🌟 The Lovable Animal Crew
          </h2>
          <p style={{ color: '#64748B', fontSize: '15px' }}>
            Get to know the unique personalities who make every episode an unforgettable adventure!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {CHARACTERS.map((char) => (
            <div
              key={char.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '3px solid #F1F5F9',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = char.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#F1F5F9';
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: char.badgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '34px',
                  border: `3px solid ${char.color}44`,
                  boxShadow: `0 8px 18px ${char.color}22`,
                }}
              >
                {char.avatarIcon}
              </div>

              <div>
                <h3 style={{ fontSize: '20px', color: '#1E293B', marginBottom: '2px' }}>
                  {char.name}
                </h3>
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: char.color,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {char.title}
                </span>
              </div>

              <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5 }}>
                {char.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
