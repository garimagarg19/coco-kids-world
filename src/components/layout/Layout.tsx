import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MagicalBackground } from './MagicalBackground';

export const Layout: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Animated ambient cartoon sky background */}
      <MagicalBackground />

      {/* Floating playful sticky navbar */}
      <Navbar />

      {/* Page view content */}
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 'clamp(16px, 3vw, 24px) clamp(10px, 3vw, 16px) 60px',
          boxSizing: 'border-box',
        }}
      >
        <Outlet />
      </main>

      {/* Bottom cheerful footer */}
      <Footer />
    </div>
  );
};
