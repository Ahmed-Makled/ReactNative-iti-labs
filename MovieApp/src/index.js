// eslint-disable-next-line prettier/prettier
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styles from './styles';
import { SearchScreen } from './screens';
import { MovieList } from './components';


export default app = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <SearchScreen />

      {/* <MovieList /> */}
    </SafeAreaView>
  );
};
