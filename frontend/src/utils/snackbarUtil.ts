import { enqueueSnackbar } from 'notistack';
import { SnackbarCloseBtn } from '@/modules/core/common/SnackbarClose';

type SnackbarTypeType = 'default' | 'error' | 'success' | 'warning' | 'info';
type SnackbarDelayType = number | 'Infinite';

export const showSnackbar = (
  snackbarMessage: string,
  snackbarType: SnackbarTypeType = 'success',
  snackbarDelay: SnackbarDelayType = 'Infinite'
) => {
  const duration = snackbarDelay === 'Infinite' ? null : snackbarDelay * 1000;
  return enqueueSnackbar(snackbarMessage, {
    variant: snackbarType,
    autoHideDuration: duration,
    action: SnackbarCloseBtn,
    preventDuplicate: true,
  });
};
