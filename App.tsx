import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppRoutes from './src/routes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screen}>
      <AppRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default App;
