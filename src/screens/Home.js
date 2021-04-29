import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import DietCard from '../components/DietCard';
import {dumpData, images} from '../styles/globalStyles';

const Home = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      {/* Part 1 */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Healthy Diet</Text>
        <Text style={styles.slogan}>
          Healthy juices for everyone. Pick any of your flavor
        </Text>
      </View>
      {/* part 2 */}

      <View style={styles.mainCardContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Diet Detail', {
              ...dumpData[0],
              image: 2,
            });
          }}>
          <Image style={styles.bigImage} source={images[2]} />
          <View style={styles.textCard}>
            <Text style={styles.cardTitle}>{dumpData[0].name}</Text>
            <Text style={styles.cardDescribe}>{dumpData[0].detail}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* part 3 */}
      <View style={styles.cardContainer}>
        {/* view for image number 2  */}

        <View style={styles.smallCard}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Diet Detail', {
                ...dumpData[1],
                image: 6,
              });
            }}>
            <Image style={styles.smallImage} source={images[6]} />
            <View style={({...styles.textCard}, {...styles.textSmallCard})}>
              <Text style={styles.cardSmallTitle}>{dumpData[1].name}</Text>

              <Text style={styles.cardSmallDescribe}>{dumpData[1].name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* view for image number 3 */}

        <View style={styles.smallCard}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Diet Detail', {
                ...dumpData[2],
                image: 4,
              });
            }}>
            <Image style={styles.smallImage} source={images[4]} />
            <View style={({...styles.textCard}, {...styles.textSmallCard})}>
              <Text style={styles.cardSmallTitle}>{dumpData[2].name}</Text>

              <Text style={styles.cardSmallDescribe}>{dumpData[2].detail}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* end part 3 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#ffff',
  },
  titleContainer: {
    height: '20%',
  },
  mainCardContainer: {
    height: '40%',
  },
  cardContainer: {
    height: '40%',
    flexDirection: 'row',
  },
  title: {
    // color: '#AE2E85',
    color: '#313131',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slogan: {
    color: '#676767',
    fontSize: 18,
  },
  bigImage: {
    width: '100%',
    height: 190,
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  smallImage: {
    width: '100%',
    height: 150,
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textCard: {
    width: '70%',
    marginTop: 20,
    alignSelf: 'center',
  },

  cardTitle: {
    color: '#313131',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  cardDescribe: {
    color: '#676767',
    fontSize: 16,
    textAlign: 'center',
  },
  cardSmallTitle: {
    color: '#313131',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  cardSmallDescribe: {
    color: '#676767',
    fontSize: 14,
    textAlign: 'center',
  },
  textSmallCard: {
    width: '100%',
    marginTop: 10,
  },
  smallCard: {
    flex: 1,
    height: 50,
  },
});

export default Home;
