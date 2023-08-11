import { StatusLoading } from '@/Constants';
import { store } from '@/redux/Store';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AuthState = {
  fullName: string,
  phoneNumber: string,
  birthYear: number,
  email: string;
  isConfirmed: boolean,
  accessToken: string;
  refreshToken: string;
  qrCode: string;
  statusLoginRequest: StatusLoading;
  messageErrorLogIn: string;
};
