// @flow
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ScreenDimention from '../commonHelpers/ScreenDimention';
import CommonMethods from '../commonHelpers/CommonHelper';
import {useDispatch, useSelector} from 'react-redux';
import AsyncConst from '../Constants/StorageConstants';
const menuItems = [
  {
    title: 'My Cart',
    icon: require('../../assets/images/menuIcons/cart.png'),
    navName: 'home',
  },
  {
    title: 'Tables',
    icon: require('../../assets/images/menuIcons/table.png'),
    navName: 'productList',
  },
  {
    title: 'Sofas',
    icon: require('../../assets/images/menuIcons/sofa.png'),
    navName: 'productDetails',
  },
  {
    title: 'Chairs',
    icon: require('../../assets/images/menuIcons/chair.png'),
    navName: 'enterQuantity',
  },
  {
    title: 'Cupboards',
    icon: require('../../assets/images/menuIcons/cupboard.png'),
    navName: 'myCart',
  },
  {
    title: 'My Account',
    icon: require('../../assets/icons/user.png'),
    navName: 'myAccount',
  },
  {
    title: 'Store Locator',
    icon: require('../../assets/images/menuIcons/locator.png'),
    navName: 'storeLocator',
  },
  {
    title: 'My Orders',
    icon: require('../../assets/images/menuIcons/orders.png'),
    navName: 'myOrders',
  },
  {
    title: 'Logout',
    icon: require('../../assets/images/menuIcons/logout.png'),
    navName: 'authStack',
  },
];
export default SideMenu = ({navigation}) => {
  const dispatch = useDispatch();
  let [user, setUser] = useState({});

  useEffect(() => {
    //it will set user and stop calling repeatedly.
    if (user.id == undefined) {
      CommonMethods.GetLocalItem(AsyncConst.userData, (response) => {
        setUser(JSON.parse(response));
      });
      console.log(user + 'user set inside use Effect');
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      {/* user info */}
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.userIcon}
          source={require('../../assets/icons/testUser.png')}
        />
        <Text style={styles.userName}>
          {user.first_name + ' ' + user.last_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      {/* menu items*/}
      <FlatList
        style={styles.List}
        data={menuItems}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View>
            <View style={styles.seperator}></View>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                if (item.title == 'Logout') {
                  CommonMethods.DeleteAllStorage();
                  dispatch({type: LoginActionType.REQ_FAILURE});
                }
                navigation.navigate(item.navName);
              }}>
              <Image style={styles.menuIcon} source={item.icon} />
              <Text style={styles.menuTitle}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#282828'},
  userInfoContainer: {
    height: ScreenDimention.Height * 0.28,
    alignItems: 'center',
    width: ScreenDimention.Width * 0.55,
  },
  userIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 10,
  },
  userName: {
    fontSize: 21,
    color: 'white',
  },
  email: {fontSize: 14, color: 'white'},
  List: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 10,
  },
  seperator: {
    backgroundColor: 'black',
    height: 1,
  },
  menuIcon: {
    marginHorizontal: 12,
    height: 30,
    width: 30,
  },
  menuTitle: {
    color: 'white',
    fontSize: 18,
  },
});
