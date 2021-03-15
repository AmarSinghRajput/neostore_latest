import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import {SwipeListView} from 'react-native-swipe-list-view';
import ModalDropdown from 'react-native-modal-dropdown';

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

export default MyCart = (props) => {
  const navProps = {
    title: 'My Cart',
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
      name: 'Table',
      qty: 1,
      price: 28390,
      amount: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      name: 'Chair',
      qty: 1,
      price: 28390,
      amount: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      name: 'Sofa',
      qty: 1,
      price: 28390,
      amount: 28390,
    },
    {
      image: require('../../assets/images/banners/banner_image_one.jpg'),
      name: 'Sofa',
      qty: 1,
      price: 28390,
      amount: 28390,
    },
  ];
  qtyRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  [refresher, setRefresher] = useState(0);
  const forceUpdate = useForceUpdate();
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
        <SwipeListView
          style={styles.productList}
          keyExtractor={(item, index) => index}
          data={products}
          ItemSeparatorComponent={() => <View style={styles.rowSeperator} />}
          renderItem={({item, index}) => (
            <View style={styles.rowContainer}>
              <Image style={styles.productImage} source={item.image} />
              <View style={styles.productInfoStack}>
                <Text style={{fontSize: 20}}>{item.name}</Text>
                <View style={styles.priceNQuantityStack}>
                  {/* <Text>Dropdown</Text> */}
                  <ModalDropdown
                    defaultValue={'qty'}
                    style={styles.dropDownView}
                    textStyle={{marginLeft: 5}}
                    dropdownStyle={{width: 50}}
                    onSelect={(dropdownIndex) => {
                      products[index].amount = (dropdownIndex + 1) * item.price;
                      setRefresher(refresher + 1);
                    }}
                    options={qtyRange}></ModalDropdown>
                  <Image
                    style={styles.dropDownArrow}
                    source={require('../../assets/icons/bottomArrow.png')}
                  />
                  <Text>₹ {products[index].amount}</Text>
                </View>
              </View>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBackView}>
              <TouchableOpacity style={styles.deleteBtn}>
                <Image
                  style={{resizeMode: 'cover', width: 40, height: 60}}
                  source={require('../../assets/icons/delete.png')}
                />
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={0}
          rightOpenValue={-75}
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
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            ORDER NOW
          </Text>
        </TouchableOpacity>
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
