import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export const convertDateForAdminUsageFreq = (date: any) => {
  if (!date) return '';
  const formattedDate = dayjs(date, 'YYYYMMDD').format('YYYY.MM.DD');
  return formattedDate;
};
export const convertCost = (val: any) => {
  if (!val) return '0';
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// 2024-06-01(목)형식)
export const formatDate = (dateString: string) => {
  if (!dateString) return '';
  dayjs.locale('ko');
  const formattedDate = dayjs(dateString, 'YYYYMMDD').format('YYYY-MM-DD(dd)');
  return formattedDate;
};
