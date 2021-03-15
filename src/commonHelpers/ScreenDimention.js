import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ScreenDimention {
  static Height = windowHeight;
  static Width = windowWidth;
}
