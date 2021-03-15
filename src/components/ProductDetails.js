import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Modal,
} from 'react-native';
import GeneralStatusBarColor from './StatusBar/GeneralStatusBarColor';
import NavigationBar from '../components/NavigationBar/NavBar';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import StarRating from 'react-native-star-rating';
import EnterQuantityScreen from '../components/EnterQuantityScreen';
const products = [
  {
    productsImage: require('../../assets/images/banners/banner_image_one.jpg'),
  },
  {
    productsImage: require('../../assets/images/banners/banner_image_two.jpg'),
  },
  {
    productsImage: require('../../assets/images/banners/banner_image_three.jpg'),
  },
  {
    productsImage: require('../../assets/images/banners/banner_image_four.jpg'),
  },
];
export default ProductDetails = (props) => {
  const navProps = {
    title: 'Neostore',
    leftIcon: require('../../assets/icons/backBtn.png'),
    rightIcon: require('../../assets/icons/search.png'),
    leftBtnAction: () => {
      props.navigation.goBack();
    },
    rightBtnAction: () => {
      console.log('search btn pressed');
    },
  };
  const [selectedImage, setSelectedImage] = useState(products[0].productsImage);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = React.useState(2.5);

  const popupProps = {
    close: () => {
      setModalVisible(!modalVisible);
    },
  };
  return (
    <View style={styles.mainContainer}>
      <GeneralStatusBarColor
        backgroundColor="#aa0003"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        {/*=============navigation bar==================*/}
        <NavigationBar {...navProps} />
        {/*=============header view==================*/}
        <View style={styles.headerView}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            6 seater dining table for family
          </Text>
          <Text style={{fontSize: 14}}>category-table</Text>
          <View style={styles.sellerRatingStackView}>
            <Text>future furnitures center</Text>
            <StarRating
              fullStarColor={'gold'}
              emptyStarColor={'black'}
              starSize={20}
              disabled={true}
              halfStarEnabled={true}
              maxStars={5}
              rating={value}
              selectedStar={(rating) => setValue(rating)}
            />
          </View>
        </View>
        {/*=============price and pics info==================*/}
        <View style={styles.priceNPicturesContainer}>
          <View style={styles.priceNShareBtnStackView}>
            <Text style={{fontSize: 22, color: '#aa0003'}}>Rs. 27390</Text>
            <TouchableOpacity>
              <Image source={require('../../assets/icons/share.png')} />
            </TouchableOpacity>
          </View>
          <Image style={styles.selectedImage} source={selectedImage} />
          <FlatList
            style={styles.list}
            horizontal={true}
            keyExtractor={(item, index) => index}
            data={products}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedImage(item.productsImage);
                }}>
                <Image style={styles.listImages} source={item.productsImage} />
              </TouchableOpacity>
            )}
          />
          <View
            style={{
              marginTop: 18,
              height: 0.1,
              backgroundColor: 'silver',
            }}></View>
          {/*=============product description==================*/}
          <View style={styles.productDescriptionContainer}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                DESCRIPTION
              </Text>
              <ScrollView
                style={{
                  marginTop: 4,
                  height: ScreenDimention.Height * 0.2,
                }}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. ... Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
        {/*=============footer buttons==================*/}
        <View style={styles.footerBtnContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={{...styles.footerBtns, backgroundColor: 'red'}}>
            <Text style={styles.footerBtnTexts}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.footerBtns, backgroundColor: 'silver'}}>
            <Text style={{...styles.footerBtnTexts, color: 'gray'}}>RATE</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <EnterQuantityScreen {...popupProps} />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  container: {
    flexGrow: 1,
  },
  headerView: {
    alignSelf: 'stretch',
    height: '10%',
    flexGrow: 1,
    backgroundColor: 'white',
  },
  sellerRatingStackView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    height: 10,
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'yellow',
    // textShadowColor: 'black',
    // textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  priceNPicturesContainer: {
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  priceNShareBtnStackView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedImage: {
    marginTop: 8,
    width: '80%',
    height: ScreenDimention.Height * 0.22,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  list: {
    height: ScreenDimention.Height * 0.13,
    marginLeft: 4,
  },
  listImages: {
    marginTop: 8,
    marginHorizontal: 5,
    resizeMode: 'cover',
    width: ScreenDimention.Width * 0.28,
    height: ScreenDimention.Height * 0.13,
  },
  productDescriptionContainer: {
    backgroundColor: 'white',
    marginTop: 8,
    marginHorizontal: 12,
    marginVertical: 8,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  textDecription: {
    fontFamily: 'bold',
  },
  footerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: ScreenDimention.Height * 0.09,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footerBtns: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    width: ScreenDimention.Width * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 5,
  },
  footerBtnTexts: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
