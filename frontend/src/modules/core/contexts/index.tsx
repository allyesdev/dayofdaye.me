import { Provider as JotaiProvider } from 'jotai';
import { SnackbarProvider } from './SnackbarProvider';
import { ThemeProvider } from './ThemeProvider';

const Providers = ({ children }: any) => (
  <ThemeProvider>
    <SnackbarProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

export default Providers;
