import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, ExternalLink, Sparkles, Film } from 'lucide-react';
import { YoutubeIcon } from './YoutubeIcon';
import { ShortItem } from '../../types';
import { YOUTUBE_SHORTS } from '../../data/youtubeData';

interface ShortsSliderProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  badgeEmoji?: string;
  shorts?: ShortItem[];
  showCategoryFilter?: boolean;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const ShortsSlider: React.FC<ShortsSliderProps> = ({
  title = 'Popular Cartoon Shorts & Rhymes',
  subtitle = 'Quick songs, color games, funny animal moments, and bedtime tales from our YouTube Shorts collection.',
  badgeText = 'Bite-Sized Fun',
  badgeEmoji = '⚡',
  shorts = YOUTUBE_SHORTS,
  showCategoryFilter = true,
  selectedCategory: controlledCategory,
  onSelectCategory,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [activeModalShort, setActiveModalShort] = useState<ShortItem | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState<boolean>(false);

  const isControlled = controlledCategory !== undefined;
  const activeCategory = isControlled ? controlledCategory : internalCategory;

  // Filter shorts based on active category
  const filteredShorts =
    activeCategory === 'all'
      ? shorts
      : shorts.filter((s) => s.category === activeCategory);

  // Check scroll position to enable/disable arrow buttons
  const checkScrollBounds = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    checkScrollBounds();
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds);

    return () => {
      el.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, [filteredShorts]);

  // When active category changes, reset scroll to start
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory, shorts]);

  // Scroll function for Left and Right buttons
  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = 220; // approximate card width + gap
    const scrollAmount = cardWidth * 2; // scroll two cards at a time

    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalShort) return;
      if (e.key === 'Escape') {
        setActiveModalShort(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredShorts.findIndex((s) => s.id === activeModalShort.id);
        if (currentIndex < filteredShorts.length - 1) {
          setActiveModalShort(filteredShorts[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredShorts.findIndex((s) => s.id === activeModalShort.id);
        if (currentIndex > 0) {
          setActiveModalShort(filteredShorts[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalShort, filteredShorts]);

  const categories = [
    { id: 'all', label: '🌟 All Shorts', count: shorts.length },
    { id: 'songs', label: '🎵 Songs & Rhymes', count: shorts.filter((s) => s.category === 'songs').length },
    { id: 'stories', label: '📖 Cartoon Stories', count: shorts.filter((s) => s.category === 'stories').length },
    { id: 'learning', label: '🎨 Play & Learn', count: shorts.filter((s) => s.category === 'learning').length },
    { id: 'adventures', label: '🚀 Adventures', count: shorts.filter((s) => s.category === 'adventures').length },
  ];

  return (
    <section
      style={{
        marginTop: '48px',
        padding: 'clamp(18px, 4vw, 36px)',
        background: 'linear-gradient(135deg, #FFF1F2 0%, #FAF5FF 50%, #EFF6FF 100%)',
        borderRadius: '28px',
        border: '3px solid #FFFFFF',
        boxShadow: '0 16px 36px rgba(236, 72, 153, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      {/* Decorative background bubbles */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '10%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header with Title and Slider Controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '640px' }}>
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
              marginBottom: '10px',
              boxShadow: '0 2px 8px rgba(219, 39, 119, 0.12)',
            }}
          >
            <span>{badgeEmoji}</span>
            <span>{badgeText}</span>
            <span
              style={{
                marginLeft: '6px',
                padding: '2px 8px',
                borderRadius: '12px',
                background: '#DB2777',
                color: '#FFFFFF',
                fontSize: '11px',
              }}
            >
              {shorts.length} Shorts
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(24px, 3.2vw, 32px)',
              color: '#1E293B',
              lineHeight: 1.25,
              marginBottom: '6px',
            }}
          >
            {title}
          </h2>

          <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: 1.5 }}>
            {subtitle}
          </p>
        </div>

        {/* Top-Right Slider Arrow Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            aria-label="Previous shorts"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: canScrollLeft
                ? 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)'
                : '#E2E8F0',
              color: canScrollLeft ? '#FFFFFF' : '#94A3B8',
              cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              boxShadow: canScrollLeft
                ? '0 6px 16px rgba(236, 72, 153, 0.35)'
                : 'none',
              border: '2px solid #FFFFFF',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: canScrollLeft ? 'scale(1)' : 'scale(0.95)',
            }}
            onMouseEnter={(e) => {
              if (canScrollLeft) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (canScrollLeft) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Next shorts"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: canScrollRight
                ? 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)'
                : '#E2E8F0',
              color: canScrollRight ? '#FFFFFF' : '#94A3B8',
              cursor: canScrollRight ? 'pointer' : 'not-allowed',
              boxShadow: canScrollRight
                ? '0 6px 16px rgba(236, 72, 153, 0.35)'
                : 'none',
              border: '2px solid #FFFFFF',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: canScrollRight ? 'scale(1)' : 'scale(0.95)',
            }}
            onMouseEnter={(e) => {
              if (canScrollRight) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (canScrollRight) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Category Filter Pills (if enabled) */}
      {showCategoryFilter && (
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory(cat.id);
                  }
                  if (!isControlled) {
                    setInternalCategory(cat.id);
                  }
                }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  background: isSelected
                    ? 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)'
                    : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#475569',
                  border: isSelected ? '2px solid transparent' : '2px solid #E2E8F0',
                  boxShadow: isSelected
                    ? '0 4px 12px rgba(236, 72, 153, 0.25)'
                    : '0 2px 4px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '11px',
                    opacity: 0.85,
                    padding: '1px 6px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(255,255,255,0.25)' : '#F1F5F9',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Slider Carousel Container with Floating Edge Arrows */}
      <div style={{ position: 'relative' }}>
        {/* Floating Left Arrow (desktop overlay) */}
        {canScrollLeft && (
          <button
            type="button"
            className="slider-side-arrow"
            aria-label="Scroll left"
            onClick={() => handleScroll('left')}
            style={{
              position: 'absolute',
              left: '-16px',
              top: '45%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#FFFFFF',
              color: '#EC4899',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              border: '2px solid #FCE7F3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
              e.currentTarget.style.background = '#EC4899';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#EC4899';
            }}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Floating Right Arrow (desktop overlay) */}
        {canScrollRight && (
          <button
            type="button"
            className="slider-side-arrow"
            aria-label="Scroll right"
            onClick={() => handleScroll('right')}
            style={{
              position: 'absolute',
              right: '-16px',
              top: '45%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#FFFFFF',
              color: '#EC4899',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              border: '2px solid #FCE7F3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
              e.currentTarget.style.background = '#EC4899';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#EC4899';
            }}
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Horizontal Scrollable Track */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '18px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            padding: '12px 6px 20px 6px',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {filteredShorts.map((short, index) => {
            const isStory = short.category === 'stories';
            const isSong = short.category === 'songs';
            const isLearning = short.category === 'learning';
            const badgeBg = isStory ? '#EDE9FE' : isSong ? '#FCE7F3' : isLearning ? '#FEF3C7' : '#E0F2FE';
            const badgeColor = isStory ? '#7C3AED' : isSong ? '#DB2777' : isLearning ? '#D97706' : '#0284C7';
            const categoryEmoji = isStory ? '📖' : isSong ? '🎵' : isLearning ? '🎨' : '🚀';

            return (
              <div
                key={short.id}
                style={{
                  flex: '0 0 190px',
                  scrollSnapAlign: 'start',
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  border: '2.5px solid #F1F5F9',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.borderColor = '#F472B6';
                  e.currentTarget.style.boxShadow =
                    '0 16px 32px rgba(236, 72, 153, 0.22), 0 4px 12px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = '#F1F5F9';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* 9:16 Vertical Video Preview Container */}
                <div
                  onClick={() => {
                    setActiveModalShort(short);
                    setIsModalPlaying(false);
                  }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '9/16',
                    backgroundColor: '#0F172A',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {/* Gradient overlays */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.85) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '10px',
                    }}
                  >
                    {/* Top Row: YouTube Short Badge & Index */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          color: '#FFFFFF',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(239, 68, 68, 0.95)',
                          backdropFilter: 'blur(4px)',
                          padding: '2px 8px',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                        }}
                      >
                        <span style={{ fontSize: '10px' }}>⚡</span> Short
                      </span>

                      <span
                        style={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          backdropFilter: 'blur(4px)',
                          padding: '2px 6px',
                          borderRadius: '6px',
                        }}
                      >
                        #{index + 1}
                      </span>
                    </div>

                    {/* Middle: Play Button Overlay (commented out - card click directly opens modal) */}
                    {/* <div
                      style={{
                        alignSelf: 'center',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.92)',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#EC4899',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <Play size={20} fill="#EC4899" style={{ marginLeft: '2px' }} />
                    </div> */}

                    {/* Bottom: Views / Category tag */}
                    <div>
                      <span
                        style={{
                          color: '#FFFFFF',
                          fontSize: '11px',
                          fontWeight: 700,
                          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                          display: 'inline-block',
                          background: 'rgba(0,0,0,0.5)',
                          padding: '2px 6px',
                          borderRadius: '6px',
                        }}
                      >
                        👀 {short.views}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Content */}
                <div
                  style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Category pill */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: badgeColor,
                        backgroundColor: badgeBg,
                        padding: '2px 7px',
                        borderRadius: '6px',
                        marginBottom: '6px',
                        textTransform: 'capitalize',
                      }}
                    >
                      <span>{categoryEmoji}</span>
                      <span>{short.category}</span>
                    </div>

                    {/* Title */}
                    <h4
                      title={short.title}
                      onClick={() => setActiveModalShort(short)}
                      style={{
                        fontSize: '13px',
                        lineHeight: 1.35,
                        color: '#1E293B',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: '10px',
                        fontWeight: 600,
                      }}
                    >
                      {short.title}
                    </h4>
                  </div>

                  {/* Action Buttons: Watch Now & Open on YouTube */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '6px',
                      borderTop: '1px dashed #E2E8F0',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalShort(short);
                        setIsModalPlaying(false);
                      }}
                      style={{
                        fontSize: '12px',
                        color: '#EC4899',
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        background: 'transparent',
                        padding: '2px 0',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      <span>Watch</span>
                      <Play size={12} fill="#EC4899" />
                    </button>

                    <a
                      href={short.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Open directly on YouTube Shorts"
                      style={{
                        color: '#EF4444',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: '6px',
                        background: '#FEF2F2',
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FEE2E2';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FEF2F2';
                      }}
                    >
                      <YoutubeIcon size={13} color="#EF4444" />
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Player for Kids */}
      {activeModalShort && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => {
            setActiveModalShort(null);
            setIsModalPlaying(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              border: '4px solid #FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '94vh',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                background: 'linear-gradient(135deg, #FFF1F2 0%, #FAF5FF 100%)',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    backgroundColor: '#EF4444',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '8px',
                  }}
                >
                  ⚡ Short Player
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748B' }}>
                  Coco Kids World
                </span>
              </div>

              <button
                type="button"
                aria-label="Close modal"
                onClick={() => {
                  setActiveModalShort(null);
                  setIsModalPlaying(false);
                }}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  border: '1px solid #E2E8F0',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Embedded 9:16 Shorts Video Player */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9/16',
                backgroundColor: '#000000',
              }}
            >
              {!isModalPlaying ? (
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => setIsModalPlaying(true)}
                >
                  <img
                    src={activeModalShort.thumbnail}
                    alt={activeModalShort.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {/* Dark gradient overlay for text readability & play button pop */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(236, 72, 153, 0.55)',
                        border: '3.5px solid #FFFFFF',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Play size={32} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                    </div>
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        fontSize: '14px',
                        textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                        backgroundColor: 'rgba(0, 0, 0, 0.55)',
                        padding: '5px 14px',
                        borderRadius: '12px',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      Click to Play! ✨
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeModalShort.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeModalShort.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              )}
            </div>

            {/* Modal Bottom Details and Navigation */}
            <div style={{ padding: '16px', backgroundColor: '#FFFFFF' }}>
              <h3
                style={{
                  fontSize: '15px',
                  lineHeight: 1.35,
                  color: '#1E293B',
                  marginBottom: '10px',
                }}
              >
                {activeModalShort.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                {/* Previous & Next Short Controls inside modal */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {(() => {
                    const idx = filteredShorts.findIndex((s) => s.id === activeModalShort.id);
                    const prevShort = idx > 0 ? filteredShorts[idx - 1] : null;
                    const nextShort =
                      idx < filteredShorts.length - 1 ? filteredShorts[idx + 1] : null;

                    return (
                      <>
                        <button
                          type="button"
                          disabled={!prevShort}
                          onClick={() => {
                            if (prevShort) {
                              setActiveModalShort(prevShort);
                              setIsModalPlaying(false);
                            }
                          }}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '14px',
                            fontSize: '12px',
                            fontWeight: 700,
                            backgroundColor: prevShort ? '#F1F5F9' : '#F8FAFC',
                            color: prevShort ? '#334155' : '#CBD5E1',
                            cursor: prevShort ? 'pointer' : 'not-allowed',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <ChevronLeft size={16} /> Prev
                        </button>

                        <button
                          type="button"
                          disabled={!nextShort}
                          onClick={() => {
                            if (nextShort) {
                              setActiveModalShort(nextShort);
                              setIsModalPlaying(false);
                            }
                          }}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '14px',
                            fontSize: '12px',
                            fontWeight: 700,
                            backgroundColor: nextShort
                              ? 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)'
                              : '#F8FAFC',
                            color: nextShort ? '#FFFFFF' : '#CBD5E1',
                            cursor: nextShort ? 'pointer' : 'not-allowed',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          Next <ChevronRight size={16} />
                        </button>
                      </>
                    );
                  })()}
                </div>

                {/* Open in YouTube Shorts Link */}
                <a
                  href={activeModalShort.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '14px',
                    backgroundColor: '#FEF2F2',
                    color: '#DC2626',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  <YoutubeIcon size={14} color="#DC2626" />
                  <span>Open in YouTube ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .slider-side-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
