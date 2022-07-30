/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */
import { SetStateAction, useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Client } from '@stomp/stompjs';
import useInterval from '../../../ChattingPage/hooks/useInterval';

function AddWorkSpace({
  client,
  setPage,
  userId,
} : {
    client:Client | null
    setPage :React.Dispatch<SetStateAction<string>>
    userId:string | false
  }) {
  const [markdown, setMarkdown] = useState<string>('');
  const [markEdit, setMarkEdit] = useState<string>('');
  const [isEdit, setIsEdit] = useState < boolean>(true);
  const [sendTime, setSendTime] = useState<number>(0);
  const subscribe = () => {
    if (client != null) {
      client.subscribe('/sub/workspace/test/0', ({ body }) => {
        const { username, content, workStatus } = JSON.parse(body);
        console.log(workStatus);
        if (workStatus === 'ENTER' || workStatus === 'LEAVE') {
          console.log(`${username} 님이 ${content}`);
        }
        if (workStatus === 'EDITING') {
          setMarkdown(content);
        }
      });
    }
  };
  const handler = (message: string, status:string) => {
    console.log(message);
    if (client != null) {
      if (!client.connected) return;
      const chatMessage = {
        workStatus: status,
        username: userId,
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
    }
  };
  useEffect(() => {
    subscribe();
  }, []);
  useInterval(() => {
    const sec = new Date().getTime();
    if (sendTime + 500 < sec && isEdit) {
      if (markEdit !== markdown) {
        handler(markEdit, 'EDITING');
        setSendTime(sec);
      }
    }
  }, 500);
  return (
    <article className="relative flex w-full pt-20 pl-10  min-h-screen">
      <button type="button" className="px-[12px] py-[8px] bg-slate-400 rounded-[8px] text-white absolute top-5 right-6" onClick={() => setPage('main')}>메인으로</button>
      <button type="button" className="px-[12px] py-[8px] bg-slate-400 rounded-[8px] text-white absolute top-5 right-28" onClick={() => setIsEdit(!isEdit)}>{isEdit ? '수정완료' : '수정하기'}</button>
      {isEdit ? (
        <div className="flex justify-center items-center w-[95%]">
          <MDEditor
            className="w-full mb-[160px] min-h-screen border"
            value={markEdit}
            onChange={(e) => {
              setMarkEdit(e || '');
            }}
          />
        </div>
      )
        : <div><MDEditor.Markdown source={markdown} /></div>}

    </article>
  );
}

export default AddWorkSpace;
