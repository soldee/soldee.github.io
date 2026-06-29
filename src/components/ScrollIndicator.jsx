import React from 'react';

const ScrollIndicator = ({ 
  targetId, 
  offset = 56, 
  duration = 600, 
  className = 'hero-scroll-indicator',
  onClick,
  children 
}) => {
  
  const handleScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClick) onClick(e);

    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div 
      onClick={handleScroll}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleScroll(e); }}
      className={className} 
      role="button"
      tabIndex={0}
      aria-label={`Scroll to ${targetId}`}
    >
      {children}
    </div>
  );
};

export default ScrollIndicator;