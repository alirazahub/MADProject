import React, { useEffect,useState } from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import {getDatabase,ref,onValue} from 'firebase/database';
import app from '../firebase-config.js'


const FlatListComp = () => {
  const [DATA, setDATA] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'fastfood');
    console.log('Reciving data from firebase');
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dataArr = Object.values(data);
      setDATA(dataArr);
      console.log('Data received from firebase');
    });
  },[]);
  return (
    <FlatList
      data={DATA}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginHorizontal: 3, padding: 3, backgroundColor: 'white', borderRadius: 15, marginVertical: 10 }}>
          <View style={{ flex: 0.2 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ flex: 0.50, fontSize: 20, fontWeight: "bold", color: 'yellow' }}>	&#10084;
                <Text style={{ color: 'black', fontSize: 15 }}></Text>
              </Text>
              <Text style={{ flex: 0.50, fontSize: 25, fontWeight: "bold", marginLeft: 115 }}>&#9734;</Text>
            </View>
          </View>
          <View style={{ flex: 0.6, width: 200 }}>
            <Image source={{uri:item.image}} style={{ width: 120, height: 120, alignSelf: "center" }} />
          </View>
          <View style={{ flex: 0.2 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <View style={{ flex: 0.50 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: 'black' }}>{item.title}</Text>
              </View>
              <View style={{ flex: 0.50 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: 'grey' }}>{item.price}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
      keyExtractor={item => item.key}
    />
  )
}

export default FlatListComp
