'use client'

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Surprise = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions(); // set initial dimensions
    window.addEventListener('resize', updateDimensions); // update on resize

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={150}
    />
  );
};

export default Surprise;
