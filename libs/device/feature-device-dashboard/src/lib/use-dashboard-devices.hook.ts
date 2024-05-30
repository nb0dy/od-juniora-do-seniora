import { useDevices } from '@od-juniora-do-seniora/device/data-access-device';

export const useData = () => {
  const { data, isLoading, isError } = useDevices();

  return {
    data,
    isLoading,
    isError,
  };
};
