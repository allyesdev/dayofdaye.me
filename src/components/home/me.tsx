import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const MeWrap = ({
  id,
  children,
  wrapClass,
  wrapStyle,
}: {
  id?: string;
  children?: React.ReactNode;
  wrapClass?: string;
  wrapStyle?: React.CSSProperties;
}) => {
  return (
    <div
      id={id}
      className={`flex items-center justify-center w-full h-[100lvh] min-h-max ${wrapClass}`}
      style={wrapStyle}
    >
      {children}
    </div>
  );
};

export const Avatar = () => {
  return (
    <Image
      src={`/images/me.png`}
      alt='me'
      width={0}
      height={0}
      sizes='50vw'
      style={{ width: '30vh', height: 'auto' }}
      priority
    />
  );
};

export const MeMain = () => {
  const t = useTranslations('home');

  return (
    <MeWrap id='me' wrapClass='flex-col gap-10 sm:flex-row'>
      <Avatar />
      <div className='flex flex-col items-center justify-center sm:ml-10'>
        <h2 className='font-bold text-center break-keep dark:text-white'>
          {t('title')}
        </h2>
        <h1 className='font-bold text-center break-keep dark:text-white'>
          {t('name')}
        </h1>
      </div>
    </MeWrap>
  );
};
