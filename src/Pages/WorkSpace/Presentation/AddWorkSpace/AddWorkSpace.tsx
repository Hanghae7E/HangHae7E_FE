/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */
import { SetStateAction, useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Client } from '@stomp/stompjs';
import useInterval from '../../hooks/useInterval';

function AddWorkSpace({
  client,
  setPage,
  userId,
  isEdit,
  workSpaceId,
  setIsEdit,
} : {
    client:Client | null
    setPage :React.Dispatch<SetStateAction<string>>
    userId:string | false,
    isEdit:boolean,
    workSpaceId:number,
    setIsEdit:React.Dispatch<SetStateAction<boolean>>
  }) {
  const [markdown, setMarkdown] = useState<string>('');
  const [markEdit, setMarkEdit] = useState<string>('');
  const [sendTime, setSendTime] = useState<number>(0);
  const subUrl = '/sub/workspace/test/0';
  const subscribe = () => {
    if (client != null) {
      console.log(workSpaceId);
      client.subscribe(subUrl, ({ body }) => {
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
  const unsubscribe = () => {
    if (client != null) {
      console.log(workSpaceId);
      client.unsubscribe(subUrl);
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
    window.scrollTo(0, 0);
    return () => {
      unsubscribe();
    };
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

      {isEdit ? (
        <div className="flex flex-col justify-center w-[95%]">
          <MDEditor
            className="w-full min-h-[600px] border"
            value={markEdit}
            onChange={(e) => {
              setMarkEdit(e || '');
            }}
          />
          <button type="button" className="px-[12px] py-[8px] bg-slate-400 rounded-[8px] text-white mb-[160px] " onClick={() => setIsEdit(!isEdit)}>{isEdit ? '수정완료' : '수정하기'}</button>
        </div>

      )
        : <div><MDEditor.Markdown source={markdown} /></div>}

    </article>
  );
}

export default AddWorkSpace;
