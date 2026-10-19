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
          width: '95%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '24px 8px 60px',
        }}
      >
        <Outlet />
      </main>

      {/* Bottom cheerful footer */}
      <Footer />
    </div>
  );
};
