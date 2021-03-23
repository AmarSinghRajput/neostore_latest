// @flow
import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import StarRating from 'react-native-star-rating';
import GeneralStatusBarColor from '../components/StatusBar/GeneralStatusBarColor';
import {useDispatch, useSelector} from 'react-redux';
import {clearProductListing} from '../Redux/Actions/ProductListingAction';
import StoreLocator from './StoreLocator';

export default ProductsList = (props) => {
  const dispatch = useDispatch();
  const listingData =
    useSelector((state) => state.productListingReducer.productListingData) !=
    null
      ? useSelector((state) => state.productListingReducer.productListingData)
      : null;

  useEffect(() => {
    if (listingData.length == 0) {
      props.navigation.goBack();
    }
  }, [listingData]);

  const navProps = {
    title: props.title,
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      dispatch(clearProductListing());
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
      console.log('listing data ', listingData);
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
          extraData={listingData}
          showsVerticalScrollIndicator={false}
          style={styles.productList}
          data={listingData}
          keyExtractor={(item, index) => index}
          renderItem={(item) => {
            console.log('checking listing data', listingData[0]['name']);
            console.log('checking--> ', item.item.name);
            return (
              <TouchableOpacity style={styles.row}>
                <Image
                  style={styles.thumbnail}
                  source={{uri: item.item.product_images}}
                />
                <View style={styles.prductInfoContainer}>
                  <Text style={styles.productName}>{item.item.name}</Text>
                  <Text style={styles.productDec}>{item.item.description}</Text>
                  <View style={styles.priceNRatingContainer}>
                    <Text style={styles.price}>{item.item.cost}</Text>
                    <View style={styles.rating}></View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
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
    height: ScreenDimention.Height * 0.12,
    width: ScreenDimention.Height * 0.12,
  },
  prductInfoContainer: {
    marginTop: 22,
    marginLeft: 8,
  },
  productName: {
    fontSize: 15,
    color: 'black',
  },
  productDec: {
    marginTop: 6,
    fontSize: 14,
    color: 'gray',
    height: 14,
    width: ScreenDimention.Width * 0.5,
  },
  priceNRatingContainer: {
    marginTop: 10,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: 'red',
    // fontWeight: 'bold',
    fontSize: 20,
  },
  rating: {
    marginLeft: 20,
    width: 120,
  },
});
