import { useCallback, useMemo, useState } from 'react';
import { LayoutContext } from './LayoutContext';

export const LayoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobileDrawerOpened, setIsMobileDrawerOpened] = useState(false);

  const openMobileDrawer = useCallback(() => {
    setIsMobileDrawerOpened(true);
  }, []);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileDrawerOpened(false);
  }, []);

  const value = useMemo(
    () => ({ isMobileDrawerOpened, openMobileDrawer, closeMobileDrawer }),
    [closeMobileDrawer, isMobileDrawerOpened, openMobileDrawer]
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
