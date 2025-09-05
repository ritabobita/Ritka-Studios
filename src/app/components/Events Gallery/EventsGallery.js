'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Instagram } from 'lucide-react';
import { parseISO, format } from 'date-fns';
import { formatInTimeZone, zonedTimeToUtc } from 'date-fns-tz';
import styles from './EventsGallery.module.scss';
import { EVENTS_DATA } from './eventsData';

const EventsGallery = () => {
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const galleryRef = useRef(null);

  const isEventActive = (event) => {
    const now = new Date();
    // Create event end time string in ISO format
    const eventEndDateTimeString = `${event.date}T${event.endTime}:00`;
    // Parse the event end time and convert it from the event's timezone to UTC
    const eventEndDateTime = parseISO(eventEndDateTimeString);
    const eventEndUTC = zonedTimeToUtc(eventEndDateTime, event.timezone);
    // Compare current UTC time with event end UTC time
    return now < eventEndUTC;
  };

  const activeEvents = useMemo(() => {
    return EVENTS_DATA.filter(isEventActive);
  }, []);

  const formatEventTime = (startTime, endTime) => {
    const formatTime = (time) => {
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'pm' : 'am';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minutes}${ampm}`;
    };
    
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  const formatEventDate = (date) => {
    const [year, month, day] = date.split('-');
    const eventDate = new Date(year, month - 1, day);
    
    return eventDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
  }, [activeEvents]);

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
      
      {activeEvents.length === 0 ? (
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
          {activeEvents.map((event) => (
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
                <p className={styles.eventDate}>{formatEventDate(event.date)}</p>
                <p className={styles.eventTime}>{formatEventTime(event.startTime, event.endTime)}</p>
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