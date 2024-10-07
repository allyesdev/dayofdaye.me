import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@/modules/core/contexts/QueryClientProvider';
import { i18nInitialize } from '@/modules/i18n/config';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as any);
const renderApp = () => {
  i18nInitialize();
  root.render(
    <QueryClientProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

renderApp();
