import React from 'react';

export const MagicalBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Top Rainbow Arc Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.35) 0%, rgba(244, 114, 182, 0.2) 40%, rgba(192, 132, 252, 0.15) 70%, transparent 100%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />

      {/* Floating Cloud 1 - Top Left */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '4%',
          animation: 'cloudDriftSlow 32s ease-in-out infinite alternate',
          opacity: 0.85,
        }}
      >
        <svg width="150" height="75" viewBox="0 0 160 80" fill="none">
          <ellipse cx="60" cy="50" rx="45" ry="25" fill="#FFFFFF" />
          <ellipse cx="100" cy="45" rx="40" ry="25" fill="#FFFFFF" />
          <ellipse cx="80" cy="35" rx="35" ry="30" fill="#FFFFFF" />
          <circle cx="55" cy="42" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="75" cy="42" r="3" fill="#64748B" opacity="0.6" />
          <path d="M60 48 Q 65 53 70 48" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Floating Cloud 2 - Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          right: '5%',
          animation: 'cloudDriftSlow 26s ease-in-out infinite alternate-reverse',
          opacity: 0.8,
        }}
      >
        <svg width="170" height="85" viewBox="0 0 170 85" fill="none">
          <ellipse cx="60" cy="55" rx="45" ry="25" fill="#FFFFFF" />
          <ellipse cx="115" cy="50" rx="45" ry="25" fill="#FFFFFF" />
          <ellipse cx="90" cy="35" rx="40" ry="30" fill="#FFFFFF" />
          {/* cute blush */}
          <ellipse cx="70" cy="48" rx="5" ry="3" fill="#FBCFE8" />
          <ellipse cx="105" cy="48" rx="5" ry="3" fill="#FBCFE8" />
        </svg>
      </div>

      {/* Floating Cloud 3 - Mid Left */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '-20px',
          animation: 'cloudDriftSlow 38s ease-in-out infinite alternate',
          opacity: 0.6,
        }}
      >
        <svg width="220" height="100" viewBox="0 0 200 90" fill="none">
          <ellipse cx="80" cy="55" rx="60" ry="30" fill="#FFFFFF" />
          <ellipse cx="140" cy="50" rx="50" ry="30" fill="#FFFFFF" />
          <ellipse cx="110" cy="35" rx="45" ry="32" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Floating Cloud 4 - Lower Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '220px',
          right: '2%',
          animation: 'cloudDriftSlow 30s ease-in-out infinite alternate-reverse',
          opacity: 0.7,
        }}
      >
        <svg width="190" height="90" viewBox="0 0 190 90" fill="none">
          <ellipse cx="70" cy="55" rx="50" ry="28" fill="#FFFFFF" />
          <ellipse cx="125" cy="50" rx="50" ry="28" fill="#FFFFFF" />
          <ellipse cx="95" cy="35" rx="40" ry="30" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Twinkling Pastel Stars */}
      <div style={{ position: 'absolute', top: '15%', left: '22%', animation: 'floatGentle 3s ease-in-out infinite' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#FACC15">
          <path d="M12 2L14.8 8.6L22 9.2L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.2L9.2 8.6L12 2Z" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '25%', right: '28%', animation: 'floatReverse 4s ease-in-out infinite' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#F472B6">
          <path d="M12 2L14.8 8.6L22 9.2L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.2L9.2 8.6L12 2Z" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '55%', left: '15%', animation: 'floatGentle 3.5s ease-in-out infinite' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#60A5FA">
          <path d="M12 2L14.8 8.6L22 9.2L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.2L9.2 8.6L12 2Z" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '70%', right: '18%', animation: 'floatReverse 5s ease-in-out infinite' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#C084FC">
          <path d="M12 2L14.8 8.6L22 9.2L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.2L9.2 8.6L12 2Z" />
        </svg>
      </div>
    </div>
  );
};
