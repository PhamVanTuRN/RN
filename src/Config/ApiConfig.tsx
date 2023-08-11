import { create } from 'apisauce';
import appConfig from './AppConfig';
const apiConfig = {
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    // 'x-api-key': appConfig.X_API_KEY,
    language: appConfig.LANGUAGE,
    // 'build-app-version': AppConfig.VERSION_CODE,
    // timezone: new Date().getTimezoneOffset(),
  },
  timeOut: 20000,
};
const appApi = create(apiConfig);
export { appApi, apiConfig };
