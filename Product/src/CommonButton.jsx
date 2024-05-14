import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
const CommonButton = ({title}) => {
  return (
    <TouchableOpacity style={Styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton
