import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const Font = (size: number) => (width / guidelineBaseWidth) * size;

export const Height = (pxl: number) => {
  return (height / guidelineBaseHeight) * pxl;
};

export const Width = (pxl: number) => {
  return (width / guidelineBaseWidth) * pxl;
};
