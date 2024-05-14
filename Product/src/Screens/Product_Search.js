import React, {useEffect, useState} from 'react';
import {Button, FlatList, ScrollView, TextInput, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Card, Text} from 'react-native-paper';
import Styles from '../Styles';

const Product_Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = () => {
    if (searchQuery !== '') {
      let filePath = 'https://dummyjson.com/products/search?q=' + searchQuery;
      fetch(filePath)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(d => {
          setData(d.products);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }
  };

  const MyComponent = ({data}) => (
    <Card style={Styles.card}> 
      <Card.Cover source={{uri: data.thumbnail}} />
      <Card.Content>
        <Text variant="titleLarge">Title: {data.title}</Text>
        <Text variant="bodyMedium">Desciption: {data.description}</Text>
        <Text variant="bodyMedium">Price: ${data.price}</Text>
        <Text variant="bodyMedium">
          Discount: {data.discountPercentage}%
        </Text>
        <Text variant="bodyMedium">Rating: {data.rating} stars</Text>
        <Text variant="bodyMedium">Stock: {data.stock}</Text>
        <Text variant="bodyMedium">Brand: {data.brand}</Text>
        <Text variant="bodyMedium">Category: {data.category}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={Styles.container}>
        <TextInput placeholder="key search" onChangeText={setSearchQuery} />
        <Button title="search" onPress={handleSearch} />
        <FlatList
          data={data}
          renderItem={({item}) => <MyComponent data={item} />}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

export default Product_Search;
