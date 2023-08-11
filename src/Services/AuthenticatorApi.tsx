// import {appApi} from '@/Config/ApiConfig';

import { appApi } from "@/Config/ApiConfig";

export const signInApi = async (email: string, password: string) => {
  // return appApi.post('auth/buyers/sign-in', { email, password });
  console.log('appApi', appApi.post)
  console.log('res', await appApi.post('/auth/login', { email, password }))
  return await appApi.post('/auth/login', { email, password });
};
// export const checkAccessTokenApi = (accessToken: string) => {
//   appApi.setHeaders({
//     Authorization: `Bearer ${accessToken}`,
//   });
//   return appApi.post('/auth/check-token');
// };
export const checkAccessTokenApi = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('/auth/check-token');
};
export const refreshAccToken = async (refreshToken: string) => {
  return appApi.post('/auth/refreshtoken', { refreshToken }
  );
};
export const sendCodeToEmailAPI = async (email: string) => {
  return appApi.post('/account/sendCodeCofirm', { email }
  );
};
export const verifyEmailAPI = async (code: string) => {
  return appApi.post('/account/confirmEmail', { code }
  );
};
export const senCodeGetPassToEmailAPI = async (email: string) => {
  return appApi.post('/account/getCodePassword', { email }
  );
};
export const sendPassToEmailAPI = async (codePassword: string) => {
  return appApi.post('/account/forgotPassword', { codePassword }
  );
};
// take accessToken
export const signOutApi = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('/auth/sign-out');
};
export const signUpApi = (
  fullName: string,
  phoneNumber: string,
  email: string,
  password: string,
  birthYear: number,
  workUnit: string,
  isConfirmed: boolean,
  codePassword: string,
  qrCode: string

) => {
  return appApi.post('/account/user', {
    fullName,
    phoneNumber,
    email,
    password,
    birthYear,
    workUnit,
    isConfirmed,
    codePassword,
    qrCode

  });
};
export const updateInfoUser = (name: string, phoneNumber: string) => {
  return appApi.put('auth/buyers/sign-in', { name, phoneNumber });
};

//put khi muon update, sua chua
