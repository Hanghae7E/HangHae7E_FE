/* eslint-disable react/no-array-index-key */
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';

export default function ChattingPageContainer() {
  const [chatMessages, setChatMessages] = useState<Array<string>>([]);
  const [message, setMessage] = useState<string>('');
  const client = new StompJs.Client({
    // brokerURL: 'ws://15.164.171.58/websocket', // 웹소켓 서버로 직접 접속
    webSocketFactory: () => new SockJS('http://3.35.49.255/websocket'), // proxy를 통한 접속
    debug(str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    onConnect: () => {
      client.subscribe('/topic/public', ({ body }) => {
        console.log(body);
        // setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
      });
      const chatMessage = {
        sender: '장경태',
        type: 'JOIN',
      };
      client.publish({
        destination: '/app/chat.register',
        body: JSON.stringify(chatMessage),
      });
    },
    onStompError: (frame) => {
      console.error(frame);
    },
  });

  const disconnect = () => {
    client.deactivate();
  };

  const publish = (m: string) => {
    console.log(client.connected);
    if (!client.connected) {
      return;
    }

    const chatMessage = {
      sender: '장경태',
      content: m,
      type: 'CHAT',
    };
    client.publish({
      destination: '/app/chat.send',
      body: JSON.stringify(chatMessage),
    });

    setMessage('');
  };
  useEffect(() => {
    if (!client.connected) {
      client.activate();
    }
    return () => disconnect();
  }, [message]);

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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)}
        />
        <button type="button" onClick={() => publish(message)}>send</button>
      </div>
    </div>
  );
}
