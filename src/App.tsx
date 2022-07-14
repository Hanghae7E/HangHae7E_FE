/* eslint-disable implicit-arrow-linebreak */
import { QueryClient,QueryClientProvider } from 'react-query';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import ProjectCreate from './Pages/ProjectCreate';
import SocialLogin from './Components/SocialLogin';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail/:postId" element={<DetailPage />} />
          <Route path="/projectcreate" element={<ProjectCreate />} />
          <Route path="/login/callback" element={<SocialLogin />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
