/* eslint-disable implicit-arrow-linebreak */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Headerbar from '@/Components/Headerbar';
import NotFound from '@/Components/NotFound';
import ProtectedRoute from '@/Components/ProtectedRoute';
import SocialLogin from '@/Components/SocialLogin';

import userGetUserInfo from '@/Hooks/userGetUserInfo';

import DetailPage from '@/Pages/DetailPage';
import MainPage from '@/Pages/MainPage';
import MainFooter from '@/Pages/MainPage/Presentaion/MainFooter';
import MyPage from '@/Pages/MyPage';
import ProjectCreate from '@/Pages/ProjectCreate';
import ProjectUpdate from '@/Pages/ProjectUpdate';

const GlobalStyle = createGlobalStyle`
*{
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
function App() {
  const userInfo = userGetUserInfo();
  if (userInfo?.status === 'loading') { return (<div>loading...</div>); }
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Headerbar userInfo={userInfo?.data?.data} />
      <Routes>
        <Route path="/" element={<MainPage userInfo={userInfo?.data?.data} />} />
        <Route element={<ProtectedRoute redirectPath="/" />}>
          <Route
            path="/mypage"
            element={(
              <MyPage />
            )}
          >
            <Route
              path=":id"
              element={(
                <MyPage />
              )}
            />
          </Route>
          <Route
            path="/projectcreate"
            element={(
              <ProjectCreate />
            )}
          />
          <Route
            path="/projectupdate"
            element={(
              <ProjectUpdate />
            )}
          >
            <Route
              path=":postId"
              element={(
                <ProjectUpdate />
            )}
            />
          </Route>
        </Route>
        <Route path="/detail/:postId" element={<DetailPage userInfo={userInfo?.data?.data} />} />
        <Route path="/login/callback" element={<SocialLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
