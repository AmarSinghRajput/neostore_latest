import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default NavigationBar = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.leftIcon} onPress={props.leftBtnAction}>
          <Image source={props.leftIcon} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{props.title}</Text>
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={props.rightBtnAction}>
          <Image source={props.rightIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    height: 44,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E91C1A',
  },
  leftIcon: {marginLeft: 16},
  navTitle: {
    flexGrow: 1,
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
