import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import CheckBox from 'react-native-check-box';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';

export default RegistrationScreen = (props) => {
  const [gender, setGender] = useState('male');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  function onSelect(index, value) {
    setGender(value);
  }

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
          <Text style={styles.navigationTitle}>Registration</Text>
        </View>
        {/* ScrollView */}
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView style={styles.innerContainer} behavior="height">
            <Text style={styles.neoStoreLabel}>NeoStore</Text>
            {/* TextInputs Views*/}
            <View style={{...styles.InputContainer, marginTop: 25}}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/user.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="First Name"
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/user.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Last Name"
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/email.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/pass.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/pass.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor="white"></TextInput>
            </View>
            {/* Gender container */}
            <View style={styles.genderContainer}>
              <Text style={styles.genderText}>Gender</Text>
              <RadioGroup
                thickness={1}
                color="white"
                selectedIndex={0}
                style={styles.radioGroup}
                onSelect={(index, value) => onSelect(index, value)}>
                <RadioButton color="white" value={'male'}>
                  <Text style={styles.radioLabel}>Male</Text>
                </RadioButton>
                <RadioButton color="white" value={'female'}>
                  <Text style={styles.radioLabel}>Female</Text>
                </RadioButton>
              </RadioGroup>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/phone.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                placeholderTextColor="white"></TextInput>
            </View>
            {/* terms&condiitons */}
            <View style={styles.termsCondtitionContainer}>
              <CheckBox
                onClick={() => {
                  setAgreedToTerms(!agreedToTerms);
                }}
                isChecked={agreedToTerms}
                checkBoxColor="white"
              />
              <Text style={{marginLeft: 10, color: 'white'}}>I agree the </Text>
              <TouchableOpacity>
                <Text style={{textDecorationLine: 'underline', color: 'white'}}>
                  Terms and Conditions
                </Text>
              </TouchableOpacity>
            </View>
            {/*Register Btn*/}
            <TouchableOpacity style={styles.registerTouchable}>
              <Text style={styles.registerLabel}>REGISTER</Text>
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
  genderContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 12,
  },
  genderText: {
    color: 'white',
    fontSize: 18,
  },
  radioGroup: {
    flexDirection: 'row',
  },
  radioBtn: {
    tintColor: 'white',
    // backgroundColor: 'white',
  },
  radioLabel: {
    color: 'white',
    fontSize: 18,
  },
  termsCondtitionContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  registerTouchable: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  registerLabel: {
    color: 'red',
    fontSize: 22,
  },
});
