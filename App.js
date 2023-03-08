import React from 'react';
import { View } from 'react-native';
import FlatListComp from './components/FlatListComp';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.30 }}></View>
      <View style={{ flex: 0.40 }}>
        <FlatListComp />
      </View>
      <View style={{ flex: 0.30 }}></View>

    </View>
  );
}
