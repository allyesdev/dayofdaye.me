import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';

const darkModeAtom = atomWithStorage<'system' | 'dark' | 'light'>(
  'darkMode',
  'system'
);

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const applyMode = (mode: 'system' | 'dark' | 'light') => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      document.documentElement.setAttribute('data-theme', mode);
    } else if (mode === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
      document.documentElement.setAttribute('data-theme', mode);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      mode = systemPrefersDark ? 'dark' : 'light';
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(mode);
      document.documentElement.style.setProperty('color-scheme', mode);
      document.documentElement.setAttribute('data-theme', mode);
    }
  };

  useEffect(() => {
    // 초기 렌더링 시 시스템 설정 확인
    if (typeof window !== 'undefined') {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const initialMode =
        darkMode === 'system'
          ? systemPrefersDark
            ? 'dark'
            : 'light'
          : darkMode;
      applyMode(initialMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyMode(darkMode);
  }, [darkMode]);

  const handleDarkMode = (newMode: 'system' | 'light' | 'dark') => {
    setDarkMode(newMode);
  };

  return {
    darkMode,
    handleDarkMode,
  };
}
