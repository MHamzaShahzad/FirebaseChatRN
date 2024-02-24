import {
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import colors from '../../theme/colors';
import Message from '../../components/Message/Message';
import AppHeader from '../../components/AppHeader/AppHeader';
import icons from '../../assets/icons';
import {useKeyboard} from '../../helpers/useKeyboard';
import AppText from '../../components/AppText/AppText';
import useChat from './useChat';
import HandleAppState from '../../components/HandleAppState/HandleAppState';
import {storage} from '../../helpers/storage';

const Chat = () => {
  const {height} = useKeyboard();
  const {
    loading,
    messages,
    setMessages,
    sendMessage,
    typeMessage,
    setTypeMessage,
    loadMore,
  } = useChat();

  return (
    <View style={[styles.root, {paddingBottom: height}]}>
      <HandleAppState setMessages={setMessages} />
      <AppHeader
        left={
          <View style={styles.title_container}>
            <Image source={icons.default_profile} style={styles.user_icon} />
            <AppText style={styles.user_name}>
              {storage.getString('user_name')}
            </AppText>
          </View>
        }
      />
      <View style={styles.card_view}>
        <FlatList
          data={messages}
          keyExtractor={(_data, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content_container}
          ListFooterComponent={
            <View style={styles.footer}>
              {loading && (
                <ActivityIndicator size={'small'} color={colors.primary} />
              )}
            </View>
          }
          onEndReached={loadMore}
          inverted
          renderItem={({item, index}) => {
            return <Message setMessages={setMessages} item={item} />;
          }}
        />
        <View style={styles.input_view_container}>
          <View style={styles.input_view}>
            <TextInput
              onChangeText={setTypeMessage}
              placeholder="Type a message"
              style={styles.input}
              value={typeMessage}
              multiline
              placeholderTextColor={colors.nuteral60}
            />
          </View>
          <TouchableOpacity
            onPress={sendMessage}
            style={styles.send_icon_wrapper}>
            <Image source={icons.send} style={styles.send_message_icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;
