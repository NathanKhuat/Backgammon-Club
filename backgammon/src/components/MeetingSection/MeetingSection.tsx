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
          Weekly Meetings on Thursdays <br />
          Big Time Brewery @ 7pm <br />
          Quarterly tournaments @ TBD
        </span>
      </div>
      <div className='media'>
        <img src={dice} className='img' alt='Dice'></img>
        <a href="https://discord.gg/eJKYyyKFCY" target="_blank">
          <button className='btn'>Join our Discord!</button>
        </a>
      </div>
    </div>
  );
}

export default MeetingSection;
