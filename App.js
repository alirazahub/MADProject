import React from 'react';
import { TouchableOpacity, View, Text, Button, FlatList } from 'react-native';
import FlatListComp from './components/FlatListComp';
import SectionListComp from './components/SectionListComp';
import useGetApi from './customHooks/GetApiCustomHook';
import usePostApi from './customHooks/PostApiCustomHook';

export default function App() {
  const { data: getData, error: getError, loading: getLoading } = useGetApi('https://dummyjson.com/products');
  const { data: postResponse, error: postError, loading: postLoading, postRequest } = usePostApi('https://dummyjson.com/products/add');

  const handlePost = () => {
    postRequest({
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      stock: 94,
      brand: "Apple",
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.10 }}>

      </View>
      <View style={{ flex: 0.50 }}>
        {/* <FlatListComp /> */}
        {postLoading && <Text>Posting data...</Text>}
        {postError && <Text>Error posting data: {postError.message}</Text>}
        {postResponse && <Text>Post response: {JSON.stringify(postResponse)}</Text>}
        <Button
          onPress={handlePost}
          title="Post Data"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={{ flex: 0.40 }}>
        {
          <FlatList
            data={getData && getData.products}
            renderItem={({ item }) => <View>
              <Text>{item.title}</Text>
            </View>}
            keyExtractor={item => item.id}
          />
        }
      </View>

    </View>
    // <Component />
    // <SectionListComp />
  );
}
