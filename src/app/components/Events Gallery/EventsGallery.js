'use client';

import { useState, useRef, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import styles from './EventsGallery.module.scss';

const EventsGallery = () => {
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const galleryRef = useRef(null);

  const events = [
    { id: 1, title: 'Pottery Market - Downtown', date: 'September 15, 2024', location: 'Main Street Plaza' },
    { id: 2, title: 'Fall Craft Fair', date: 'October 3, 2024', location: 'Community Center' },
    { id: 3, title: 'Holiday Artisan Show', date: 'December 12, 2024', location: 'Convention Hall' },
    { id: 4, title: 'Spring Pottery Workshop', date: 'March 20, 2025', location: 'Studio Gallery' }
  ];

  const checkScrollButtons = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      const needsNavigation = scrollWidth > clientWidth;
      
      setShowNavButtons(needsNavigation);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.EventsGalleryContainer}>
      <h2 className={styles.header}>Upcoming Events</h2>
      {showNavButtons && canScrollLeft && (
        <button className={`${styles.navButton} ${styles.leftButton}`} onClick={scrollLeft}>
          &#8249;
        </button>
      )}
      
      {events.length === 0 ? (
        <div className={styles.noEvents}>
          <p>No events scheduled yet. Stay tuned and follow us for updates!</p>
          <a 
            href="https://www.instagram.com/ritkastudios/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.instagramLink}
          >
            <Instagram size={24} />
          </a>
        </div>
      ) : (
        <div 
          ref={galleryRef}
          className={styles.gallery}
          onScroll={checkScrollButtons}
        >
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.imageContainer}>
                <img 
                  src="/images/300x375.svg" 
                  alt={event.title}
                  className={styles.eventImage}
                />
              </div>
              <div className={styles.eventInfo}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDate}>{event.date}</p>
                <p className={styles.eventLocation}>{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {showNavButtons && canScrollRight && (
        <button className={`${styles.navButton} ${styles.rightButton}`} onClick={scrollRight}>
          &#8250;
        </button>
      )}
    </div>
  );
};

export default EventsGallery;