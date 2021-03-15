/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import createAppContainer from './App';
AppRegistry.registerComponent(appName, () => createAppContainer);
