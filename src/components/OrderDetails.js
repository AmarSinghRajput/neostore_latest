import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import {SwipeListView} from 'react-native-swipe-list-view';
import ModalDropdown from 'react-native-modal-dropdown';

export default OrderDetails = (props) => {
  const navProps = {
    title: `Order ID: ${props.orderId}`,
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
    },
  };

  const products = [
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'table',
      name: 'Pembroke',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'chair',
      name: 'Adinrondak',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'sofa',
      name: 'Chesterfield',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'sofa',
      name: 'Pembroke',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'sofa',
      name: 'Adinrondak',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'sofa',
      name: 'Chesterfield',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'sofa',
      name: 'Chesterfield',
      qty: 1,
      price: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      category: 'sofa',
      name: 'Chesterfield',
      qty: 1,
      price: 28390,
    },
  ];

  [refresher, setRefresher] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        {/*=============navigation bar==================*/}
        <NavigationBar {...navProps} />
        {/*=============product list==================*/}
        <FlatList
          style={{
            ...styles.productList,
            height:
              products.length < 6
                ? ScreenDimention.Height * 0.135 * products.length
                : ScreenDimention.Height * 0.135 * 5.69,
          }}
          keyExtractor={(item, index) => index}
          data={products}
          ItemSeparatorComponent={() => <View style={styles.rowSeperator} />}
          renderItem={({item, index}) => (
            <View style={styles.rowContainer}>
              <Image style={styles.productImage} source={item.image} />
              <View style={styles.productInfoStack}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <Text style={{fontSize: 14}}>{item.category}</Text>
                <View style={styles.priceNQuantityStack}>
                  <Text>QTY: {products[index].qty}</Text>
                  <Text>₹ {products[index].price}</Text>
                </View>
              </View>
            </View>
          )}
        />
        <View style={{height: 0.5, backgroundColor: 'black'}}></View>
        <View
          style={{
            height: ScreenDimention.Height * 0.12,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 8,
          }}>
          <Text>TOTAL</Text>
          <Text>{refresher}</Text>
        </View>
        <View style={{height: 0.5, backgroundColor: 'black'}}></View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  container: {},
  productList: {
    backgroundColor: 'silver',
    height: ScreenDimention.Height * 0.405,
  },
  rowContainer: {
    backgroundColor: 'white',
    height: ScreenDimention.Height * 0.135,
    flexDirection: 'row',
  },
  rowBackView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexGrow: 1,
  },
  deleteBtn: {
    marginRight: 10,
  },
  rowSeperator: {
    backgroundColor: 'black',
    height: 0.5,
  },
  productInfoStack: {
    flexGrow: 1,
    margin: 15,
    justifyContent: 'space-between',
  },
  productImage: {
    marginTop: 8,
    marginLeft: 8,
    width: '20%',
    height: ScreenDimention.Height * 0.11,
    resizeMode: 'cover',
  },
  priceNQuantityStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDownView: {
    width: 50,
    height: 30,
    backgroundColor: 'rgba(192, 192, 192, 0.5)',
    justifyContent: 'center',
    zIndex: 1,
    borderRadius: 4,
  },
  dropDownArrow: {
    position: 'absolute',
    resizeMode: 'cover',
    width: 20,
    height: 30,
    zIndex: 0,
    marginLeft: 25,
    marginTop: 2,
  },
  orderBtn: {
    height: ScreenDimention.Height * 0.1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 8,
  },
});
