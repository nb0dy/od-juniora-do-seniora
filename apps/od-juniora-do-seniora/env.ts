declare global {
  type TConfig = {
    appUrl: string;
  };

  const config: TConfig;
}

export const getEnv = () => ({
  appUrl: process.env.NX_APP_URL || config.appUrl || '',
});
