'use client';

import _ from 'lodash';
import { IScroll } from '@/types/scroll';
import { atom, useAtom } from 'jotai';
import { RefObject, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const scrollStartRefAtom = atom<RefObject<HTMLDivElement> | null>(null);
export const scrollEndRefAtom = atom<RefObject<HTMLDivElement> | null>(null);

export const scrollAtom = atom<IScroll>({
  scrollY: 0,
  isScrollingUp: false,
  currentHash: '',
  isAtTop: true,
  isAtBottom: false,
});

export const scrollDataAtom = atom(
  (get) => get(scrollAtom),
  (get, set, update: Partial<IScroll>) => {
    set(scrollAtom, { ...get(scrollAtom), ...update });
  }
);

export const useScrollHook = (threshold: number = 50) => {
  const [scrollData, setScrollData] = useAtom(scrollDataAtom);
  const router = useRouter();

  const updateHash = useCallback(() => {
    const sections = document.querySelectorAll('div[id]');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) {
        currentSection = section.id;
      }
    });
    if (
      currentSection &&
      currentSection !== 'scroll-content' &&
      currentSection !== scrollData.currentHash?.slice(1)
    ) {
      router.replace(`#${currentSection}`, { scroll: false });
      setScrollData({ currentHash: `#${currentSection}` });
    }
  }, [router, scrollData.currentHash, setScrollData]);

  useEffect(() => {
    const scrollContent = document.getElementById('scroll-content');
    let lastY = scrollContent?.scrollTop || 0;

    const onScroll = () => {
      const currentY = scrollContent?.scrollTop || 0;
      _.throttle(() => {
        setScrollData({
          scrollY: currentY,
          isScrollingUp: currentY < lastY || currentY < threshold,
          isAtTop: currentY < threshold,
          isAtBottom:
            currentY >
            (scrollContent?.scrollHeight || 0) - window.innerHeight - threshold,
        });
        lastY = currentY;
        updateHash();
      }, 100)();
    };

    scrollContent?.addEventListener('scroll', onScroll);
    return () => scrollContent?.removeEventListener('scroll', onScroll);
  }, [setScrollData, threshold, updateHash]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return {
    scrollData,
    scrollToTop,
    scrollToBottom,
  };
};
