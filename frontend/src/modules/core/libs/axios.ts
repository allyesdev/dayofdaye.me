import axios from 'axios';
import { BuildConfig } from '@/modules/core/hooks/useConfig';

export const axiosInstance = axios.create({
  baseURL: BuildConfig.VITE_DEFAULT_BASE,
  headers: {
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
    patch: { 'Content-Type': 'application/json' },
    delete: { 'Content-Type': 'application/json' },
  },
});
