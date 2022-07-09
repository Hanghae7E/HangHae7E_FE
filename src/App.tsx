import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import ProjectCreate from './Pages/ProjectCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:postId" element={<DetailPage />} />
        <Route path="/projectcreate" element={<ProjectCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
