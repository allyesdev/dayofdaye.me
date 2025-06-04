'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { GlobeIcon } from './icons';
import { useCallback, useEffect } from 'react';
import { scrollDataAtom } from '@/hooks/use-scroll-hook';
import { useAtom } from 'jotai';

export const LanguageSelector = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
      className='dropdown dropdown-bottom dropdown-end flex h-5 tooltip tooltip-bottom'
      data-tip='Language'
    >
      <button className='text-base-500 dark:text-white'>
        <GlobeIcon size={20} />
      </button>
      <ul className='dropdown-content menu w-36 rounded-box bg-base-100 shadow-sm'>
        <li>
          <Link href={getFullPath('en')}>English</Link>
        </li>
        <li>
          <Link href={getFullPath('ko')}>한국어</Link>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
