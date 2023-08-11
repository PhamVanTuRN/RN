import React from 'react';
import AppNavigation from '@/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from '@/redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
