import { useEffect, useRef } from 'react';

interface TouchSwipeProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  minSwipeDistance?: number;
}

export const useTouchSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  minSwipeDistance = 50
}: TouchSwipeProps) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartX.current || !touchEndX.current) return;

      const swipeDistance = touchEndX.current - touchStartX.current;

      if (Math.abs(swipeDistance) >= minSwipeDistance) {
        if (swipeDistance > 0 && onSwipeLeft) {
          onSwipeLeft();
        } else if (swipeDistance < 0 && onSwipeRight) {
          onSwipeRight();
        }
      }

      // Reset touch coordinates
      touchStartX.current = null;
      touchEndX.current = null;
    };

    const element = document.querySelector('.card-container');
    if (element) {
      element.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
      element.addEventListener('touchmove', handleTouchMove as EventListener, { passive: true });
      element.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart as EventListener);
        element.removeEventListener('touchmove', handleTouchMove as EventListener);
        element.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [onSwipeLeft, onSwipeRight, minSwipeDistance]);
}; 