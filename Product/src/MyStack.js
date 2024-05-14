import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Screens/Products';
import Product_Details from './Screens/Product_Details';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product_Details" component={Product_Details} />
    </Stack.Navigator>
  );
};
