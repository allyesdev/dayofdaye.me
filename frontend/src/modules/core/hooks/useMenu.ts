import { IMenu } from '@/types/common';
import { useTranslation } from 'react-i18next';

export const useMenu = () => {
  const { t } = useTranslation();

  const menuItems: IMenu[] = [
    {
      title: t('menu.home'),
      path: '/',
    },
    {
      title: t('menu.about'),
      path: '/about',
    },
    {
      title: t('menu.chat'),
      path: '/chat',
    },
  ];

  return {
    menuItems,
  };
};
