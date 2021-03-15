// @flow
import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

import GeneralStatusBarColor from '../components/StatusBar/GeneralStatusBarColor';

const stores = [
  {
    name: 'NeoStore1',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NeoStore2',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NeoStore3',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NeoStore4',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NeoStore5',
    address: 'Rabale, Navi Mumbai, MH',
  },
];
export default StoreLocator = (props) => {
  const navProps = {
    title: 'Store Locator',
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
    },
  };
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={{flexGrow: 1}}>
        {/* NAVIGATION BAR */}
        <NavigationBar {...navProps} />
        {/* list */}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.productList}
          data={tables}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.row}>
              <Image
                style={styles.thumbnail}
                source={require('../../assets/images/banners/banner_image_one.jpg')}
              />
              <View style={styles.prductInfoContainer}>
                <Text style={styles.productName}>
                  Stylish Modern Dining Tables
                </Text>
                <Text style={styles.productDec}>Aron Table Center</Text>
                <View style={styles.priceNRatingContainer}>
                  <Text style={styles.price}> Rs 27,390</Text>
                  <View style={styles.rating}>
                    {/* <StarRating
                      disabled={false}
                      // emptyStar={'ios-star-outline'}
                      // fullStar={'ios-star'}
                      // halfStar={'ios-star-half'}
                      // iconSet={'Ionicons'}
                      maxStars={7}
                      // rating={this.state.starCount}
                      // selectedStar={(rating) => this.onStarRatingPress(rating)}
                      fullStarColor={'red'}
                    /> */}
                  </View>
                </View>
              </View>
              {/* <Text>{item.title}</Text> */}

              {/* <TouchableOpacity>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'stretch',
                    borderRadius: 2,
                  }}
                  source={item.thumbnail}
                />
              </TouchableOpacity> */}
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexGrow: 1},
  productList: {flex: 1},
  row: {
    flexDirection: 'row',
  },
  thumbnail: {
    marginLeft: 18,
    marginTop: 20,
    height: 90,
    width: 100,
  },
  prductInfoContainer: {
    marginTop: 22,
    marginLeft: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDec: {marginTop: 6, fontSize: 14, color: 'gray'},
  priceNRatingContainer: {
    marginTop: 10,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28,
  },
  rating: {
    marginLeft: 20,
    width: 120,
    // fontSize: 28,
    // height: 5,
  },
});
