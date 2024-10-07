import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { queryClient, persister } from '@/modules/core/hooks';

export const QueryClientProvider = ({ children }: any) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{
      persister,
    }}
    children={children}
  />
);
