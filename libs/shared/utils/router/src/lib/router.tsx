export const routes = {
  device: {
    list: {
      url: () => '',
      path: () => '',
      search: {},
    },
    details: {
      url: (deviceId: string) => '/devices/:id'.replace(':id', deviceId),
      path: () => '/devices/:id',
      search: {},
    },
  },
};
