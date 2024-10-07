import About from '@/modules/about/page';
import Chat from '@/modules/chat/page';
import { Layout } from '@/modules/core/layout/Layout';
import Home from '@/modules/home/page';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/chat' element={<Chat />} />
      </Route>
      <Route path='*' element={<div className='mainSec' />} />
    </Routes>
  </>
);

export default AppRoutes;
