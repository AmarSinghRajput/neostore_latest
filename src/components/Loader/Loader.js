import * as React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default Loader = (props) => {
  return (
    <View style={styles.transparentMainContainer}>
      <View style={styles.modalView}>
        <ActivityIndicator animating={true} size={'large'} color={'white'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transparentMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.5)',
  },
  modalView: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
