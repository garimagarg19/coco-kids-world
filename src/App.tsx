import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Home/HomePage';
import { VideosPage } from './pages/Videos/VideosPage';
import { VideoDetailsPage } from './pages/VideoDetails/VideoDetailsPage';
import { StoriesPage } from './pages/Stories/StoriesPage';
import { StoryDetailsPage } from './pages/Stories/StoryDetailsPage';
import { PlayLearnPage } from './pages/PlayLearn/PlayLearnPage';
import { SongsRhymesPage } from './pages/SongsRhymes/SongsRhymesPage';
import { AboutPage } from './pages/About/AboutPage';
import { ParentsSafetyPage } from './pages/ParentsSafety/ParentsSafetyPage';

// Scroll to top on navigation component
const ScrollToTop: React.FC = () => {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fun 404 page
const NotFoundPage: React.FC = () => (
  <div
    style={{
      textAlign: 'center',
      padding: '60px 20px',
      background: '#FFFFFF',
      borderRadius: '32px',
      border: '4px dashed #DDD6FE',
      maxWidth: '600px',
      margin: '40px auto',
    }}
  >
    <div style={{ fontSize: '64px', marginBottom: '16px' }} className="animate-float">
      🐰🎈
    </div>
    <h2 style={{ fontSize: '28px', color: '#7C3AED', marginBottom: '10px' }}>
      Oops! This Cloud Floated Away!
    </h2>
    <p style={{ color: '#64748B', fontSize: '16px', marginBottom: '24px' }}>
      Coco couldn’t find this page in our magical kingdom. Let’s head back to fun and games!
    </p>
    <a
      href="/"
      style={{
        display: 'inline-block',
        padding: '12px 28px',
        borderRadius: '20px',
        backgroundColor: '#EC4899',
        color: '#FFFFFF',
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        textDecoration: 'none',
        boxShadow: '0 6px 16px rgba(236, 72, 153, 0.3)',
      }}
    >
      Return to Home Kingdom ✨
    </a>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="videos/:id" element={<VideoDetailsPage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="stories/:id" element={<StoryDetailsPage />} />
          <Route path="play-learn" element={<PlayLearnPage />} />
          <Route path="songs-rhymes" element={<SongsRhymesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="parents-safety" element={<ParentsSafetyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
