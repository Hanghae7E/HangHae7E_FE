/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
import { useQuery } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import ProjectCreate from './Pages/ProjectCreate';
import messageApi from './Api/messageApi';

function App() {
  // Initialize Firebase Cloud Messaging and get a reference to the service

  useQuery('notify_token', messageApi, {
    onSuccess: (test) => {
      localStorage.setItem('notification_token', test);
    },
  });
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/projectcreate" element={<ProjectCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
