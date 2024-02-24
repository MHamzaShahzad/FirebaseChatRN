import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {Font, Height, Width, width} from '../../helpers/scalling';

export const styles = StyleSheet.create({
  s_chat: {
    color: colors.white,
    fontSize: Font(13),
    fontWeight: '500',
    lineHeight: Height(16),
  },
  received_message: {
    backgroundColor: colors.primary,
    maxWidth: width * 0.65,
    alignSelf: 'flex-start',
    paddingHorizontal: Width(7),
    paddingVertical: Height(6),
    borderRadius: Height(8),
  },
  s_message_container: {
    flexDirection: 'row',
  },
  r_message_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  receive_user_icon: {
    height: Height(40),
    width: Height(40),
    borderRadius: Height(24),
    marginRight: Width(6),
  },
  message_card: {
    backgroundColor: '#F4F3F7',
    maxWidth: width * 0.6,
    alignSelf: 'flex-end',
    paddingHorizontal: Width(7),
    paddingVertical: Height(6),
    borderRadius: Height(8),
  },
  r_chat: {
    color: colors.on_surface_variant,
    fontSize: Font(13),
    fontWeight: '500',
    lineHeight: Height(16),
  },
  seprator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Height(15),
  },
  line: {
    height: Height(0.5),
    backgroundColor: '#AEB2C0',
    width: '100%',
    marginVertical: Height(10),
  },
  date: {
    position: 'absolute',
    backgroundColor: colors.white,
    paddingHorizontal: Width(10),
    color: '#444444',
    fontSize: Font(11),
    fontWeight: '400',
  },
  left_ark: {},
  right_ark: {},
  user_name: {
    fontSize: Font(13),
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingTop: Height(5),
    paddingBottom: Height(2),
    color: colors.nuteral10,
  },
  message_time: {
    fontSize: Font(7),
    color: colors.nuteral95,
    paddingTop: Height(4),
  },
  right_time: {
    fontSize: Font(7),
    color: colors.nuteral20,
    paddingTop: Height(3),
    textAlign: 'left',
  },
  time_container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  right_time_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  loading_icon: {
    marginLeft: Width(4),
    alignSelf: 'flex-end',
  },
});
