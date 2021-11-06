// eslint-disable-next-line prettier/prettier
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import styles from './styles';
import { SearchScreen, HeaderScreen } from './screens';

export default app = () => {
  return (
    <SafeAreaView style={styles.main}>

      <StatusBar barStyle={'light-content'} />

      <SearchScreen />




      <HeaderScreen />

    </SafeAreaView>
  );
};
