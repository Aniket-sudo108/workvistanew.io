const getEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const ENV = {
  API_BASE_URL: getEnv("REACT_APP_API_BASE_URL"),
  API_KEY: getEnv("REACT_APP_API_KEY"),
};