import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText/AppText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Height} from '../../helpers/scalling';
import {props} from './interface';

const AppHeader: React.FC<props> = props => {
  const {title = '', left, right} = props;

  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.shadow}>
      <View
        style={[
          styles.header,
          {
            height: Height(48) + top,
            paddingTop: top,
          },
        ]}>
        {!!left && left}
        <View style={[styles.header_container, styles.align_Center]}>
          {<AppText style={styles.header_text}>{title}</AppText>}
        </View>
        <View style={[styles.header_container, styles.align_last]}>
          {!!right && right}
        </View>
      </View>
    </View>
  );
};

export default AppHeader;
