import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

// TANSTACK QUERY
export const queryClient = new QueryClient();
export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
