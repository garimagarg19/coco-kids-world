import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Lock, Eye, Smile } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';

export const ParentsSafetyPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      <PageHeader
        badgeEmoji="🛡️"
        badgeText="Parental Peace of Mind"
        badgeBg="#CFFAFE"
        badgeColor="#0891B2"
        title="Parents & Safety Guarantee"
        subtitle="Designed with love, verified with care. Discover how we protect your children and provide wholesome, age-appropriate entertainment."
        gradientText="linear-gradient(135deg, #155E75 0%, #0891B2 50%, #059669 100%)"
      />

      {/* Trust Highlight Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, #ECFEFF 0%, #F0FDF4 100%)',
          borderRadius: '32px',
          border: '3px solid #A5F3FC',
          padding: 'clamp(24px, 4vw, 36px)',
          boxShadow: '0 12px 28px rgba(6, 182, 212, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#06B6D4',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', color: '#164E63' }}>Our Golden Safety Promise</h2>
            <p style={{ color: '#0E7490', fontSize: '14px' }}>
              Your child’s innocence and well-being are our highest priority.
            </p>
          </div>
        </div>

        <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.7 }}>
          At Coco Kids World, every storyline, song lyric, color scheme, and animation cut is carefully evaluated. We ensure our content remains calming, uplifting, and totally free from scary themes, loud sudden noises, or fast-cutting consumerism.
        </p>
      </div>

      {/* Safety Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {[
          {
            icon: '🧸',
            title: 'No Scary Tropes or Violence',
            desc: 'No scary monsters, aggressive conflicts, or inappropriate behaviors. Only warm encouragement and gentle problem solving.',
            badge: 'Kind Environment',
            color: '#EC4899',
            bg: '#FCE7F3',
          },
          {
            icon: '🌿',
            title: 'Calm & Mindful Pacing',
            desc: 'Our animations use natural rhythms and smooth scene transitions that do not overwhelm or hyper-stimulate young minds.',
            badge: 'Mindful Viewing',
            color: '#10B981',
            bg: '#DCFCE7',
          },
          {
            icon: '🔒',
            title: 'Child Privacy & Ad-Free Spirit',
            desc: 'We strictly comply with COPPA guidelines. We do not track, profile, or collect personal data from our young visitors.',
            badge: 'COPPA Compliant',
            color: '#3B82F6',
            bg: '#DBEAFE',
          },
          {
            icon: '🌟',
            title: 'Educational & Moral Growth',
            desc: 'Stories reinforce emotional intelligence, gratitude, sharing, patience, and joyful curiosity about the natural world.',
            badge: 'Character Building',
            color: '#8B5CF6',
            bg: '#EDE9FE',
          },
        ].map((pillar, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '2px solid #E2E8F0',
              boxShadow: '0 6px 18px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '32px' }}>{pillar.icon}</span>
              <span
                style={{
                  backgroundColor: pillar.bg,
                  color: pillar.color,
                  padding: '4px 10px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {pillar.badge}
              </span>
            </div>

            <h3 style={{ fontSize: '18px', color: '#1E293B' }}>{pillar.title}</h3>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Parent Tips Section */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '28px',
          border: '3px solid #F1F5F9',
        }}
      >
        <h3 style={{ fontSize: '20px', color: '#1E293B', marginBottom: '16px' }}>
          💡 Helpful Tips for Parents & Caregivers
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            'Sing along with your little ones to turn music videos into interactive bonding moments.',
            'Ask open-ended questions like "What color is Coco’s balloon?" or "How did Leo help his friend?"',
            'Use our gentle bedtime lullabies as a soothing wind-down routine 15 minutes before sleep.',
            'Encourage offline creative play by coloring or drawing the characters seen in the episodes.',
          ].map((tip, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.5 }}>{tip}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
