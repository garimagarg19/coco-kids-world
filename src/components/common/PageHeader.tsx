import React from 'react';
import { Sparkles } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeEmoji?: string;
  badgeBg?: string;
  badgeColor?: string;
  gradientText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badgeText,
  badgeEmoji = '✨',
  badgeBg = '#F3E8FF',
  badgeColor = '#7C3AED',
  gradientText,
}) => {
  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '20px auto 40px',
        padding: '16px',
        position: 'relative',
      }}
    >
      {/* Pill Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: badgeBg,
          color: badgeColor,
          padding: '8px 20px',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 700,
          fontFamily: 'var(--font-display)',
          marginBottom: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
        }}
        className="animate-float"
      >
        <span>{badgeEmoji}</span>
        <span>{badgeText}</span>
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: 'clamp(28px, 4.5vw, 46px)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '14px',
          background: gradientText || 'linear-gradient(135deg, #1E293B 0%, #4338CA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: '#64748B',
          fontWeight: 500,
          lineHeight: 1.6,
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};
