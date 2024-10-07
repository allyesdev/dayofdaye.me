import AppRoutes from '@/routers/AppRoutes';
import Providers from '@/modules/core/contexts';
import { useAxiosInterceptor } from '@/modules/core/hooks';

import '@/styles/index.scss';

const App = () => {
  useAxiosInterceptor();
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};

export default App;
