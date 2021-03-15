import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../Redux/Actions/LoginAction';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import Loader from '../components/Loader/Loader';
import CommonHelper from '../commonHelpers/CommonHelper';
export default LoginScreen = (props) => {
  const dispatch = useDispatch();
  const [animating, setAnimating] = useState(false);
  const [credentials, setcredentials] = useState({
    email: '',
    password: '',
  });

  const IsLogin =
    useSelector((state) => state.loginReducer.isLoggedIn) != null
      ? useSelector((state) => state.loginReducer.isLoggedIn)
      : false;

  const OnPressLoginBtn = () => {
    console.log(credentials);
    console.log(animating);
    if (!CommonHelper.CheckEmptyString(credentials.email)) {
      alert('please enter email id');
    } else if (!CommonHelper.CheckEmptyString(credentials.password)) {
      alert('please enter password');
    } else {
      setAnimating(true);
      dispatch(loginUser(credentials.email, credentials.password));
    }
  };

  useEffect(() => {
    if (IsLogin) {
      setAnimating(false);
      props.navigation.navigate('App');
    }
    console.log('IsLogin = ', IsLogin);
  }, [IsLogin]);

  return (
    <View style={{flex: 1}}>
      {/* ─── returning data to store in Redux store ───────────────────────────────────────── */}
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={{flexGrow: 1}}>
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
          <Text style={styles.NeoStoreLabel}> NeoStore </Text>
          {/*=============input fields==================*/}
          <View style={styles.InputContainer}>
            <Image
              style={styles.InputIcon}
              source={require('../../assets/icons/user.png')}
            />
            <TextInput
              autoCapitalize={false}
              style={styles.textInput}
              placeholder="email id"
              placeholderTextColor="white"
              onChangeText={(text) => {
                console.log(text);
                // credentials.email = text.trim();
                setcredentials({
                  email: text.trim(),
                  password: credentials.password,
                });
              }}
              onBlur={() => {
                if (!CommonHelper.CheckEmailValid(credentials.email)) {
                  alert('please enter valid email id');
                }
              }}>
              {credentials.email}
            </TextInput>
          </View>
          <View style={{...styles.InputContainer, marginBottom: 24}}>
            <Image
              style={styles.InputIcon}
              source={require('../../assets/icons/pass.png')}
            />
            <TextInput
              autoCapitalize={false}
              placeholder="password"
              placeholderTextColor="white"
              onChangeText={(text) => {
                credentials.password = text.trim();
                setcredentials({
                  email: credentials.email,
                  password: text.trim(),
                });
              }}
              onBlur={() => {
                if (!CommonHelper.CheckEmptyString(credentials.password)) {
                  alert('please enter password');
                }
              }}
              style={styles.textInput}>
              {credentials.password}
            </TextInput>
          </View>
          {/*=============login button==================*/}
          <TouchableOpacity style={styles.loginBtn} onPress={OnPressLoginBtn}>
            <Text style={styles.loginTxt}>LOGIN</Text>
          </TouchableOpacity>
          {/*=============forgot pass button==================*/}
          <TouchableOpacity
            onPress={() => {}}
            style={styles.forgotPassTouchable}>
            <Text style={{color: 'white', fontSize: 17}}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text
              style={{
                marginBottom: 30,
                marginLeft: 20,
                fontSize: 17,
                color: 'white',
              }}>
              DONT HAVE AN ACCOUNT?
            </Text>
            <TouchableOpacity
              style={styles.addAccountTouchable}
              onPress={() => {
                props.navigation.navigate('signup');
              }}>
              <Image source={require('../../assets/icons/addBtn.png')} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={animating}
          onRequestClose={() => {
            setModalVisible(!animating);
          }}>
          <Loader />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E91C1A',
  },
  NeoStoreLabel: {
    color: 'white',
    marginTop: '40%',
    marginBottom: '15%',
    alignSelf: 'center',
    fontSize: 35,
  },
  InputContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderColor: 'white',
    borderWidth: 0.8,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 4,
    fontSize: 18,
    height: 28,
  },
  loginBtn: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 4,
    marginHorizontal: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  loginTxt: {
    alignSelf: 'center',
    color: '#E91C1A',
    fontSize: 24,
  },
  forgotPassTouchable: {
    marginVertical: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  addAccountTouchable: {
    marginRight: 20,
    marginBottom: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aa0003',
  },
});
