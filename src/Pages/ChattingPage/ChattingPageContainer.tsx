/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { useLocation } from 'react-router-dom';
import useInterval from './hooks/useInterval';

interface ITeamPageSub{
    workStatus: string,
    username: string,
    content: string,
    uuid: string,
    title: string,
    workSpaceId: number,
}
interface ISate{
  client:Client;
}
export default function ChattingPageContainer() {
  const [chatMessages, setChatMessages] = useState<string>();
  const [messageq, setMessageq] = useState<string>('');
  const [sendTime, setSendTime] = useState<number>(0);

  const loaction = useLocation();
  const client = loaction.state as ISate;

  const handler = (message: string, status:string) => {
    if (client != null) {
      if (!client.client.connected) return;
      console.log(message);
      const chatMessage = {
        workStatus: status,
        username: '장경태',
        content: message,
        contentType: 'application/json',
        uuid: 'test',
        title: 'test',
        workSpaceId: 0,
      };
      client.client.publish({
        destination: '/pub/workspace',
        body: JSON.stringify(chatMessage),
      });
    }
  };

  return (
    <div>
      {chatMessages && chatMessages.length > 0 && (
      <ul>
        {chatMessages}

      </ul>
      )}
      <div>
        <textarea
          placeholder="message"
          value={messageq}
          onChange={(e) => {
            setMessageq(e.target.value);
          }}
        />
        <button type="button" onClick={() => handler(messageq, 'EDITING')}>send</button>
      </div>
    </div>
  );
}
