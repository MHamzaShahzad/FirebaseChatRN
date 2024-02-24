import {StyleSheet} from 'react-native';
import {Font, Height, Width, width} from '../../helpers/scalling';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  user_icon: {
    height: Height(40),
    width: Height(40),
    borderRadius: Height(24),
    marginLeft: Width(16),
  },
  receive_user_icon: {
    height: Height(40),
    width: Height(40),
    borderRadius: Height(24),
    marginRight: Width(6),
  },
  title_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_name: {
    fontSize: Font(18),
    fontWeight: '600',
    lineHeight: Height(28),
    paddingLeft: Width(12),
  },
  card_view: {
    flex: 0.95,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: Height(10),
    paddingHorizontal: Width(12),
  },
  message_card: {
    backgroundColor: '#F4F3F7',
    maxWidth: width * 0.6,
    alignSelf: 'flex-end',
    paddingHorizontal: Width(12),
    paddingVertical: Height(6),
    borderRadius: Height(8),
  },
  content_container: {
    rowGap: Height(15),
    marginTop: Height(15),
    paddingBottom: Height(40),
  },
  r_chat: {
    color: colors.on_surface_variant,
    fontSize: Font(13),
    fontWeight: '500',
    lineHeight: Height(16),
  },
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
    paddingHorizontal: Width(12),
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
  input_view_container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    columnGap: Width(6),
  },
  input_view: {
    flexDirection: 'row',
    paddingVertical: Height(10),
    paddingHorizontal: Width(16),
    borderWidth: Height(0.5),
    borderRadius: Height(40),
    borderColor: colors?.nuteral90,
    marginBottom: Height(15),
    flex: 1,
    alignItems: 'center',
  },
  input: {
    fontSize: Font(16),
    fontWeight: '400',
    lineHeight: Height(22),
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
    color: colors.black,
    maxHeight: Height(44),
    width: '100%',
  },
  send_message_icon: {
    height: Height(20),
    width: Height(20),
  },
  send_icon_wrapper: {
    backgroundColor: colors.primary,
    height: Height(44),
    width: Height(44),
    borderRadius: Height(44 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    // backgroundColor: 'red',
  },
});
