// @flow
import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import GeneralStatusBarColor from '../components/StatusBar/GeneralStatusBarColor';
import MapView, {Marker} from 'react-native-maps';
import ScreenDimention from '../commonHelpers/ScreenDimention';

const stores = [
  {
    name: 'NEOSTORE1',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NEOSTORE2',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NEOSTORE3',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NEOSTORE4',
    address: 'Rabale, Navi Mumbai, MH',
  },
  {
    name: 'NEOSTORE5',
    address: 'Rabale, Navi Mumbai, MH',
  },
];
export default StoreLocator = (props) => {
  const navProps = {
    title: 'Store Locator',
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
    },
  };
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={{flexGrow: 1}}>
        {/* NAVIGATION BAR */}
        <NavigationBar {...navProps} />
        <MapView
          style={styles.MapView}
          initialRegion={{
            latitude: 19.141297,
            longitude: 73.008888,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}>
          <Marker
            coordinate={{latitude: '19.141297', longitude: '73.008888'}}
            image={require('../../assets/icons/pin.png')}
          />
        </MapView>
        {/* store list */}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.storeList}
          data={stores}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity style={styles.row}>
                <Image
                  style={styles.listmarker}
                  source={require('../../assets/icons/marker.png')}
                />
                <View style={styles.storeInfoContainer}>
                  <Text style={styles.storeName}>{item.name}</Text>
                  <Text style={styles.storeAddress}>{item.address}</Text>
                </View>
              </TouchableOpacity>
              <View style={{height: 0.5, backgroundColor: 'black'}}></View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexGrow: 1},
  MapView: {height: 200},
  storeList: {flex: 1},
  row: {
    flexDirection: 'row',
    padding: 10,
    alignContent: 'center',
  },
  listmarker: {
    marginLeft: 18,
    marginTop: 8,
    height: 25,
    width: 30,
  },
  storeInfoContainer: {
    marginLeft: 18,
  },
  storeName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  storeAddress: {marginTop: 3, fontSize: 14, color: 'dimgray'},
});
