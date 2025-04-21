'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { GlobeIcon } from './icons';
import { useCallback } from 'react';
import { scrollDataAtom } from '@/hooks/use-scroll-hook';
import { useAtom } from 'jotai';
export const LanguageSelector = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
  const currentSearch = searchParams.toString();
  const [scrollData] = useAtom(scrollDataAtom);

  const getFullPath = useCallback(
    (locale: string) => {
      const currentHash = scrollData?.currentHash || '';
      const search = currentSearch ? `?${currentSearch}` : '';
      return `/${locale}${currentPath}${search}${currentHash}`;
    },
    [currentPath, currentSearch, scrollData.currentHash]
  );

  return (
    <>
      <div className='flex h-5 tooltip tooltip-bottom' data-tip='Language'>
        <button
          className='text-base-500 dark:text-white'
          popoverTarget='popover-1'
          style={{ anchorName: '--anchor-1' } as React.CSSProperties}
        >
          <GlobeIcon size={20} />
        </button>
      </div>
      <ul
        className='dropdown dropdown-end menu w-36 rounded-box bg-base-100 shadow-sm'
        popover='auto'
        id='popover-1'
        style={{ positionAnchor: '--anchor-1' } as React.CSSProperties}
      >
        <li>
          <Link href={getFullPath('en')}>English</Link>
        </li>
        <li>
          <Link href={getFullPath('ko')}>한국어</Link>
        </li>
      </ul>
    </>
  );
};

export default LanguageSelector;
