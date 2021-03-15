import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import CommonHelpers from '../commonHelpers/CommonHelper';
import AsyncConst from '../Constants/StorageConstants';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  constructor(props) {
    super(props);
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  _bootstrapAsync = () => {
    CommonHelpers.GetLocalItem(AsyncConst.userData, this.callbackFunction);
  };

  callbackFunction = (response) => {
    const obj = JSON.parse(response);
    response == null || response == undefined
      ? this.props.navigation.navigate('Auth')
      : this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={{height: '100%', backgroundColor: ''}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoadingScreen;
