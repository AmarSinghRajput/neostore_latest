import React, {Component} from 'react';
const ReduxThunk = require('redux-thunk').default;
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/Redux/Store/ReduxStore';

import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import AppStack from './src/Navigation/AppStack';
import AuthStack from './src/Navigation/AuthStack';
import AddressList from './src/components/AddressList';

console.disableYellowBox = true;

// Redux Debugger
let composeEnhancer = compose;

if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  //creates an instance of store to be used globally
  rootReducer, // pass in the combined reducers
  composeEnhancer(applyMiddleware(ReduxThunk)), // use the middleware for async actions
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
