"use client"

import { createContext } from 'react';




export const NavContext = createContext({
  hidden: true,
  toggleTheme: () => { },
});


