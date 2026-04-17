import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Topic from './pages/Topic';
import Sandbox from './pages/Sandbox';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/topic/:topicId" element={<Topic />} />
          <Route path="/lesson/:topicId/:lessonId" element={<Lesson />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
