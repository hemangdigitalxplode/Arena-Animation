/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return children || null;
  };
  
  export default ScrollToTop;