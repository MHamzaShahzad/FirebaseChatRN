import {useCallback, useEffect, useState} from 'react';
import {storage} from '../../helpers/storage';
import moment from 'moment';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Message_interface} from './interface';
import Toast from 'react-native-toast-message';

const useChat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [typeMessage, setTypeMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] =
    useState<null | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>>(
      null,
    );
  const [page, setpage] = useState(1);

  const sendMessage = useCallback(() => {
    if (typeMessage.length > 0) {
      const newMessage = {
        message: typeMessage,
        deliver_by: storage.getString('user_name') ?? 'user 123',
        time_stamp: moment.now(),
        delivered: false,
        id: Date.now(),
        deleted: 0,
      };
      setMessages(pre => [newMessage, ...pre]);
      setTypeMessage('');
    }
  }, [typeMessage]);

  const loadMore = async () => {
    try {
      if (!loading) {
        setpage(pre => pre + 1);
        if (messages.length >= page * 20) {
          setLoading(true);
          const res = await firestore()
            .collection('room')
            .orderBy('time_stamp', 'desc')
            .where('deleted', '==', 0)
            .startAfter(lastDoc)
            .limit(20)
            .get();
          const data: Message_interface[] = [];
          (res.docs ?? [])?.forEach(doc => {
            data.push({
              uuid: `${doc?.id}`,
              ...doc.data(),
            });
          });
          setLoading(false);
          setMessages(pre => [...pre, ...data]);
          if (res.docs.length > 0) {
            setLastDoc(res.docs[res.docs.length - 1]);
          }
        }
      }
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        text1: 'Load more messages',
        text2: error?.message,
        type: 'error',
      });
    }
  };

  const getMessages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await firestore()
        .collection('room')
        .orderBy('time_stamp', 'desc')
        .where('deleted', '==', 0)
        .limit(20)
        .get();
      const data: Message_interface[] = [];
      (res.docs ?? [])?.forEach(doc => {
        data.push({
          uuid: `${doc?.id}`,
          ...doc.data(),
        });
      });
      setLastDoc(res.docs[res.docs.length - 1]);
      setLoading(false);
      setMessages(data);
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        text1: 'Get messages',
        text2: error?.message,
        type: 'error',
      });
    }
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    let subscriber = () => {};
    if (!loading) {
      subscriber = firestore()
        .collection('room')
        .orderBy('time_stamp', 'desc')
        .where('deleted', '==', 0)
        .limit(1)
        .onSnapshot(documentSnapshot => {
          const data: Message_interface[] = [];
          (documentSnapshot ?? [])?.forEach(doc => {
            data.push({
              uuid: `${doc.id}`,
              ...doc.data(),
            });
          });
          console.log("Data lENGTH: " + data.length)
          if (data.length > 0) {
            const upComing = data[0];
            if (
                  upComing?.deliver_by !== storage.getString('user_name')
                ) {
            setMessages((prevMessages) => {
              const lastMessage = prevMessages[0];
              if (lastMessage?.uuid !== upComing?.uuid) {
                return [upComing, ...prevMessages];
              } else {
                return prevMessages;
              }
            });
          }
          }
          // if (data.length > 0) {
          //   const upComing = data[0];
          //   if (
          //     upComing?.deliver_by !== storage.getString('user_name') &&
          //     upComing?.uuid !== lastDoc?.id
          //   ) {
          //     setMessages(pre => {
          //       const lastMessage = [...pre];
          //       if (lastMessage.pop()?.uuid !== upComing?.uuid) {
          //         return [data[0], ...pre];
          //       } else {
          //         return pre;
          //       }
          //     });
          //   }
          // }
        });
    }
    return () => subscriber();
  }, [loading, lastDoc]);

  return {
    messages,
    sendMessage,
    typeMessage,
    loading,
    setMessages,
    setTypeMessage,
    loadMore,
  };
};

export default useChat;
