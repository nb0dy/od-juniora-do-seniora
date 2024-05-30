import { useDevices } from '@od-juniora-do-seniora/device/data-access-device';

export const useData = () => {
  const { data, isLoading, isError } = useDevices();
  const { data: data2, isLoading: isLoading2, isError: isError2 } = useDevices();

  return {
    data: {
      devices: data,
      rooms: data2,
    },
    isLoading: isLoading || isLoading2,
    isError: isError || isError2,
  };
};
