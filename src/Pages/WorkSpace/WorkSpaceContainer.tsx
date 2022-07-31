/* eslint-disable no-console */
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

import { useEffect, useState } from 'react';
import jwtUtils from '../../util/JwtUtil';
import WorkSpaceMain from './Presentation/Main/WorkSpaceMain';
import AddWorkSpace from './Presentation/AddWorkSpace/AddWorkSpace';
import CreateWorkContent from './Presentation/WorkContent/CreateWorkContent';
import WorkDetailModal from './Presentation/WorkContent/WorkDetailModal';
import useWorkModalSate from './hooks/useWorkModalSate';
import WorkLinkModal from './Presentation/WorkContent/WorkLinkModal';

let client: Client | null = null;
export default function WorkSpaceContainer() {
  const token = localStorage.getItem('token');
  const userId = jwtUtils.getId(token);
  const [page, setPage] = useState<string>('main');
  const [workSpaceId, setWorkSpaceId] = useState<number>(0);
  const [isEdit, setIsEdit] = useState < boolean>(false);
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
  const subscribe = () => {
    if (client != null) {
      client.subscribe('/sub/workspace/test', ({ body }) => {
        const { username, content, workStatus } = JSON.parse(body);
        console.log(workStatus);
        if (workStatus === 'ENTER' || workStatus === 'LEAVE') {
          console.log(`${username} 님이 ${content}`);
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
        handler('접속하셨습니다.', 'ENTER');
      },
    });

    client.activate();
  };

  const disConnect = (status:string) => {
    if (client != null) {
      handler('접속을 끊었습니다.', status);
      if (client.connected) client.deactivate();
    }
  };
  useEffect(() => {
    connect();

    return () => {
      disConnect('LEAVE');
    };
  }, []);

  return (
    <div className="workSpaceComponent flex flex-col max-w-7xl mx-auto w-full ">
      {page === 'main' && (
      <WorkSpaceMain
        client={client}
        setPage={setPage}
        setWorkSpaceId={setWorkSpaceId}
        setIsEdit={setIsEdit}
        openDetailModal={openDetailModal}
        openLinkModal={openLinkModal}
      />
      )}
      {page === '회의록' && <AddWorkSpace client={client} setPage={setPage} userId={userId} workSpaceId={workSpaceId} isEdit={isEdit} setIsEdit={setIsEdit} />}
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
    </div>
  );
}
