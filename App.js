import React,{useState} from 'react';
import { TouchableOpacity, View, Text, Button, FlatList } from 'react-native';
import FlatListComp from './components/FlatListComp';
import SectionListComp from './components/SectionListComp';
import useGetApi from './customHooks/GetApiCustomHook';
import usePostApi from './customHooks/PostApiCustomHook';

export default function App() {
  const { data: getData, error: getError, loading: getLoading } = useGetApi('https://dummyjson.com/products');
  const { data: postResponse, error: postError, loading: postLoading, postRequest } = usePostApi('https://dummyjson.com/products/add');
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const handlePost = () => {
    postRequest({
      title,
      description,
      price,
      stock,
      brand,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.10 }}>

      </View>
      <View style={{ flex: 0.50 }}>
        <Text>Post Data</Text>
        <Text>Title</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <Text>Description</Text>
        <TextInput

style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setDescription(text)}
          value={description}
          />
        <Text>Price</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setPrice(text)}
          value={price}
        />
        <Text>Stock</Text>
        <TextInput

          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setStock(text)}
          value={stock}
        />
        <Text>Brand</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setBrand(text)}
          value={brand}
        />
        <Button
          onPress={handlePost}
          title="Post Data"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
        {postLoading && <Text>Posting data...</Text>}
        {postError && <Text>Error posting data: {postError.message}</Text>}
        {postResponse && <Text>Post response: {JSON.stringify(postResponse)}</Text>}
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
