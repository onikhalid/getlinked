import React, { useEffect, useRef } from 'react';
import styles from './timeline.module.scss';
import { montserrat } from '@/app/layout';

function Timeline() {
  const timelineRef = useRef(null);

  const timelineData = [
    {
        date: 'November 18, 2023',
        event: {
            title: 'Hackathon Announcement',
            desc: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
        }
    },
    {
        date: 'November 18, 2023',
        event: {
            title: 'Teams Registration begins',
            desc: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
        }
    },
    {
        date: 'November 18, 2023',
        event: {
            title: 'Teams Registration ends',
            desc: 'Interested Participants are no longer Allowed to register'
        }
    },
    {
        date: 'November 18, 2023',
        event: {
            title: 'Announcement of the accepted teams and ideas',
            desc: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
        }
    },
    {
        date: 'November 18, 2023',
        event: {
            title: 'Getlinked Hackathon 1.0 Offically Begins',
            desc: 'Accepted teams can now proceed to build their ground breaking skill driven solutions'
        }
    },
    {
        date: 'November 18, 2023',
        event: {
            title: 'Demo Day',
            desc: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
        }
    },


];



useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animatestick);
        }
      });
    };

    const stickElements = document.querySelectorAll(`.${styles.stick}`);
    const observer = new IntersectionObserver(handleIntersection, options);

    stickElements.forEach((stickElement) => {
      observer.observe(stickElement);
    });

    // return () => {
    //   observer.disconnect();
    // };
  }, []); 






  return (
    <div className={`${styles.timeline} ${montserrat.className}`} ref={timelineRef}>
      {timelineData.map((item, index) => (
        <div
          className={index % 2 === 0 ? `${styles.timelineItem} ${styles.reversed}` : `${styles.timelineItem}`}
          key={index}
        >
          <div className={styles['event-details']}>
            <h5 className={`${styles.eventTitle} ${montserrat.className}`}>{item.event.title}</h5>
            <p>{item.event.desc}</p>
          </div>
          <div className={styles['timeline-indicator']}>
            <span className={styles.stick}></span>
            <span className={styles.circle}>{index + 1}</span>
          </div>
          <div className={styles['event-date']}>
            <h5>{item.date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
