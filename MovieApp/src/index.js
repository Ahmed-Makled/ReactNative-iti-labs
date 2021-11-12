// eslint-disable-next-line prettier/prettier
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, presistor } from './store';
import AppContainer from './navigation';
import styles from './styles';




export default app = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={presistor}>
        <SafeAreaView
          style={styles.main}>
          <StatusBar barStyle={'light-content'} />
          <AppContainer />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
