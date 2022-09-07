import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles';
const Header = () => {
  return (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>My Todo List</Text>
        </View>
      );
  
}

export default Header