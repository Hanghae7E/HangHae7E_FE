import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import ProjectCreate from './Pages/ProjectCreate';

function App() {
  const queryClient = new QueryClient();
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
