import { KeyAsyncStorages, StatusRequest } from '@/Constants';
import {
  getDataStorage,
  removeDataStorage,
  saveDataToStorage,
} from '@/Functions/AsyncStorageFunction';
import {
  checkAccessTokenApi,
  refreshAccToken,
  senCodeGetPassToEmailAPI,
  sendCodeToEmailAPI,
  sendPassToEmailAPI,
  signInApi,
  signOutApi,
  verifyEmailAPI,
} from '@/Services/AuthenticatorApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StatusLoading } from '@/Constants';
import { AuthState, RootState } from '@/Types/redux';
import { resetScreen } from '@/Navigation/NavigationAction';
import { Alert } from 'react-native';
export const checkLogIn = createAsyncThunk(
  // cho phep truyen vao 1 TypeAcction ""
  'AuthReducers/checkLogIn', // typeAcction /FuntionAcction (truyen 1 object chua ca email va password)
  async (payload: any, { rejectWithValue }) => {
    const response: any = await signInApi(payload.email, payload.password);
    const { data, status, ok } = response;
    console.log('data', data);
    if (ok && status === StatusRequest.POST) {

      return data;
    } else {
      console.log("error", data
      )
      return rejectWithValue(data);
    }
  },
);
const functionCallback = (error?: Error) => {
  if (error) {
  } else {
    resetScreen('AuthStack');
  }
};
export const checkLogOut = createAsyncThunk(
  'AuthReducers/checkLogOut',
  // truyen vao 1 function, khong phai goi 1 function
  async (_: void, { getState, rejectWithValue }: any) => {

    const state = getState() as RootState;
    const { accessToken } = state.authReducer;
    removeDataStorage(KeyAsyncStorages.AccessToken, functionCallback);
    const response: any = await signOutApi(accessToken); // call ApiCheckAccessToken
    const { data, status, ok } = response;
    if (ok && status === StatusRequest.POST) {
      // check Api successfully or not successfully
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);
export const checkAutoLogIn = createAsyncThunk(
  'AuthReducers/checkAutoLogIn',
  async () => {
    const accessToken = await getDataStorage(
      KeyAsyncStorages.AccessToken,
      true,
    );
    const user = await getDataStorage(KeyAsyncStorages.User, true); // get user token from storage
    if (accessToken === null) {
      // check access token = null (no token) to navigate to LogInScreen
      resetScreen('AuthStack');
    } else {
      // if access token !== null
      const response: any = await checkAccessTokenApi(accessToken); // call ApiCheckAccessToken
      const { data, status, ok } = response;
      if (ok && status === StatusRequest.POST) {
        // check Api successfully or not successfully
        if (data.isValid) {
          // check isValid response (true)
          resetScreen('HomeStack');
          return user;
        } else {
          console.log('vao AuthStack');
          // check isValid response (false)
          resetScreen('AuthStack');
        }
      } else {
        // check api fail
        console.log('that bai vao AuthStack');
        resetScreen('AuthStack');
      }
    }
  },
);

export const refreshAccessToken = createAsyncThunk(
  // cho phep truyen vao 1 TypeAcction ""
  'AuthReducers/refreshAccessToken', // typeAcction /FuntionAcction (truyen 1 object chua ca email va password)
  async (payload: any, { rejectWithValue }) => {
    console.log('da vao refreshAccessToken');

    const response: any = await refreshAccToken(payload.refreshToken);
    const { data, status, ok } = response;

    console.log('data refreshAccessToken', data);
    if (ok && status === StatusRequest.POST) {
      console.log("ok, status refreshAccessToken", ok, status)

      return data;
    } else {
      console.log("error refreshAccessToken", data
      )
      return rejectWithValue(data);
    }
  },
);
export const sendCodeToEmail = createAsyncThunk(
  // cho phep truyen vao 1 TypeAcction ""
  'AuthReducers/sendCodeToEmail', // typeAcction /FuntionAcction (truyen 1 object chua ca email va password)
  async (payload: any, { rejectWithValue }) => {
    console.log('da vao sendCodeToEmail', payload);

    const response: any = await sendCodeToEmailAPI(payload.email);
    const { data, status, ok } = response;

    console.log('data sendCodeToEmail', response);
    if (ok && status === StatusRequest.POST) {
      console.log("ok, status refreshAccessToken", ok, status)

      return data;
    } else {
      console.log("error refreshAccessToken", data
      )
      return rejectWithValue(data);
    }
  },
);
export const verifyEmail = createAsyncThunk(
  // cho phep truyen vao 1 TypeAcction ""
  'AuthReducers/verifyEmail', // typeAcction /FuntionAcction (truyen 1 object chua ca email va password)
  async (payload: any, { rejectWithValue }) => {
    console.log('da vao sendCodeToEmail', payload);

    const response: any = await verifyEmailAPI(payload.code);
    const { data, status, ok } = response;
    console.log('data sendCodeToEmail', response);
    if (ok && status === 201) {
      console.log("ok, status refreshAccessToken", ok, status)
      return data;
    } else {
      Alert.alert('Mã xác nhận không đúng', data.message)
      return rejectWithValue(data);
    }
  },
);
export const sendCodeGetPassToEmail = createAsyncThunk(
  // cho phep truyen vao 1 TypeAcction ""
  'AuthReducers/sendCodeGetPassToEmail', // typeAcction /FuntionAcction (truyen 1 object chua ca email va password)
  async (payload: any, { rejectWithValue }) => {
    const response: any = await senCodeGetPassToEmailAPI(payload);
    const { data, status, ok } = response;
    console.log('response sendPass', response)
    if (ok && status === 201) {
      console.log("ok, status sendPassToEmailAPI", ok, status)
      // resetScreen('AuthStack');
      return Alert.alert('Đã gửi code lấy lại mật khẩu thành công vào email');
    } else {
      console.log("error refreshAccessToken", data
      )
      return rejectWithValue(data);
    }
  },
);
export const sendPassToEmail = createAsyncThunk(
  // cho phep truyen vao 1 TypeAcction ""
  'AuthReducers/sendPassToEmail', // typeAcction /FuntionAcction (truyen 1 object chua ca email va password)
  async (payload: any, { rejectWithValue }) => {
    const response: any = await sendPassToEmailAPI(payload);
    const { data, status, ok } = response;
    console.log('response sendPass', response)
    if (ok && status === 201) {
      console.log("ok, status sendPassToEmailAPI", ok, status)
      resetScreen('AuthStack');
      return Alert.alert('Đã gửi code lấy lại mật khẩu thành công vào email');
    } else {
      console.log("error refreshAccessToken", data
      )
      return rejectWithValue(data);
    }
  },
);
const initialState: AuthState = {
  email: '',
  accessToken: '',
  refreshToken: '',
  qrCode: '',
  statusLoginRequest: StatusLoading.None,
  messageErrorLogIn: '',
  fullName: '',
  phoneNumber: '',
  birthYear: 0,
  isConfirmed: false,
};
export const unitSlice = createSlice({
  name: 'AuthReducers',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken1;
    },
  },
  extraReducers(builder: any) {
    builder.addCase(checkLogIn.pending, (currentState: AuthState) => {
      currentState.messageErrorLogIn = '';
      currentState.statusLoginRequest = StatusLoading.Loading;
      console.log('loading');
    });

    builder.addCase(checkLogIn.fulfilled, (currentState: any, action: any) => {
      currentState.statusLoginRequest = StatusLoading.Successful;
      saveDataToStorage(
        action.payload.accessToken,
        KeyAsyncStorages.AccessToken,
      );
      saveDataToStorage(
        action.payload.accessToken,
        KeyAsyncStorages.AccessToken,
      );
      saveDataToStorage(
        action.payload.refreshToken,
        KeyAsyncStorages.RefreshToken,
      );
      saveDataToStorage(action.payload.email, KeyAsyncStorages.Email);
      currentState.accessToken = action.payload.accessToken;
      currentState.email = action.payload.email;
      currentState.refreshToken = action.payload.refreshToken;
      currentState.qrCode = action.payload.qrCode
      console.log('email khi dang nhap thanh cong', action.payload.email)
      // khi luu user vao storage, la da chuyen user tu Json sang String roi
      // chuyen user tu Json sang string, luu vao redux cho trung string khi lay user tu getDataStorage
      const userJson = action.payload.user;
      currentState.user = JSON.stringify(userJson);
    });
    builder.addCase(checkLogIn.rejected, (currentState: any, action: any) => {
      currentState.messageErrorLogIn = action.payload.message;
      currentState.statusLoginRequest = StatusLoading.Fail;
    });
    builder.addCase(
      checkAutoLogIn.fulfilled,
      (currentState: any, action: any) => {
        currentState.user = action.payload;
      },
    );
    builder.addCase(checkLogOut.fulfilled, (currentState: any) => {
      currentState.statusLoginRequest = StatusLoading.None;
      removeDataStorage(KeyAsyncStorages.AccessToken, functionCallback);
    });
    //

    builder.addCase(verifyEmail.fulfilled, (currentState: any, action: any) => {
      console.log(' action.payload verifyEmail', action.payload)
      currentState.qrCode = action.payload
      currentState.isConfirmed = true
    });


  },
});
export const { setAccessToken } = unitSlice.actions;
// Action creators are generated for each case reducer function
export default unitSlice.reducer;

//
