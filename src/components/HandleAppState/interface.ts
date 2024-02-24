import React, {SetStateAction} from 'react';
import {Message_interface} from '../../screens/Chat/interface';

export interface props {
  setMessages: React.Dispatch<SetStateAction<Message_interface[]>>;
}
