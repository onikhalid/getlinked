"use client"

import { NavContext } from "./contexts";
import { useState, useEffect, useLayoutEffect } from "react";
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook';






export const NavProvider = ({ children }) => {

  const [mobileNavState, setMobileNav] = useState(null);

  const setMobileNavState = () => {
    if (mobileNavState === null) {
      setMobileNav('open');
    } else if (mobileNavState === 'close') {
      setMobileNav('open');
    } else if (mobileNavState === 'open') {
      setMobileNav('close');
    } else {
      setMobileNav(null);
    }
  };



  return (
    <NavContext.Provider value={{ mobileNavState, setMobileNavState }}>
      {children}
    </NavContext.Provider>
  );
};




