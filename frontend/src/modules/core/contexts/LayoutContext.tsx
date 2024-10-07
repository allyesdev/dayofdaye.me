import React from 'react';

interface LayoutContextProps {
  isMobileDrawerOpened: boolean;
  openMobileDrawer: () => void;
  closeMobileDrawer: () => void;
}

export const LayoutContext = React.createContext<LayoutContextProps>({
  isMobileDrawerOpened: false,
  openMobileDrawer: () => {},
  closeMobileDrawer: () => {},
});
