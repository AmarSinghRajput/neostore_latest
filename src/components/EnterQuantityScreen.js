import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const product = {
  name: '6 seater dining table for family',
  productImage: require('../../assets/images/banners/banner_image_one.jpg'),
};
export default EnterQuantityScreen = (props) => {
  return (
    <View style={styles.transparentMainContainer}>
      <View style={styles.modalView}>
        <Text style={styles.name}>{product.name}</Text>
        <Image
          style={{resizeMode: 'cover', height: 200, width: 200}}
          source={product.productImage}
        />
        <Text style={styles.enterquatityLabel}>Enter Qty</Text>
        <TextInput style={styles.qtyInput}></TextInput>
        <TouchableOpacity style={styles.submitBtn} onPress={props.close}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transparentMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
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
  name: {marginVertical: 20},
  productImage: {},
  enterquatityLabel: {marginVertical: 20},
  qtyInput: {},
  submitBtn: {
    height: 54,
    backgroundColor: 'red',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
