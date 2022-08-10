/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import jwtUtils from '../../util/JwtUtil';
import WorkSpaceMain from './Presentation/Main/WorkSpaceMain';
import AddWorkSpace from './Presentation/AddWorkSpace/AddWorkSpace';
import CreateWorkContent from './Presentation/WorkContent/CreateWorkContent';
import WorkDetailModal from './Presentation/WorkContent/WorkDetailModal';
import useWorkModalSate from './hooks/useWorkModalSate';
import WorkLinkModal from './Presentation/WorkContent/WorkLinkModal';
import workSpaceApi from '../../Api/workSpaceApi';
import useWorkInfiniteScrollQuery from './hooks/useWorkInfiniteScrollQuery';

let client: Client | null = null;
export default function WorkSpaceContainer() {
  const token = localStorage.getItem('token');
  const [searchParams] = useSearchParams();
  const userId = jwtUtils.getId(token);
  const [page, setPage] = useState<string>('main');
  const [uuid, setUuid] = useState<string>('');
  const [isEdit, setIsEdit] = useState < boolean>(false);
  const query = useQueryClient();
  const [ref, isView] = useInView();
  const nav = useNavigate();

  const { data: TeamPageInfo } = useQuery('TeamPageInfo', () => workSpaceApi.geTeamPageInfo(1), {
    onSuccess: (v) => {
      if (client === null) {
        client = new Client({
        // brokerURL: 'ws://localhost:8080/moyobar/websocket',
          webSocketFactory() {
            return new SockJS('http://southoftheriver.iptime.org:8080/websocket');
          },
          debug(str) {
            console.log(str);
          },
          onConnect: () => {
            subscribe(v.data.uuid);
            setUuid(v.data.uuid);
            handler('접속하셨습니다.', 'ENTER', v.data.uuid);
          },
        });
      }
    },
  });

  const {
    getWork, getNextPage,
    getBoardIsSuccess, getNextPageIsPossible,
  } = useWorkInfiniteScrollQuery(1);

  const createWorkSpace = useMutation((projectId:number) => workSpaceApi.postWorkSpace(projectId), {
    onSuccess: (v) => {
      query.invalidateQueries('workSpace');
      nav(`/workSpace?page=회의록&workspace=${v.data}`);
      setIsEdit(true);
    },
  });
  const updateWorkSpace = useMutation(({
    projectId, workspaceId, title, content,
  }:{
    projectId:number,
    workspaceId:number,
    title:string,
    content:string
  }) => workSpaceApi.putWorkSpaceDetail(projectId, workspaceId, title, content), {
    onSuccess: () => {
      query.invalidateQueries('workSpaceDetail');
      query.invalidateQueries('workSpace');
      setIsEdit(false);
    },
  });
  const subscribe = (uuids:string) => {
    if (client !== null) {
      client.subscribe(`/sub/workspace/${uuids}`, ({ body }) => {
        const {
          username, content, workStatus,
        } = JSON.parse(body);
        if (workStatus === 'ENTER' || workStatus === 'LEAVE') {
          console.log(`${username} 님이 ${content}`);
        }
      });
    }
  };
  const handler = (message: string, status:string, uuids:string) => {
    if (client != null) {
      if (!client.connected) return;
      const chatMessage = {
        workStatus: status,
        username: userId,
        content: message,
        contentType: 'application/json',
        uuid: uuids,
        title: 'test',
        workSpaceId: 0,
        Authorization: token || '',
      };
      client.publish({
        destination: '/pub/workspace',
        body: JSON.stringify(chatMessage),
      });
    }
  };

  const {
    open: openDetailModal,
    close: closeModal,
    data: propsUsername,
    isOpen: isOpenedModal,
  } = useWorkModalSate();
  const {
    open: openLinkModal,
    close: closeLinkModal,
    data: propsLinkUsername,
    isOpen: isOpenedLinkModal,
  } = useWorkModalSate();

  const disConnect = (status:string) => {
    if (client != null) {
      handler('접속을 끊었습니다.', status, uuid);
      if (client.connected) client.deactivate();
    }
  };
  useEffect(() => {
    const paramPage = searchParams.get('page');
    if (paramPage) {
      setPage(paramPage);
    } else {
      setPage('main');
    }
  }, [searchParams]);
  useEffect(() => {
    if (client !== null) { client.activate(); }
    return () => {
      disConnect('LEAVE');
    };
  }, [client]);

  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getWork]);

  return (
    <div className="workSpaceComponent flex flex-col max-w-7xl mx-auto w-full min-h-[1282px]">
      {client !== null ? (
        <>
          {page === 'main' && TeamPageInfo && getWork && getBoardIsSuccess && (
          <WorkSpaceMain
            workSpaceInfo={TeamPageInfo?.data}
            getWorkSpace={getWork.pages}
            createWorkSpace={createWorkSpace}
            client={client}
            setIsEdit={setIsEdit}
            openDetailModal={openDetailModal}
            openLinkModal={openLinkModal}
            nav={nav}
          />
          )}
          {page === '회의록'
          && (
          <AddWorkSpace
            client={client}
            userId={userId}
            updateWorkSpace={updateWorkSpace}
            uuid={uuid}
            workSpaceId={searchParams}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            token={token}
          />
          )}
          {page === '작업' && <CreateWorkContent setPage={setPage} />}
          {isOpenedModal && (
          <WorkDetailModal
            close={closeModal}
            isOpen={isOpenedModal}
            data={propsUsername}
          />
          )}
          {isOpenedLinkModal
      && (
      <WorkLinkModal
        close={closeLinkModal}
        isOpen={isOpenedLinkModal}
        data={propsLinkUsername}
      />
      )}
        </>
      )
        : <div>소켓이 없습니다.</div>}
      <div ref={ref} />
    </div>
  );
}
