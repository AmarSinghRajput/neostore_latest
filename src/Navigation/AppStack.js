import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import ProductsList from '../components/ProductsList';
import ProductDetails from '../components/ProductDetails';
import EnterQuantityScreen from '../components/EnterQuantityScreen';
import MyCart from '../components/MyCart';
import AddressList from '../components/AddressList';
import AddressScreen from '../components/AddressScreen';
import MyOrders from '../components/MyOrders';
import OrderDetails from '../components/OrderDetails';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
{
  /*custom side menu*/
}
import SideMenu from '../components/SideMenu';

const Drawer = createDrawerNavigator();
const MenuDrawerNavigation = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType={'slide'}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="productList" component={ProductsList} />
      <Drawer.Screen name="productDetails" component={ProductDetails} />
      <Drawer.Screen name="enterQuantity" component={EnterQuantityScreen} />
      <Drawer.Screen name="myCart" component={MyCart} />
      <Drawer.Screen name="addressList" component={AddressList} />
      <Drawer.Screen name="addAddress" component={AddressScreen} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
      <Drawer.Screen name="OrderDetails" component={OrderDetails} />
      <Drawer.Screen name="AuthStack" component={AuthStack} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();
export default AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="AppStack">
      <Stack.Screen
        options={{headerShown: false}}
        name="AppStack"
        component={MenuDrawerNavigation}
      />
    </Stack.Navigator>
  );
};
