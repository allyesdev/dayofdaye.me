import { useTranslations } from 'next-intl';
import { MeWrap } from './me';

export const MeInfo = () => {
  const t = useTranslations('info');

  return (
    <MeWrap
      id='info'
      wrapStyle={{
        flexDirection: 'column',
        gap: '100px',
        height: 'fit-content',
      }}
    >
      <div className='w-[80vmin] sm:w-[60vmin] break-keep text-center'>
        <span>
          {t('info1')}
          <span className='text-5xl'>{t('info2')}</span>
          {t('info3')}&nbsp;
        </span>
        <span>{t('info4')}&nbsp;</span>
        <span>{t('info5')}&nbsp;</span>
      </div>
      <div className='flex py-20 px-7 gap-10 flex-col md:items-center lg:flex-row'>
        <h2>INFORMATION</h2>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
          <div className='flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end'>
            <span className='font-light'>{t('name')}</span>
            <span className='text-2xl font-light'>{t('name_value')}</span>
          </div>
          <div className='flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end'>
            <span className='font-light'>{t('email')}</span>
            <span className='text-2xl font-light'>kdy24610@gmail.com</span>
          </div>
          <div className='flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end'>
            <span className='font-light'>{t('education')}</span>
            <span className='text-2xl font-light whitespace-pre-line'>
              {t('education_value')}
            </span>
          </div>
          <div className='flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end'>
            <span className='font-light'>Linked In</span>
            <a
              href='https://www.linkedin.com/in/daye-kim-577976192/'
              target='_blank'
              className='text-2xl font-light underline underline-offset-1'
            >
              MY PROFILE
            </a>
          </div>
        </div>
      </div>
    </MeWrap>
  );
};
