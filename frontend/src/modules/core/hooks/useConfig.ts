import { useQuery } from '@tanstack/react-query';
import { queryClient } from './queryClient';

export const defaultBuildConfig = {
  MODE: 'development',
  BASE_URL: '/',
  PROD: false,
  DEV: true,
  SSR: false,

  VITE_DEFAULT_BASE: '/api/v1',

  IS_DEV: false,
};

// eslint-disable-next-line import/no-mutable-exports
export let BuildConfig = (() => {
  const buildConfig: typeof defaultBuildConfig & { [key: string]: any } = {
    ...defaultBuildConfig,
  };

  const setBuildConfig = (config: any) => {
    Object.keys(config).forEach((key) => {
      buildConfig[key] = config[key];
    });
  };

  return {
    ...buildConfig,
    setBuildConfig,
  };
})();

if ('env' in import.meta) {
  BuildConfig = {
    ...BuildConfig,
    ...(import.meta as any).env,
  };
}

BuildConfig.IS_DEV =
  BuildConfig.MODE === 'development' ||
  BuildConfig.MODE === 'develop' ||
  BuildConfig.MODE === 'localDev';

/** custom-config에도 동일한 값이 있어야 환경변수로 설정할 수 있음 */
export const defaultCustomConfig = {
  DEFAULT_MODEL: 'gpt-4o',
  LOGIN_TYPE: 'basic',

  OKTA_ISSUER: 'https://skcc.okta.com',
  OKTA_CLIENT_ID: '0oae1d4o6bJ2vAqtM5d7',
};

export const useCustomConfig = () => {
  const fetchCustomConfig = () =>
    fetch(`${BuildConfig.BASE_URL}custom-config.json`).then(
      async (response) => {
        try {
          return await response.json();
        } catch (error) {
          console.error(`Failed to fetch custom config\r\n${error}`);
        }
      }
    );

  const configQuery = useQuery(
    {
      queryKey: ['config', 'custom'],
      queryFn: fetchCustomConfig,
      refetchOnReconnect: false,
      refetchOnMount: false,
      enabled: false,
      initialData: () => defaultCustomConfig,
      select: (data: any) => {
        const config: any = {
          ...defaultCustomConfig,
        };

        Object.keys(defaultCustomConfig).forEach((key) => {
          config[key] = data[key] ?? config[key];
        });

        return config;
      },
    },
    queryClient
  );

  return configQuery;
};
