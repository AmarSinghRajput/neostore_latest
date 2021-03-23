import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';

export default ResetPassword = (props) => {
  return (
    <View>
      {/* custom colored status bar */}
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        {/* navigation bar */}
        <View style={styles.navigationBar}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={styles.backBtn}>
            <Image source={require('../../assets/icons/backBtn.png')} />
          </TouchableOpacity>
          <Text style={styles.navigationTitle}>Reset Password</Text>
        </View>
        {/* ScrollView */}
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView style={styles.innerContainer} behavior="height">
            <Text style={styles.neoStoreLabel}>NeoStore</Text>
            {/* TextInputs Views*/}
            <View style={{...styles.InputContainer, marginTop: 25}}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/pass.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Current Password"
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/pass.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="New Password"
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/pass.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="New Password"
                placeholderTextColor="white"></TextInput>
            </View>
            {/*Register Btn*/}
            <TouchableOpacity style={styles.resetTouchable}>
              <Text style={styles.resetLabel}>RESET PASSWORD</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#E91C1A',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navigationBar: {
    height: 44,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: 8,
  },
  navigationTitle: {
    paddingHorizontal: 40,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  scrollView: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  neoStoreLabel: {
    marginTop: '15%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderColor: 'white',
    borderWidth: 0.8,
    height: 40,
    marginTop: 12,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 4,
    fontSize: 16,
    height: 40,
  },
  resetTouchable: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
    marginVertical: 20,
  },
  resetLabel: {
    color: 'red',
    fontSize: 22,
  },
});
