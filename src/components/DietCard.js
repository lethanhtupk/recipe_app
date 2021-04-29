import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DietCard = ({col, imageUrl}) => {
  return (
    <View>
      <Image source={require(imageUrl)} />
      <Text style={styles.title}>Blue Berry Nights</Text>
      <Text>Frozen Blueberries, Banana and Raspberry juice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  describe: {
    color: '#676767',
    fontSize: 12,
  },
});

export default DietCard;
