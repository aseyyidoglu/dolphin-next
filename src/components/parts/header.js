import React, { useState, useEffect, useRef, useContext } from 'react';

import MobileMenu from '@/components/mobile-menu/mobile-menu'
import MobileButton from '@/components/mobile-button/mobile-button'
import Button from '@/components/button/button'
import Navigation from '@/components/parts/navigation'

import { ThemeContext } from '../../context/theme.js'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuState, setMenuState] = useState(false)
  const [style, setStyle] = useState([".menu", "bg"])
  const isMounted = useRef(false)

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
            <MobileButton onClick={() => toggleTheme()} />
          </div>
          <Navigation id="topnav" className="navigation__vertical" />
          <div id="topbuttons">
            <Button className="primary" onClick={ () => toggleTheme() } > { theme } </Button>
            <Button className="primary">Sign up</Button>
          </div>
        </div>
      </header>
    </>
  )
}