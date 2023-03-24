import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import FlatListComp from './components/FlatListComp';
import SectionListComp from './components/SectionListComp';
import { getDatabase, ref, update, set, push } from 'firebase/database';
import app from './firebase-config.js';




export default function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const addFood = () => {
    setLoading(true);
    const db = getDatabase(app);
    const dbRef = ref(db, 'fastfood');

    const newItemRef = push(dbRef);
    set(newItemRef, {
      key: 2,
      title: title,
      price: price,
      description: description,
    });

    setLoading(false);
  };

  const handleUpdateItem = (id) => {
    const db = getDatabase();
    const itemRef = ref(db, `fastfood/${id}`);
    const updates = {
      price: parseFloat(price),
      description: description
    };
    update(itemRef, updates)
      .then(() => console.log('Item updated'))
      .catch(error => console.error(error));
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.10 }}>
      </View>
      <View style={{ flex: 0.50 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: 'black', textAlign: "center" }}>Add new Food</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Title</Text>
        <TextInput onChangeText={text => setTitle(text)} style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 7 }} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Price</Text>
        <TextInput onChangeText={text => setPrice(text)} style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 7 }} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Description</Text>
        <TextInput onChangeText={text => setDescription(text)} style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 7 }} />
        {loading ? <Text>Loading...</Text> : null}
        <Button onPress={addFood} title="Add" />

      </View>
      <View style={{ flex: 0.40 }}>
        <FlatListComp />
      </View>

    </View>
    // <Component />
    // <SectionListComp />
  );
}
