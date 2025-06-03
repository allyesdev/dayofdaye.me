import LanguageSelector from './language-selector';
import DarkModeToggle from '@/components/common/darkmode-toggle';
import { HomeIcon, BotIcon, BlogIcon } from './icons';
import Link from 'next/link';
import { useScrollHook } from '@/hooks/use-scroll-hook';
import cn from 'classnames';

const GNBMenu = () => {
  return (
    <>
      <div className='tooltip tooltip-bottom dark:text-white' data-tip='Home'>
        <Link href='/'>
          <HomeIcon size={20} />
        </Link>
      </div>
      <div className='tooltip tooltip-bottom dark:text-white' data-tip='Blog'>
        <Link href='/blog'>
          <BlogIcon size={20} />
        </Link>
      </div>
      <div className='tooltip tooltip-bottom dark:text-white' data-tip='Chat'>
        <Link href='/chat'>
          <BotIcon size={20} />
        </Link>
      </div>
      <div className='divider divider-horizontal m-0'></div>
    </>
  );
};

export const GNB = () => {
  const { scrollData } = useScrollHook();

  return (
    <div className='w-full fixed top-2 bg-transparent px-4 z-20 max-w-[1024px] left-[50%] translate-x-[-50%]'>
      <nav
        className={cn(
          'flex flex-row items-center justify-between py-4 px-6 gap-4 rounded-2xl bg-white dark:bg-base-100 h-16',
          !scrollData.isAtTop && 'shadow-md'
        )}
      >
        <div className='text-lg'>
          {!scrollData.isAtTop && <span>개발자 김다예</span>}
        </div>
        <div className='flex items-center justify-between gap-4'>
          {process.env.NODE_ENV === 'development' && <GNBMenu />}
          <DarkModeToggle />
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
};
