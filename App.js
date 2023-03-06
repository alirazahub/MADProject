import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import image from './assets/icon.png'

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.30 }}>
        <Image source={image} style={styles.image} />
        <Text style={styles.loginText}>Login Here</Text>
      </View>
      <View style={{ flex: 0.50, marginTop: 100 }}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />

      </View>
      <View style={{ flex: 0.20 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    padding: 10,

  }
});
