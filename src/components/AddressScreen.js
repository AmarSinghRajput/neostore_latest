import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import {TextInput} from 'react-native-gesture-handler';

export default AddressScreen = (props) => {
  const navProps = {
    title: 'Add Address',
    leftIcon: require('../../assets/icons/backBtn.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
  };
  return (
    <View style={styles.mainContainer}>
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        {/*=============navigation bar==================*/}
        <NavigationBar {...navProps} />
        {/*=============address==================*/}
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView
            style={styles.innerContainer}
            keyboardVerticalOffset={55}
            behavior="padding">
            <Text style={{marginTop: 20, marginHorizontal: 15}}>ADDRESS</Text>
            <TextInput style={styles.addressTextInput} multiline={true}>
              4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West, Mumbai,
              Maharashtra 400028
            </TextInput>
            {/*=============landmark==================*/}
            <Text style={{marginHorizontal: 15, marginTop: 40}}>LANDMARK</Text>
            <TextInput style={styles.textInput}></TextInput>
            {/*=============city state==================*/}
            <View style={styles.cityStateStackView}>
              <View style={styles.cityNStateView}>
                <Text style={{marginHorizontal: 15, marginTop: 16}}>CITY</Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
              <View style={styles.cityNStateView}>
                <Text style={{marginHorizontal: 15, marginTop: 16}}>STATE</Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
            </View>
            {/*=============zipcode country==================*/}
            <View style={styles.cityStateStackView}>
              <View style={styles.cityNStateView}>
                <Text style={{marginHorizontal: 15, marginTop: 16}}>
                  ZIP CODE
                </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
              <View style={styles.cityNStateView}>
                <Text style={{marginHorizontal: 15, marginTop: 16}}>
                  COUNTRY
                </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
            </View>

            {/*=============save address==================*/}
            <TouchableOpacity style={styles.saveAddress}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                SAVE ADDRESS
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    backgroundColor: 'rgb(240, 240, 240)',
    flexGrow: 1,
    height: '100%',
  },
  scrollView: {
    // alignSelf: 'stretch',
  },
  innerContainer: {flex: 1},
  addressTextInput: {
    height: ScreenDimention.Height * 0.15,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 10,
    fontSize: 17,
  },
  textInput: {
    marginHorizontal: 15,
    marginTop: 8,
    backgroundColor: 'white',
    height: 30,
  },
  cityStateStackView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cityNStateView: {
    width: ScreenDimention.Width * 0.5,
    // marginHorizontal: 15,
  },
  saveAddress: {
    height: ScreenDimention.Height * 0.07,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 30,
    borderRadius: 8,
  },
});
