import { closeSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

const SnackbarCloseBtn = (snackbarId: any) => (
  <button
    type='button'
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '24px',
      height: '24px',
      marginLeft: 'auto',
      padding: '0',
      border: '0',
      cursor: 'pointer',
      backgroundColor: '#0000',
      color: '#fff',
    }}
    onClick={() => closeSnackbar(snackbarId)}
  >
    <CloseIcon className='f-24 mr-12 color-gray-500' />
  </button>
);
export { SnackbarCloseBtn };
