import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import * as React from 'react'

import StackNavigation from './app/navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigation />
    </SafeAreaView>
  )
}

export default App;
