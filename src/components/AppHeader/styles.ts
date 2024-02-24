import {Platform, StyleSheet} from 'react-native';
import {Font, Width} from '../../helpers/scalling';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Width(20),
    height: 50,
  },
  shadow: {
    elevation: 4,
    shadowColor: 'gray',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
  },
  header_container: {
    flex: 1,
  },
  align_Center: {
    alignItems: 'center',
  },
  align_last: {
    alignItems: 'flex-end',
  },
  header_text: {
    fontSize: Font(20),
    fontWeight: Platform.OS == 'ios' ? '600' : '500',
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    color: colors.black,
    width: Width(300),
  },
});
