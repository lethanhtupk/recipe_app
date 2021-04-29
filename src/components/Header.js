import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({mode, changeMode}) => {
  let styles;
  let cartColor;
  mode === 'pink' ? (styles = pinkStyles) : (styles = whiteStyles);
  mode === 'pink' ? (cartColor = 'white') : (cartColor = 'black');

  return (
    <View style={styles.container}>
      <Icon
        name="shopping-cart"
        size={32}
        color={cartColor}
        onPress={() => changeMode()}
      />
    </View>
  );
};

const pinkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F8687F',
    width: '100%',
    height: 28,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const whiteStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width: '100%',
    height: 28,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
