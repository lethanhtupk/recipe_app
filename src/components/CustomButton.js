import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({text, buttonStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.buttonContainer, ...buttonStyle.buttonContainer}}>
      <Text style={{...styles.button, ...buttonStyle.button}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,

    borderRadius: 30,
  },
  button: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
