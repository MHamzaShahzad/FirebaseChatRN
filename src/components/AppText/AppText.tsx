import React, {memo} from 'react';
import {styles} from './styles';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import {props} from './interface';

const AppText: React.FC<props> = ({
  style,
  animation = true,
  children,
  ...other
}) => {
  return (
    <Animated.Text
      {...(animation && {entering: FadeInLeft.delay(100).duration(100)})}
      {...other}
      style={[styles.text, style]}>
      {children}
    </Animated.Text>
  );
};

export default memo(AppText);
