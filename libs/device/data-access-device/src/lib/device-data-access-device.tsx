import { useQuery } from '@tanstack/react-query';

export const useDevices = () => {
  return useQuery({ queryKey: ['device-list'], queryFn: Promise.resolve });
};
