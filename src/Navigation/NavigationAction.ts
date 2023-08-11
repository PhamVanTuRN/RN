import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();
export const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};
export const resetScreen = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: name,
          params: params,
        },
      ],
    });
  }
};
export const onGoBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
