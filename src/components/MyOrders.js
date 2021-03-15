import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';

export default MyOrders = (props) => {
  const navProps = {
    title: 'My Orders',
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
    },
  };

  const orderDetails = [
    {
      orderId: 15878,
      orderDate: '8 aug 2015',
      price: 28390,
    },
    {
      orderId: 15878,
      orderDate: '8 aug 2015',
      price: 28390,
    },
    {
      orderId: 15878,
      orderDate: '8 aug 2015',
      price: 28390,
    },
    {
      orderId: 15878,
      orderDate: '8 aug 2015',
      price: 28390,
    },
    {
      orderId: 15878,
      orderDate: '8 aug 2015',
      price: 28390,
    },
    {
      orderId: 15878,
      orderDate: '8 aug 2015',
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
        {/*=============orders list==================*/}
        <FlatList
          style={styles.productList}
          keyExtractor={(item, index) => index}
          data={orderDetails}
          ItemSeparatorComponent={() => <View style={styles.rowSeperator} />}
          renderItem={({item, index}) => (
            <View style={styles.rowContainer}>
              <View style={styles.productInfoStack}>
                <View style={styles.priceNQuantityStack}>
                  <Text>Order ID: {orderDetails[index].orderId}</Text>
                  <Text>Ordered Date: {orderDetails[index].orderDate}</Text>
                </View>
                <Text style={{fontSize: 17, alignSelf: 'center'}}>
                  ₹ {item.price}
                </Text>
              </View>
            </View>
          )}
        />
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
    height: '100%',
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
    flexDirection: 'row',
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
