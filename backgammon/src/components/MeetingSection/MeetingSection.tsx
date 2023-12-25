import React, { useEffect, useRef } from 'react';
import './MeetingSection.css';
import dice from './dice.png';

function MeetingSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionElement.classList.add('animate', 'fadeIn');
          observer.unobserve(sectionElement);
        }
      });
    });

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [sectionRef]);

  return (
    <div className='wrapper trigger' ref={sectionRef}>
      <div className='text'>
        <span className='header-text'>Meetings</span> <br />
        <span className='meeting-text'>
          Weekly Meetings on Tuesdays <br />
          Big Time Brewery @5 <br />
          Quarterly tournaments @ somewhere
        </span>
      </div>
      <div className='media'>
        <img src={dice} className='img' alt='Dice'></img>
        <button className='btn'>Join our Discord!</button>
      </div>
    </div>
  );
}

export default MeetingSection;
