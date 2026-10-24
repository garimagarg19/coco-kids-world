import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Star } from 'lucide-react';
import { YoutubeIcon } from '../common/YoutubeIcon';
import { InstagramIcon } from '../common/InstagramIcon';
import { CHARACTERS } from '../../data/characters';


export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: 'relative',
        marginTop: 'auto',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 30%, #F5F0FF 100%)',
        paddingTop: '60px',
        paddingBottom: '36px',
        borderTop: '3px solid rgba(233, 213, 255, 0.6)',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '92%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Cartoon Characters Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF1F2 0%, #F5F3FF 50%, #ECFEFF 100%)',
            borderRadius: '24px',
            padding: '18px 24px',
            marginBottom: '48px',
            border: '2px dashed #DDD6FE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '28px' }}>🎈</span>
            <div>
              <h4 style={{ fontSize: '18px', color: '#7C3AED', marginBottom: '2px' }}>
                Meet the Coco & Friends Squad!
              </h4>
              <p style={{ fontSize: '13px', color: '#64748B' }}>
                Sing, dance, and learn with all our lovable animal buddies.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {CHARACTERS.map((char) => (
              <div
                key={char.id}
                title={`${char.name} - ${char.title}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: char.badgeBg,
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: `2px solid ${char.color}33`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span style={{ fontSize: '20px' }}>{char.avatarIcon}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: char.color,
                  }}
                >
                  {char.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '36px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#FCE7F3',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(236, 72, 153, 0.2)',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/channel-avatar.jpg"
                  alt="Coco Kids World Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Coco Kids World
              </h3>
            </div>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
              A magical universe created for toddlers and young explorers to discover the wonders of friendship, music, and learning through colorful 3D cartoons.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href="https://youtube.com/@CocoKidsWorld-h1o"
                target="_blank"
                rel="noreferrer"
                title="Watch on YouTube"
                aria-label="Coco Kids World on YouTube"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '14px',
                  background: '#FEE2E2',
                  color: '#EF4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid #FECACA',
                  boxShadow: '0 2px 8px rgba(239, 68, 68, 0.15)',
                  transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
                  e.currentTarget.style.background = '#EF4444';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 6px 14px rgba(239, 68, 68, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = '#FEE2E2';
                  e.currentTarget.style.color = '#EF4444';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.15)';
                }}
              >
                <YoutubeIcon size={20} fill="currentColor" />
              </a>

              <a
                href="https://www.instagram.com/cocokidsworld986/"
                target="_blank"
                rel="noreferrer"
                title="Follow on Instagram"
                aria-label="Coco Kids World on Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #FFF1F2 0%, #FCE7F3 100%)',
                  color: '#E1306C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid #FBCFE8',
                  boxShadow: '0 2px 8px rgba(225, 48, 108, 0.15)',
                  transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 6px 14px rgba(221, 42, 123, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FFF1F2 0%, #FCE7F3 100%)';
                  e.currentTarget.style.color = '#E1306C';
                  e.currentTarget.style.borderColor = '#FBCFE8';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(225, 48, 108, 0.15)';
                }}
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Explorer Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '17px',
                color: '#3B82F6',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Star size={16} fill="#3B82F6" /> Magical Adventures
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <Link to="/" style={{ color: '#64748B', fontSize: '14px', transition: 'color 0.2s' }}>
                  🏡 Home Kingdom
                </Link>
              </li>
              <li>
                <Link to="/videos" style={{ color: '#64748B', fontSize: '14px', transition: 'color 0.2s' }}>
                  🎬 All Cartoon Videos
                </Link>
              </li>
              <li>
                <Link to="/stories" style={{ color: '#64748B', fontSize: '14px', transition: 'color 0.2s' }}>
                  📖 Stories & Fairy Tales
                </Link>
              </li>
              <li>
                <Link to="/songs-rhymes" style={{ color: '#64748B', fontSize: '14px', transition: 'color 0.2s' }}>
                  🎵 Nursery Rhymes & Songs
                </Link>
              </li>
              <li>
                <Link to="/play-learn" style={{ color: '#64748B', fontSize: '14px', transition: 'color 0.2s' }}>
                  🎨 Play & Learn Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Parents & Trust Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '17px',
                color: '#10B981',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <ShieldCheck size={18} /> Parents & Trust
            </h4>
            <div
              style={{
                background: '#ECFDF5',
                border: '2px solid #A7F3D0',
                borderRadius: '16px',
                padding: '14px',
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '18px' }}>🛡️</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#065F46',
                  }}
                >
                  Safe Kids Certified
                </span>
              </div>
              <p style={{ fontSize: '12px', color: '#047857', lineHeight: 1.5 }}>
                Curated safe viewing for children ages 1 to 7. Zero scary elements, uplifting wholesome values.
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>
                <Link to="/parents-safety" style={{ color: '#059669', fontSize: '13.5px', fontWeight: 600 }}>
                  👉 Read Safety Guidelines & Tips
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#64748B', fontSize: '13.5px' }}>
                  About our Creative Team & Mission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: '#94A3B8',
          }}
        >
          <p>© {new Date().getFullYear()} Coco Kids World. All magical rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <Heart size={14} fill="#EC4899" color="#EC4899" /> for joyful kids worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
