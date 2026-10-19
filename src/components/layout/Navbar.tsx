import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  PlayCircle, 
  BookOpen, 
  Gamepad2, 
  Music, 
  Heart, 
  ShieldCheck, 
  Menu, 
  X, 
  Tv
} from 'lucide-react';
import { YoutubeIcon } from '../common/YoutubeIcon';

import { NAV_ITEMS } from '../../data/characters';

// Map icon name string to Lucide component
const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={18} />,
  PlayCircle: <PlayCircle size={18} />,
  BookOpen: <BookOpen size={18} />,
  Gamepad2: <Gamepad2 size={18} />,
  Music: <Music size={18} />,
  Heart: <Heart size={18} />,
  ShieldCheck: <ShieldCheck size={18} />,
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      style={{
        position: 'sticky',
        top: '12px',
        zIndex: 50,
        margin: '0 auto',
        width: '95%',
        maxWidth: '1240px',
        padding: '0 8px',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '28px',
          border: '3px solid #FFFFFF',
          boxShadow: '0 10px 30px -5px rgba(124, 58, 237, 0.15), 0 4px 12px rgba(0, 0, 0, 0.05)',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FCE7F3, #DDD6FE)',
              padding: '3px',
              boxShadow: '0 4px 12px rgba(236, 72, 153, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src="/channel-avatar.jpg"
              alt="Coco Kids World Official Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              onError={(e) => {
                // fallback if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span style={{ fontSize: '24px', position: 'absolute' }}>🐰</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 700,
                lineHeight: 1.1,
                background: 'linear-gradient(90deg, #FF4B72, #A855F7, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(244, 114, 182, 0.2)',
              }}
            >
              Coco Kids World
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 600,
                color: '#8B5CF6',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              ✨ Fun, Songs & Tales
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'nowrap',
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 11px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: isActive ? '#FFFFFF' : item.color,
                  backgroundColor: isActive ? item.activeColor : item.pillColor,
                  border: `2px solid ${isActive ? item.activeColor : 'transparent'}`,
                  boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.12)' : 'none',
                  transition: 'all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: isActive ? 'scale(1.03)' : 'scale(1)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.backgroundColor = item.pillColor;
                    e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <span>{iconMap[item.iconName]}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: YouTube & Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="https://youtube.com/@CocoKidsWorld-h1o"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 16px',
              backgroundColor: '#FF0000',
              color: '#FFFFFF',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              textDecoration: 'none',
              boxShadow: '0 4px 0 #B91C1C, 0 8px 16px rgba(239, 68, 68, 0.3)',
              transition: 'all 0.15s ease',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(3px)';
              e.currentTarget.style.boxShadow = '0 1px 0 #B91C1C';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 0 #B91C1C, 0 8px 16px rgba(239, 68, 68, 0.3)';
            }}
          >
            <YoutubeIcon size={18} fill="#FFFFFF" />
            <span className="yt-text">Subscribe</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '16px',
              background: '#F3E8FF',
              color: '#7C3AED',
              border: '2px solid #E9D5FF',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '8px',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '16px',
            border: '3px solid #F3E8FF',
            boxShadow: '0 16px 36px rgba(124, 58, 237, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'floatGentle 0.3s ease-out',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: isActive ? '#FFFFFF' : item.color,
                  backgroundColor: isActive ? item.activeColor : item.pillColor,
                }}
              >
                <span>{iconMap[item.iconName]}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Responsive Style Tweaks */}
      <style>{`
        @media (max-width: 1180px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 500px) {
          .yt-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
