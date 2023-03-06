import React from 'react'
import { View, FlatList, Text, Image } from 'react-native'

const DATA = [
  {
    id: 1,
    title: 'Morten Lava Burger',
    rating: 5,
    price: "$10",
    image: require('../assets/icon.png')
  },
  {
    id: 2,
    title: 'Morten Lava Burger',
    rating: 5,
    price: "$10",
    image: require('../assets/icon.png')
  },
  {
    id: 3,
    title: 'Crispy Chicken Burger',
    rating: 5,
    price: "$10",
    image: require('../assets/icon.png')
  },
  {
    id: 4,
    title: 'Grilled Chicken Burger',
    rating: 5,
    price: "$10",
    image: require('../assets/icon.png')
  },
  {
    id: 5,
    title: 'Simple Burger',
    rating: 5,
    price: "$10",
    image: require('../assets/icon.png')
  },
];

const FlatListComp = () => {
  return (
    <FlatList
      data={DATA}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginHorizontal: 3, padding: 3, backgroundColor:'white',borderRadius:15,marginVertical:10}}>
          <View style={{ flex: 0.2 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ flex: 0.50, fontSize: 20, fontWeight: "bold", color: 'yellow' }}>	&#10084;
                <Text style={{ color: 'black', fontSize: 15 }}>{item.rating}</Text>
              </Text>
              <Text style={{ flex: 0.50, fontSize: 25, fontWeight: "bold", marginLeft: 115 }}>&#9734;</Text>
            </View>
          </View>
          <View style={{ flex: 0.6, width: 200 }}>
            <Image source={item.image} style={{ width: 120, height: 120, alignSelf: "center" }} />
          </View>
          <View style={{ flex: 0.2 }}>
            <View style={{ flex: 1 , alignItems:"center"}}>
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
      keyExtractor={item => item.id}
    />
  )
}

export default FlatListComp
