/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

interface IChat {
  sender: string;
  message: string | '';
  type:string
}
interface ITeamPage{
    workStatus: string,
    username: string,
    content: string,
    uuid: string,
    title: string,
    workSpaceId: number,
}

interface ITeamPageSub{
    workStatus: string,
    username: string,
    content: string,
    title: string,
    workSpaceId: number,
}

let client: Client | null = null;
export default function ChattingPageContainer() {
  const [chatMessages, setChatMessages] = useState<Array<string>>([]);
  const [messageq, setMessageq] = useState<string>('');

  const subscribe = () => {
    if (client != null) {
      client.subscribe('/sub/workspace/test', ({ body }:{body:string}) => {
        console.log(body);
        const newMessage: ITeamPageSub = JSON.parse(body) as ITeamPageSub;
        console.log(newMessage);
        setChatMessages((chat) => [...chat, newMessage.content]);
      });
    }
  };
  const connect = () => {
    client = new Client({
      // brokerURL: 'ws://localhost:8080/moyobar/websocket',
      webSocketFactory() {
        return new SockJS('http://southoftheriver.iptime.org:8080/websocket');
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
      console.log(message);
      const chatMessage = {
        workStatus: 'ENTER',
        username: '장경태',
        content: message,
        contentType: 'application/json',
        uuid: 'test',
        title: 'test',
        workSpaceId: 0,
      };
      client.publish({
        destination: '/pub/workspace',
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
