import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="menu" size={32} />
      <Icon name="more-vert" size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 8,
  },
});

export default DrawerHeader;
