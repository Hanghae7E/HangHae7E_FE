/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

interface IChat {
  sender: string;
  content: string | '';
  type:string
}
let client: Client | null = null;
export default function ChattingPageContainer() {
  const [chatMessages, setChatMessages] = useState<Array<string>>([]);
  const [messageq, setMessageq] = useState<string>('');

  const subscribe = () => {
    if (client != null) {
      client.subscribe('/topic/public', ({ body }:{body:string}) => {
        const newMessage: IChat = JSON.parse(body) as IChat;
        console.log(newMessage);
        setChatMessages((chat) => [...chat, newMessage.content]);
      });
    }
  };
  const connect = () => {
    client = new Client({
      // brokerURL: 'ws://localhost:8080/moyobar/websocket',
      webSocketFactory() {
        return new SockJS('http://3.35.49.255/websocket');
      },
      debug(str) {
        console.log(str);
      },
      onConnect: () => {
        subscribe();
      },
    });

    client.activate();
  };
  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  const handler = (message: string) => {
    if (client != null) {
      if (!client.connected) return;
      const chatMessage = {
        sender: '장경태',
        content: message,
        type: 'CHAT',
      };
      client.publish({
        destination: '/app/chat.send',
        body: JSON.stringify(chatMessage),
      });
      setMessageq('');
    }
  };
  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  return (
    <div>
      {chatMessages && chatMessages.length > 0 && (
      <ul>
        {chatMessages.map((_chatMessage, index) => (
          <li key={index}>{_chatMessage}</li>
        ))}
      </ul>
      )}
      <div>
        <input
          type="text"
          placeholder="message"
          value={messageq}
          onChange={(e) => setMessageq(e.target.value)}
          onKeyPress={(e) => e.which === 13 && handler(messageq)}
        />
        <button type="button" onClick={() => handler(messageq)}>send</button>
      </div>
    </div>
  );
}
