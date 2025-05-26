'use client';

import _ from 'lodash';
import { IScroll } from '@/types/scroll';
import { atom, useAtom, useAtomValue } from 'jotai';
import { RefObject, UIEventHandler, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const scrollStartRefAtom = atom<RefObject<HTMLDivElement> | null>(null);
export const scrollEndRefAtom = atom<RefObject<HTMLDivElement> | null>(null);

export const scrollAtom = atom<IScroll>({
  isAtTop: true,
  isAtBottom: false,
  userScrolled: false,
  isOverflowing: false,
  isAutoScrolling: false,
});

export const scrollDataAtom = atom(
  (get) => get(scrollAtom),
  (get, set, update: Partial<IScroll>) => {
    set(scrollAtom, { ...get(scrollAtom), ...update });
  }
);

export const useScrollHook = () => {
  const [scrollData, setScrollData] = useAtom(scrollDataAtom);
  const router = useRouter();

  useEffect(() => {
    setScrollData({ userScrolled: false });
    if (scrollData.userScrolled) {
      setScrollData({ userScrolled: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateHash = useCallback(() => {
    const sections = document.querySelectorAll('div[id]');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) {
        currentSection = section.id;
      }
    });
    if (currentSection && currentSection !== scrollData.currentHash?.slice(1)) {
      router.replace(`#${currentSection}`, { scroll: false });
      setScrollData({ currentHash: `#${currentSection}` });
    }
  }, [router, scrollData.currentHash, setScrollData]);

  const handleScroll: UIEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const target = e.target as HTMLDivElement;

      const scrolledHeight =
        Math.floor(target.scrollHeight) - Math.floor(target.scrollTop);
      const bottom =
        scrolledHeight <= Math.floor(target.clientHeight) + 1 &&
        scrolledHeight >= Math.floor(target.clientHeight) - 1;
      setScrollData({ isAtBottom: bottom });

      const top = target.scrollTop === 0;
      setScrollData({ isAtTop: top });

      if (!bottom && !scrollData.isAutoScrolling) {
        setScrollData({ userScrolled: true });
      } else {
        setScrollData({ userScrolled: false });
      }

      const isOverflow = target.scrollHeight > target.clientHeight;
      setScrollData({ isOverflowing: isOverflow });

      // 앵커 라우팅 로직 추가
      _.throttle(updateHash, 100)();
    },
    [setScrollData, scrollData.isAutoScrolling, updateHash]
  );

  const scrollStartRef = useAtomValue(scrollStartRefAtom);
  const scrollEndRef = useAtomValue(scrollEndRefAtom);

  const scrollToTop = useCallback(() => {
    if (scrollStartRef?.current) {
      scrollStartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToBottom = useCallback(() => {
    setScrollData({ isAutoScrolling: true });
    setTimeout(() => {
      if (scrollEndRef?.current) {
        scrollEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollData({ isAutoScrolling: false });
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    scrollData,
    scrollStartRef,
    scrollEndRef,
    handleScroll,
    scrollToTop,
    scrollToBottom,
  };
};
