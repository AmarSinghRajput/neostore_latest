import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';

const addresses = [
  {
    name: 'Glen Dmello',
    address:
      '4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai,Maharashtra 400028',
  },
  {
    name: 'Glen Dmello',
    address:
      '4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai,Maharashtra 400028',
  },
  {
    name: 'Glen Dmello',
    address:
      '4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai,Maharashtra 400028',
  },
];

export default AddressList = (props) => {
  const navProps = {
    title: 'Address List',
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/addBtn.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
    },
  };
  [selectedAddress, setSelectedAddress] = useState(0);
  return (
    <View style={styles.mainContainer}>
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        {/*=============navigation bar==================*/}
        <NavigationBar {...navProps} />
        {/*=============address list==================*/}
        <Text style={{marginTop: 20, marginLeft: 10}}>Shipping address</Text>
        <FlatList
          keyExtractor={(item, index) => index}
          data={addresses}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.addressListContainer}
              onPress={() => {
                setSelectedAddress(index);
                console.log(selectedAddress);
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor:
                    selectedAddress === index ? 'darkgray' : 'white',
                  marginHorizontal: 10,
                  borderColor: 'dimgray',
                  borderWidth: 2,
                  marginTop: 8,
                }}></View>
              <View>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{marginTop: 8}}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {/*=============place order==================*/}
        <TouchableOpacity style={styles.placeorder}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            PLACE ORDER
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  container: {backgroundColor: 'rgb(240, 240, 240)'},
  addressListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  addressStackView: {},
  placeorder: {
    height: ScreenDimention.Height * 0.07,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 30,
    borderRadius: 8,
  },
});
