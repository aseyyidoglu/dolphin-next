import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import MobileMenu from '@/components/mobile-menu/mobile-menu'
import MobileButton from '@/components/mobile-button/mobile-button'
import Button from '@/components/button/button'
import Navigation from '@/components/parts/navigation'

import { useTheme } from '../../context/theme.js'

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [menuState, setMenuState] = useState(false)
  const [style, setStyle] = useState([".menu", "bg"])
  const isMounted = useRef(false)
  const toggleTheme = () => {
    (theme === 'light')
      ? setTheme('dark')
      : setTheme('light');
  }

  useEffect(() => {
    const toggleStyle = () => {
      if (menuState === false) {
        setStyle([".menu__open", ".bg__blur"]);
        setMenuState(true);
      } else {
        setStyle([".menu", ".bg"]);
        setMenuState(false);
      }
    }
    return () => {
      (isMounted.current === false)
        ? isMounted.current = true
        : toggleStyle();
    }
  }, [menuState]);

  return (
    <>
      <header id="header">
        <MobileMenu menuState={menuState} setMenuState={setMenuState} />
        <div id="topbar">
          <div id="mobilebutton">
            <MobileButton onClick={() => (
              menuState === false
              ? setMenuState(true)
              : setMenuState(false)
              )} />
          </div>
          <Navigation id="topnav" className="navigation__vertical" />
          <div id="topbuttons">
            <Button className="primary" onClick={() => toggleTheme()}>{theme}</Button>
            <Button className="primary">Sign up</Button>
          </div>
        </div>
      </header>
    </>
  )
}