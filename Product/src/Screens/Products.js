import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from '../Styles';
import CommonButton from '../CommonButton';

const Products = ({navigation}) => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  const handleDetail = id => {
    navigation.navigate('Product_Details', id);
  };
  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const Item = ({data}) => (
    <View style={Styles.block}>
      <View style={Styles.img}>
        <Image style={Styles.tiny} source={{uri: data.thumbnail}} />
      </View>
      <View style={Styles.content}>
        <Text style={Styles.title}>Title: {data.title}</Text>
        <Text>Desciption: {data.description}</Text>
        <Text>Price: {data.price}$</Text>
        <Text style={Styles.discount}>
          Discount: {data.discountPercentage} off
        </Text>
        <Text>Rating: {data.rating}*</Text>
        <Text>Stock: {data.stock}</Text>
        <Text>Brand: {data.brand}</Text>
        <Text>Category: {data.category}</Text>
        <View style={Styles.buttonGroup}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21A2F5',
              width: 70,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}
            onPress={() => handleDetail(data.id)}>
            <Text>Details</Text>
          </TouchableOpacity>
          <CommonButton title="Add" />
          <CommonButton title="Delete" />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;
