import React, {useState, useEffect} from 'react';
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
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import CommonMethods from '../commonHelpers/CommonHelper';
import {useDispatch, useSelector} from 'react-redux';
import AsyncConst from '../Constants/StorageConstants';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ResetPassword from '../components/ResetPassword';

export default MyProfile = (props) => {
  let [user, setUser] = useState({});
  let [editProfileMode, setEditProfileMode] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    //it will set user and stop calling repeatedly.
    if (user.id == undefined) {
      CommonMethods.GetLocalItem(AsyncConst.userData, (response) => {
        setUser(JSON.parse(response));
      });
      console.log(user + 'user set inside use Effect');
    }
  }, [user]);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log({source});
      }
    });
  }

  return (
    <View style={{flexGrow: 1}}>
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
              setEditProfileMode(false);
              props.navigation.goBack();
            }}
            style={styles.backBtn}>
            <Image source={require('../../assets/icons/backBtn.png')} />
          </TouchableOpacity>
          <Text style={styles.navigationTitle}>My Account</Text>
        </View>
        {/* ScrollView */}
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView style={styles.innerContainer} behavior="height">
            <TouchableOpacity onPress={selectImage}>
              <Image
                style={styles.profilePic}
                source={require('../../assets/icons/dummyuser.png')}
              />
            </TouchableOpacity>
            {/* TextInputs Views*/}
            <View style={{...styles.InputContainer, marginTop: 25}}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/user.png')}
              />
              <TextInput
                style={styles.textInput}
                editable={editProfileMode}
                value={user.first_name}
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/user.png')}
              />
              <TextInput
                style={styles.textInput}
                editable={editProfileMode}
                value={user.last_name}
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                editable={editProfileMode}
                source={require('../../assets/icons/email.png')}
              />
              <TextInput
                style={styles.textInput}
                editable={editProfileMode}
                value={user.email}
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/phone.png')}
              />
              <TextInput
                style={styles.textInput}
                editable={editProfileMode}
                value={user.phone_no}
                placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.InputContainer}>
              <Image
                style={styles.InputIcon}
                source={require('../../assets/icons/dob.png')}
              />
              <TextInput
                style={styles.textInput}
                editable={editProfileMode}
                placeholder="date of birth not added"
                value={user.dob}
                placeholderTextColor="white"></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (editProfileMode) {
                  console.log('submit form');
                } else {
                  setEditProfileMode(true);
                }
              }}
              style={styles.editTouchable}>
              <Text style={styles.editLabel}>
                {editProfileMode ? 'SUBMIT' : 'EDIT PROFILE'}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('resetPassword');
        }}
        style={{
          ...styles.resetPassword,
          display: editProfileMode ? 'none' : 'flex',
        }}>
        <Text style={styles.resetPassLabel}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '94%',
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
  profilePic: {
    marginTop: '15%',
    resizeMode: 'cover',
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: 'white',
    // borderWidth: 2,
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
  editTouchable: {
    marginVertical: 20,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  editLabel: {
    color: 'red',
    fontSize: 22,
  },
  resetPassword: {
    position: 'absolute',
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPassLabel: {
    color: 'dimgray',
    fontSize: 18,
  },
});
