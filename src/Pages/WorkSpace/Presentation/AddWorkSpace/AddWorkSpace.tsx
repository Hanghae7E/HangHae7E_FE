/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */
import { SetStateAction, useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Client } from '@stomp/stompjs';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { UseMutationResult, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import useInterval from '../../hooks/useInterval';
import { dateFormat } from '../../../../util/util';
import workSpaceApi from '../../../../Api/workSpaceApi';

function AddWorkSpace({
  client,
  userId,
  uuid,
  isEdit,
  workSpaceId,
  updateWorkSpace,
  setIsEdit,
} : {
    client:Client | null
    userId:string | false,
    uuid:string
    isEdit:boolean,
    workSpaceId:URLSearchParams,
    updateWorkSpace:UseMutationResult<AxiosResponse<any, any>, unknown, {
      projectId: number;
      workspaceId: number;
      title: string;
      content: string;
  }, unknown>
    setIsEdit:React.Dispatch<SetStateAction<boolean>>
  }) {
  const nowWorkSpaceId = Number(workSpaceId.get('workspace'));
  const [markdown, setMarkdown] = useState<string>('');
  const [markEdit, setMarkEdit] = useState<string>('');
  const [sendTime, setSendTime] = useState<number>(0);
  const { data: workSpaceDetail } = useQuery('workSpaceDetail', () => workSpaceApi.getWorkSpaceDetail(1, nowWorkSpaceId));
  const [defaultTitle, setDefaultTitle] = useState<string>('');
  const [sockTitle, setSockTitle] = useState<string>('');
  const [userEdit, setUserEdit] = useState<boolean>(false);
  const subUrl = `/sub/workspace/${uuid}/${nowWorkSpaceId}`;
  const subscribe = () => {
    if (client != null) {
      client.subscribe(subUrl, ({ body }) => {
        const {
          username, content, workStatus, title,
        } = JSON.parse(body);
        console.log(body);
        if (workStatus === 'ENTER' || workStatus === 'LEAVE') {
          console.log(`${username} 님이 ${content}`);
        }
        if (workStatus === 'EDITING') {
          setMarkdown(content);
          setSockTitle(title);
        }
        if (workStatus === 'EDIT') {
          console.log(`${username} 님이 ${content}`);
          setUserEdit(true);
        }
        if (workStatus === 'FINISH') {
          console.log(`${username} 님이 ${content}`);
          setUserEdit(false);
        }
      });
    }
  };

  const unsubscribe = () => {
    if (client != null) {
      client.unsubscribe(subUrl);
    }
  };
  const handler = (status:string, title?:string, message?: string) => {
    if (client != null) {
      if (!client.connected) return;

      const chatMessage = {
        workStatus: status,
        username: userId,
        content: message,
        contentType: 'application/json',
        uuid,
        title,
        workSpaceId: nowWorkSpaceId,
      };
      console.log(chatMessage);
      client.publish({
        destination: '/pub/workspace',
        body: JSON.stringify(chatMessage),
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (workSpaceDetail) {
      setDefaultTitle(workSpaceDetail.data.title);
      setSockTitle(workSpaceDetail.data.title);
      setMarkEdit(workSpaceDetail.data.content);
      setMarkdown(workSpaceDetail.data.content);
      subscribe();
    }
    return () => {
      unsubscribe();
    };
  }, [workSpaceDetail]);
  useInterval(() => {
    const sec = new Date().getTime();
    if (sendTime + 500 < sec && isEdit) {
      if (markEdit || defaultTitle) {
        if (markEdit !== markdown) {
          handler('EDITING', defaultTitle, markEdit);
          setSendTime(sec);
        }
        if (sockTitle !== defaultTitle) {
          console.log(sockTitle, ':', defaultTitle);
          handler('EDITING', defaultTitle, markEdit);
          setSendTime(sec);
        }
      }
    }
  }, 500);
  return (
    <article className="relative flex w-full pt-20 pl-10  min-h-screen">

      {isEdit ? (
        <div className="w-full max-w-[1280px] ">
          <h2 className="text-4xl font-extrabold">게시글 작성하기</h2>
          <div className="flex flex-col justify-center w-full my-[60px]">
            <input
              className="h-16 border-[2px] border-[#DFE1E5] text-[28px] font-bold pl-4 rounded-lg"
              type="text"
              defaultValue={defaultTitle}
              onChange={(e) => {
                setDefaultTitle(e.target.value);
              }}
              placeholder="제목을 입력하세요."
            />
            <MDEditor
              className="w-full min-h-[600px] border rounded-lg mt-5"
              value={markEdit}
              onChange={(e) => {
                setMarkEdit(e || '');
              }}
              inputMode="text"
              previewOptions={
              {
                rehypePlugins: [rehypeSanitize],
                remarkPlugins: [remarkGfm],
              }
            }
            />
            <div className="flex w-full justify-center items-center gap-5 mt-16">
              <button type="button" className="flex w-60 border-[2px] text-[#6457FA] border-[#6457FA] py-3 rounded-xl justify-center bg-white font-semibold cursor-pointer">뒤로가기</button>
              <button
                type="button"
                onClick={() => {
                  // setIsEdit(!isEdit)
                  handler('FINISH', '수정을 종료하였습니다.', '수정종료');
                  updateWorkSpace.mutate({
                    projectId: 1,
                    workspaceId: nowWorkSpaceId,
                    title: defaultTitle,
                    content: markEdit,
                  });
                }}
                className="flex w-60 border-[2px] text-white
              border-[#6457FA] py-3 rounded-xl justify-center
               bg-[#6457FA] font-semibold cursor-pointer"
              >
                수정완료

              </button>
            </div>
          </div>
        </div>

      )
        : (
          <div className="max-w-[1062px] border w-full">
            <div>
              <span className="font-pre font-medium px-[12px] py-[8px]  bg-[#EEEEEE] rounded-lg">{dateFormat(new Date(workSpaceDetail?.data.createdAt), 2)}</span>
              <h2 className="text-[28px] font-bold leading-8 mt-[20px]">{defaultTitle}</h2>
              <hr className="my-[40px]" />
            </div>
            <MDEditor.Markdown
              rehypePlugins={[rehypeSanitize]}
              remarkPlugins={[remarkGfm]}
              source={markdown}
            />
            <div className="flex w-full justify-center items-center gap-5 mt-16">
              <button
                type="button"
                onClick={() => {
                  handler('FINISH', '수정을 종료하였습니다.', '수정종료');
                // setIsEdit(!isEdit);
                }}
                className="flex w-60 border-[2px] text-[#6457FA] border-[#6457FA] py-3 rounded-xl justify-center bg-white font-semibold cursor-pointer"
              >
                뒤로가기

              </button>
              <button
                type="button"
                onClick={() => {
                  handler('EDIT', '수정을 시작합니다.', '수정');
                  // setIsEdit(!isEdit);
                }}
                disabled={userEdit}
                className="flex w-60 border-[2px] text-white border-[#6457FA] py-3 rounded-xl justify-center bg-[#6457FA] font-semibold cursor-pointer"
              >
                {!userEdit ? '수정하기' : '수정중입니다.'}

              </button>
            </div>
          </div>
        )}

    </article>
  );
}

export default AddWorkSpace;
