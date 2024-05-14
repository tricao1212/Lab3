import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from '../Styles';
import {Button, Card, Text} from 'react-native-paper';

const Product_Details = ({navigation, route}) => {
  const id = route.params;
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const filePath = 'https://dummyjson.com/products/' + id;

  useEffect(() => {
    fetch(filePath)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(d => {
        setData(d);
        setIsFetch(true);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  },[]);

  const MyComponent = ({data}) => (
    <Card style={Styles.card}>
      <Card.Cover source={{uri: data.thumbnail}} />
      <Card.Content>
        <Text variant="titleLarge">Title: {data.title}</Text>
        <Text variant="bodyMedium">Desciption: {data.description}</Text>
        <Text variant="bodyMedium">Price: ${data.price}</Text>
        <Text variant="bodyMedium">Discount: {data.discountPercentage}%</Text>
        <Text variant="bodyMedium">Rating: {data.rating} stars</Text>
        <Text variant="bodyMedium">Stock: {data.stock}</Text>
        <Text variant="bodyMedium">Brand: {data.brand}</Text>
        <Text variant="bodyMedium">Category: {data.category}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Delete</Button>
        <Button onPress={() => navigation.goBack()}>Cancel</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView style={Styles.container}>
      {isFetch ? <MyComponent data={data} /> : <Text>Loading</Text>}
    </SafeAreaView>
  );
};

export default Product_Details;
