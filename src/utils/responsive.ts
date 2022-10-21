import {Dimensions, PixelRatio} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export const widthPercentageToDP = (size: string | number) => {
  const width = typeof size === 'number' ? size : parseFloat(size);
  return PixelRatio.roundToNearestPixel((screenWidth * width) / 100);
};

export const heightPercentageToDP = (size: string | number) => {
  const height = typeof size === 'number' ? size : parseFloat(size);

  return PixelRatio.roundToNearestPixel((screenHeight * height) / 100);
};
