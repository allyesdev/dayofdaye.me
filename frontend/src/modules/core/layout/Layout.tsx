import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { LayoutContextProvider } from '../contexts/LayoutProvider';
import { GNB } from './GNB';

interface Props {
  children?: any;
}

const LayoutInContext = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

const Layout = ({ children }: Props) => (
  <LayoutContextProvider>
    <LayoutInContext>
      <GNB />
      {children || <Outlet />}
    </LayoutInContext>
  </LayoutContextProvider>
);

export { Layout };
