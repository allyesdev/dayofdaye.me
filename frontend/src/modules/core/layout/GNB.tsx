import { Box, IconButton, Popover } from '@mui/material';
import MenuIcon from '@/assets/icons/icon-apps.svg?react';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@/assets/icons/icon-globe.svg?react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './Layout.module.scss';
import { LayoutContext } from '../contexts/LayoutContext';
import { useMenu } from '../hooks/useMenu';

export const GNB = () => {
  const { t, i18n } = useTranslation();
  const { openMobileDrawer } = useContext(LayoutContext);
  const navigate = useNavigate();

  const changeLanguageHandler = () => {
    if (i18n.language === 'en') i18n.changeLanguage('ko');
    else i18n.changeLanguage('en');
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const { menuItems } = useMenu();
  return (
    <div className={styles.gnb}>
      <div className={styles.front}>
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
          onClick={openMobileDrawer}
        >
          <IconButton aria-label='menu' size='small' onClick={handleClick}>
            <MenuIcon fontSize='small' />
          </IconButton>
          {open && (
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 0,
                horizontal: 20,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  borderRadius: '10px',
                  gap: '8px',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                },
              }}
            >
              {menuItems.map((menu) => (
                <div
                  key={menu.path}
                  role='presentation'
                  onClick={() => {
                    navigate(menu.path);
                  }}
                  className={styles.menu}
                >
                  {menu.title}
                </div>
              ))}
            </Popover>
          )}
        </Box>
      </div>

      <div className={styles.rear}>
        <Box
          className={styles.menuWrap}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
          onClick={openMobileDrawer}
        >
          {menuItems.map((menu) => (
            <div
              key={menu.path}
              role='presentation'
              onClick={() => {
                navigate(menu.path);
              }}
              className={cn(styles.menu, styles.gnbMenu)}
            >
              {menu.title}
            </div>
          ))}
        </Box>
        <IconButton
          onClick={changeLanguageHandler}
          aria-label='language'
          size='small'
        >
          <LanguageIcon />
        </IconButton>
      </div>
    </div>
  );
};
