import {View, Text, Image} from 'react-native';
import React, {SetStateAction, useCallback, useEffect, useState} from 'react';
import AppText from '../AppText/AppText';
import moment from 'moment';
import {styles} from './styles';
import {Height} from '../../helpers/scalling';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import colors from '../../theme/colors';
import icons from '../../assets/icons';
import firestore from '@react-native-firebase/firestore';
import {storage} from '../../helpers/storage';
import {Message_interface} from '../../screens/Chat/interface';
import Toast from 'react-native-toast-message';

interface props {
  item: Message_interface;
  setMessages: React.Dispatch<SetStateAction<Message_interface[]>>;
}

const Message: React.FC<props> = ({item, setMessages}) => {
  const left = storage.getString('user_name') !== item?.deliver_by;
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState('');

  const sendMessage = async () => {
    try {
      setLoading(true);
      const messageToBoStored = {...item, delivered: true};
      const message = await firestore()
        .collection('room')
        .add(messageToBoStored);
      const uuid = message.id;
      console.log("Msg: ", messageToBoStored);
      setMessages(pre =>
        pre.map(msg =>
          msg?.time_stamp === item?.time_stamp
            ? {...messageToBoStored, uuid: uuid}
            : msg,
        ),
      );
    } catch (error: any) {
      seterror(error?.message);
      Toast.show({
        text1: 'Send messages',
        text2: error?.message,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!item?.uuid && !loading) {
      sendMessage();
    }
  }, [item]);

  return (
    <View>
      <View
        style={left ? styles.s_message_container : styles.r_message_container}>
        {left ? (
          <Image
            source={icons?.default_profile}
            style={styles.receive_user_icon}
          />
        ) : (
          <View></View>
        )}
        <View style={left ? styles.message_card : styles.received_message}>
          <AppText style={left ? styles.r_chat : styles.s_chat}>
            {item?.message}
          </AppText>
          <View
            style={left ? styles.right_time_container : styles.time_container}>
            <AppText style={left ? styles.right_time : styles.message_time}>
              {moment(item?.time_stamp).format('h:mm A')}
            </AppText>
            {loading && (
              <Icon
                type={IconType.MaterialCommunityIcons}
                name="clock-time-three-outline"
                color={colors.nuteral90}
                size={Height(8)}
                style={styles.loading_icon}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Message;
