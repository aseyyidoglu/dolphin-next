import React from 'react';
import Link from 'next/link';
import MobileButton from '@/components/mobile-button/mobile-button';
import Navigation from '@/components/parts/navigation';
import Button from '@/components/button/button';
import styles from './mobile-menu.module.css';

export default function MobileMenu({ menuState, setMenuState }) {
  return (
    <>
      <div id="mobile-navigation"
        className={(
          menuState
          ? styles.menu__open
          : styles.menu )}>
        <span id="body-bg"
          onclick=""
          className={styles.bg}>
        </span>
        <div id="menu">
          <span className={styles.menu_close_button}>
            <MobileButton
              onClick={() => (
                menuState === false 
                ? setMenuState(true) 
                : setMenuState(false)
              )} />
          </span>
          <Navigation id="sidenav" className={styles.sidenav}><Button>Contact us</Button></Navigation>
        </div>
      </div>
    </>
  )
}