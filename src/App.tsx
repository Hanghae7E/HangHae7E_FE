import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import ProjectCreate from './Pages/ProjectCreate';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/projectcreate" element={<ProjectCreate />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
