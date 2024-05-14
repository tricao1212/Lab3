import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Products from './Screens/Products';
import AddProduct from './Screens/AddProduct';
import Product_Search from './Screens/Product_Search';
import Product_Details from './Screens/Product_Details';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { MyStack } from './MyStack';

const BottomNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'products',
      title: 'Products',
      focusedIcon: 'package-variant',
    },
    {key: 'add', title: 'Add Product', focusedIcon: 'archive-plus'},
    {key: 'search', title: 'Search', focusedIcon: 'archive-search-outline'},
    {
      key: 'details',
      title: 'Details',
      focusedIcon: 'more',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: Products,
    add: AddProduct,
    search: Product_Search,
    details: Product_Details,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default BottomNav;
