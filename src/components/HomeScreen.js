import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import ScreenDimention from '../commonHelpers/ScreenDimention';

const sliderImgs = [
  {
    banner: require('../../assets/images/banners/banner_image_one.jpg'),
    desc: 'you selected for 1st img ',
  },
  {
    banner: require('../../assets/images/banners/banner_image_two.jpg'),
    desc: 'you selected for 2nd img ',
  },
  {
    banner: require('../../assets/images/banners/banner_image_three.jpg'),
    desc: 'you selected for 3rd img ',
  },
  {
    banner: require('../../assets/images/banners/banner_image_four.jpg'),
    desc: 'you selected for 4th img ',
  },
];

const thumbnails = [
  {
    thumbnail: require('../../assets/images/thumbnails/chairs_icon.png'),
    desc: 'you selected for 1st img ',
  },
  {
    thumbnail: require('../../assets/images/thumbnails/cupboard_icon.png'),
    desc: 'you selected for 2nd img ',
  },
  {
    thumbnail: require('../../assets/images/thumbnails/sofa_icon.png'),
    desc: 'you selected for 3rd img ',
  },
  {
    thumbnail: require('../../assets/images/thumbnails/tables_icon.png'),
    desc: 'you selected for 4th img ',
  },
  {
    thumbnail: require('../../assets/images/thumbnails/tables_icon.png'),
    desc: 'you selected for 4th img ',
  },
];

export default HomeScreen = ({navigation}) => {
  const navProps = {
    title: 'NeoStore',
    leftIcon: require('../../assets/icons/menu.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      navigation.toggleDrawer();
    },
    rightBtnAction: () => {},
  };
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
            height={ScreenDimention.Height * 0.35}
            data={sliderImgs}
            imageKey={'banner'}
            autoscroll={false}
            indicatorContainerStyle={{position: 'absolute', bottom: 8}}
            local
            onPress={(item) => {
              alert(sliderImgs[item].desc);
            }}
          />
        </View>
        {/* collection */}
        <FlatList
          style={styles.flatListStyle}
          numColumns={2}
          data={thumbnails}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View style={styles.thumbnails}>
              <TouchableOpacity>
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
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
  },
  imageSlider: {
    height: ScreenDimention.Height * 0.35,
    // backgroundColor: 'green',
  },
  flatListStyle: {
    // backgroundColor: 'yellow',
  },
  thumbnails: {
    width: ScreenDimention.Width * 0.47,
    height: ScreenDimention.Height * 0.29,
    margin: 5,
    // backgroundColor: 'silver',
    flex: 1 / 2,
    justifyContent: 'space-around',
  },
});
