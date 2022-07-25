/* eslint-disable implicit-arrow-linebreak */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import ProjectCreate from './Pages/ProjectCreate';
import SocialLogin from './Components/SocialLogin';
import ProtectedRoute from './Components/ProtectedRoute';
import Headerbar from './Components/Headerbar';
import userGetUserInfo from './Hooks/userGetUserInfo';
import ProjectUpdate from './Pages/ProjectUpdate';

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

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Headerbar userInfo={userInfo?.data?.data} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<ProtectedRoute redirectPath="/" />}>
          <Route
            path="/mypage"
            element={(
              <MyPage />
                )}
          />
          <Route
            path="/mypage/:id"
            element={(
              <MyPage />
                )}
          />
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
        <Route path="/detail/:postId" element={<DetailPage />} />
        <Route path="/login/callback" element={<SocialLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
