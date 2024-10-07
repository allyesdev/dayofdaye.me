import {
  SnackbarProvider as NotistackSnackbarProvider,
  MaterialDesignContent,
} from 'notistack';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

const SnackbarProvider = (props: any) => {
  const customIcon = {
    success: <CheckCircleIcon className='f-24 mr-12 color-green' />,
    error: <ErrorIcon className='f-24 mr-12 color-red-200' />,
    warning: <WarningIcon className='f-24 mr-12 color-yellow' />,
    info: <InfoIcon className='f-24 mr-12 color-blue-200' />,
  };

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent': {
      backgroundColor: '#121212',
      display: 'flex',
      fontSize: '14px',
      alignItems: 'center',
      maxWidth: '800px',
      padding: '6px 12px',
      borderRadius: '6px',
    },
  }));

  const customComponents = {
    success: StyledMaterialDesignContent,
    error: StyledMaterialDesignContent,
    warning: StyledMaterialDesignContent,
    info: StyledMaterialDesignContent,
  };

  return (
    <NotistackSnackbarProvider
      iconVariant={customIcon}
      Components={customComponents}
      maxSnack={4}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {props.children}
    </NotistackSnackbarProvider>
  );
};

export { SnackbarProvider };
