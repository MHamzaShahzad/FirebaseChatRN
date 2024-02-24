import React, {useEffect} from 'react';
import {AppState} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {storage} from '../../helpers/storage';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import {props} from './interface';

const HandleAppState: React.FC<props> = ({setMessages}) => {
  useEffect(() => {
    const listner = AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      listner.remove();
    };
  }, []);

  const _handleAppStateChange = async (nextAppState: string) => {
    if (nextAppState.match(/background/)) {
      setMessages([]);
      storage.set('showAlert', 'true');
      const res = await firestore()
        .collection('room')
        .where('deliver_by', '==', storage.getString('user_name'))
        .get();

      res.docs.map(doc => doc.ref.update({deleted: moment.now()}));
    } else if (nextAppState.match(/active/)) {
      const alert = storage.getBoolean('showAlert');
      if (alert) {
        setTimeout(() => {
          Toast.show({
            text1: 'Messages deleted successfully',
            text2: 'All your sent messages have been deleted',
            type: 'success',
          });
          storage.delete('showAlert');
        }, 1500);
      }
    }
  };

  return null;
};

export default HandleAppState;
