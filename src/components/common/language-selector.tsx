'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { GlobeIcon } from './icons';
import { useCallback, useEffect, useState, useRef } from 'react';
import { scrollDataAtom } from '@/hooks/use-scroll-hook';
import { useAtom } from 'jotai';

export const LanguageSelector = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
  const currentSearch = searchParams.toString();
  const [scrollData] = useAtom(scrollDataAtom);

  const getFullPath = useCallback(
    (_locale: string) => {
      const currentHash = scrollData?.currentHash || '';
      const search = currentSearch ? `?${currentSearch}` : '';
      return `/${_locale}${currentPath}${search}${currentHash}`;
    },
    [currentPath, currentSearch, scrollData.currentHash]
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // 외부 클릭 시 dropdown 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener(
        'touchstart',
        handleClickOutside as EventListener
      );
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener(
        'touchstart',
        handleClickOutside as EventListener
      );
    };
  }, [isOpen]);

  useEffect(() => {
    const initialHash = window.location.hash;
    if (initialHash) {
      document.getElementById(initialHash.slice(1))?.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown dropdown-bottom dropdown-end flex h-5 tooltip tooltip-bottom ${isOpen ? 'dropdown-open' : ''}`}
      data-tip='Language'
    >
      <button
        className='text-base-500 dark:text-white'
        onClick={toggleDropdown}
        tabIndex={0}
        type='button'
        aria-label='언어 선택'
        aria-haspopup='true'
        aria-expanded={isOpen}
      >
        <GlobeIcon size={20} />
      </button>
      <ul className='dropdown-content menu w-36 rounded-box bg-base-100 shadow-sm z-50'>
        <li>
          <Link href={getFullPath('en')} onClick={closeDropdown}>
            English
          </Link>
        </li>
        <li>
          <Link href={getFullPath('ko')} onClick={closeDropdown}>
            한국어
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
