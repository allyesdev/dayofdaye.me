import { useTranslation } from 'react-i18next';

export const ChatMain = () => {
  const { t } = useTranslation('chat');

  return <div className='chat-main'>{t('chat')}</div>;
};
