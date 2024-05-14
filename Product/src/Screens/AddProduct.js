import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from '../Styles';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discount: discount,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    }).then(response => {
      response.json();
    });
    Alert.alert('Add successfull');
  };

  return (
    <SafeAreaView style={Styles.addContainer}>
      <ScrollView>
        <Text>Title</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter title"
          onChangeText={setTitle}></TextInput>
        <Text>Desciption</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter description"
          onChangeText={setDescription}></TextInput>
        <Text>Price</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter price"
          onChangeText={setPrice}></TextInput>
        <Text>Discount Percentage</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter discount percentage"
          onChangeText={setDiscount}></TextInput>
        <Text>Rating</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter rating"
          onChangeText={setRating}></TextInput>
        <Text>Stock</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter stock"
          onChangeText={setStock}></TextInput>
        <Text>Brand</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter brand"
          onChangeText={setBrand}></TextInput>
        <Text>Category</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter category"
          onChangeText={setCategory}></TextInput>
        <Text>Images</Text>
        <TextInput
          style={Styles.inputField}
          placeholder="Enter images URL(s)"
          onChangeText={setImages}></TextInput>
        <TouchableOpacity style={Styles.submitButton} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProduct;
