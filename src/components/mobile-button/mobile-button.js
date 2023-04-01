import { useState , useEffect } from 'react';
import styles from './mobile-button.module.css';

export default function MobileButton({ onClick }) {
  const [hoverState, setHoverState] = useState(false);
  const [lineStyles, setLineStyles] = useState(
    [
      `${styles.line1}`,
      `${styles.line2}`,
      `${styles.line3}`
    ]
  );
  useEffect(() => {
    if (hoverState) {
      setLineStyles(
        [
        `${styles.line1_open}`,
        `${styles.line2_open}`,
        `${styles.line3_open}`
      ])
    } else {
      setLineStyles(
        [
        `${styles.line1}`,
        `${styles.line2}`,
        `${styles.line3}`
      ])
    }
  },[hoverState]);

  return (
    <>
      <button
        className={ styles.menu_button }
        onClick={ onClick }
        onMouseEnter= { () => setHoverState(true) }
        onMouseLeave= { () => setHoverState(false) }
        aria-label="" >
        <div className={styles.container}>
          <span className={lineStyles[0]}></span>
          <span className={lineStyles[1]}></span>
          <span className={lineStyles[2]}></span>
        </div>
      </button>
    </>
  )
}