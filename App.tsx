import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import Chat from './src/screens/Chat/Chat';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {storage} from './src/helpers/storage';
import {generateRandomString} from './src/helpers/functions';

const App = () => {
  useEffect(() => {
    const user_name = storage.getString('user_name');
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

    if (!user_name) {
      storage.set('user_name', generateRandomString(10));
    }
  }, []);

  return (
    <SafeAreaProvider>
      <Chat />
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
