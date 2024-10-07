import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_common from './en/common.json';
import en_chat from './en/chat.json';
import ko_common from './ko/common.json';
import ko_chat from './ko/chat.json';

export const defaultNS = 'common';

export const i18nInitialize = () => {
  i18next.use(initReactI18next).init({
    lng: 'ko',
    fallbackLng: 'ko',
    debug: true,
    resources: {
      en: {
        common: en_common,
        chat: en_chat,
      },
      ko: {
        common: ko_common,
        chat: ko_chat,
      },
    },
    defaultNS,
  });
};
