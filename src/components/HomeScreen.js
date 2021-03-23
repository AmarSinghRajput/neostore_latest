import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
  Modal,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import DummyData from '../commonHelpers/DummyData';
import {useDispatch, useSelector} from 'react-redux';
import {fetchproductListing} from '../Redux/Actions/ProductListingAction';
import Loader from '../components/Loader/Loader';

export default HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [animating, setAnimating] = useState(false);
  const listingData = useSelector(
    (state) => state.productListingReducer.productListingData,
  );

  const navProps = {
    title: 'NeoStore',
    leftIcon: require('../../assets/icons/menu.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      navigation.toggleDrawer();
    },
    rightBtnAction: () => {},
  };

  useEffect(() => {
    setAnimating(false);
    navigation.navigate('productList');
  }, [listingData]);

  return (
    <View style={{flex: 1}}>
      {/* custom colored status bar */}
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        {/* NAVIGATION BAR */}
        <NavigationBar {...navProps} />
        <View style={styles.imageSlider}>
          {/* for remote image slider uncomment */}
          <FlatListSlider
            height={ScreenDimention.Height * 0.34}
            data={DummyData.homeSliderImages}
            imageKey={'banner'}
            autoscroll={false}
            indicatorContainerStyle={{position: 'absolute', bottom: 8}}
            local
            onPress={(item) => {
              alert(DummyData.homeSliderImages[item].desc);
            }}
          />
        </View>
        {/* collection */}
        <FlatList
          scrollEnabled={false}
          style={styles.flatListStyle}
          numColumns={2}
          data={DummyData.homeThumbnails}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View style={styles.thumbnails}>
              <TouchableOpacity
                onPress={() => {
                  setAnimating(true);
                  dispatch(fetchproductListing(item.categoryId, 10, 1));
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'stretch',
                    borderRadius: 2,
                  }}
                  source={item.thumbnail}
                />
              </TouchableOpacity>
            </View>
          )}
        />
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
    flex: 1,
  },
  imageSlider: {
    height: ScreenDimention.Height * 0.298,
  },
  flatListStyle: {},
  thumbnails: {
    width: ScreenDimention.Width * 0.47,
    height: ScreenDimention.Height * 0.29,
    margin: 5,
    flex: 1 / 2,
    justifyContent: 'space-around',
  },
});
