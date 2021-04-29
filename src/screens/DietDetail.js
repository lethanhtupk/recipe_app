import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import ThemeContext from '../context/themeContext';
import {dumpData} from '../styles/globalStyles';
import {images} from '../styles/globalStyles';

const DietDetail = ({route, navigation}) => {
  const {name, detail, image} = route.params;
  const {mode, changeMode} = useContext(ThemeContext);
  let styles;

  mode === 'pink' ? (styles = pinkStyles) : (styles = whiteStyles);

  return (
    <View style={styles.container}>
      <View style={styles.detailPart}>
        <View style={styles.detail}>
          <Text
            style={{
              ...styles.title,
              ...styles.whiteText,
              marginBottom: 20,
            }}>
            {name}
          </Text>
          <Text
            style={{
              ...styles.textDetail,
              ...styles.whiteText,
              marginBottom: 20,
            }}>
            {detail}
          </Text>
          <Text
            style={{
              ...styles.textDetail,
              fontWeight: 'bold',
              ...styles.whiteText,
            }}>
            Vitamin C
          </Text>
          <Text
            style={{
              ...styles.textDetail,
              fontWeight: 'bold',
              ...styles.whiteText,
            }}>
            Healthy
          </Text>
          <View style={styles.rating}>
            <Icon
              name="star"
              size={32}
              color={mode === 'pink' ? '#ffff' : '#000'}
            />
            <Text style={{...styles.whiteText, ...styles.ratingScore}}>
              4.8
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={{...styles.textDetail, ...styles.whiteText}}>
              Starting from
            </Text>
            <Text
              style={{
                ...styles.whiteText,
                fontSize: 26,
                fontWeight: 'bold',
              }}>
              $20
            </Text>
            <Text style={{...styles.textDetail, ...styles.whiteText}}>
              Promotional Price
            </Text>
            <View style={styles.customButton}>
              <CustomButton
                text="Buy Now"
                buttonStyle={{
                  buttonContainer: styles.buttonContainer,
                  button: styles.button,
                }}
                onPress={() => changeMode()}
              />
            </View>
          </View>
        </View>
        <View style={styles.image}>
          <Image source={images[image]} style={styles.image} />
        </View>
      </View>
      {/* Suggestion Part */}
      <View styles={styles.suggestion}>
        <Text
          style={{
            ...styles.whiteText,
            fontWeight: 'bold',
            fontSize: 22,
            marginTop: 20,
          }}>
          Suggested Deserts
        </Text>
        <Text style={{...styles.whiteText, marginTop: 10, fontSize: 16}}>
          Here are different flavors of your favorite deserts
        </Text>
        <View style={styles.suggestionImage}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => {
              navigation.navigate('Diet Detail', {...dumpData[1], image: 5});
            }}>
            <Image style={styles.suggestionItem} source={images[5]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => {
              navigation.navigate('Diet Detail', {...dumpData[2], image: 6});
            }}>
            <Image style={styles.suggestionItem} source={images[6]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => {
              navigation.navigate('Diet Detail', {...dumpData[3], image: 7});
            }}>
            <Image style={styles.suggestionItem} source={images[7]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const pinkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8687F',
    paddingLeft: 16,
  },
  detailPart: {
    flexDirection: 'row',
  },
  detail: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 500,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#ffff',
  },
  ratingScore: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 18,
  },
  customButton: {
    width: '80%',
    marginTop: 40,
  },
  buttonContainer: {
    backgroundColor: '#ffff',
  },
  button: {
    color: '#000',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  textDetail: {
    fontSize: 20,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 20,
  },
  price: {
    marginTop: 20,
  },
  suggestion: {
    marginTop: 10,
  },
  suggestionImage: {
    flexDirection: 'row',
  },
  suggestionItem: {
    flex: 1,
    height: 100,
    resizeMode: 'contain',
  },
});

const whiteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingLeft: 16,
  },
  detailPart: {
    flexDirection: 'row',
  },
  detail: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 500,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#000',
  },
  ratingScore: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 18,
  },
  customButton: {
    width: '80%',
    marginTop: 40,
  },
  buttonContainer: {
    backgroundColor: '#B7418F',
  },
  button: {
    color: '#ffff',
  },
  title: {
    color: '#AE2E85',
    fontWeight: 'bold',
    fontSize: 32,
  },
  textDetail: {
    fontSize: 20,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 20,
  },
  price: {
    marginTop: 20,
  },
  suggestion: {
    marginTop: 10,
  },
  suggestionImage: {
    flexDirection: 'row',
  },
  suggestionItem: {
    flex: 1,
    width: undefined,
    resizeMode: 'contain',
  },
  imageButton: {
    flex: 1,
    height: 100,
  },
});

export default DietDetail;
