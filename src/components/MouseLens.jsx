import React, { useState, useEffect } from 'react';
import './MouseLens.css';

const MouseLens = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      
      window.requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [visible]);

  return (
    <div 
      className="glass-lens" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        display: visible ? 'block' : 'none'
      }}
    />
  );
};

export default MouseLens;