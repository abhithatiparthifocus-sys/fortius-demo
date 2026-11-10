import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';
import CoachingPage from '@/pages/CoachingPage';
import CoachingSportPage from '@/pages/CoachingSportPage';
import CourtsPage from '@/pages/CourtsPage';
import DealsPage from '@/pages/DealsPage';
import HomePage from '@/pages/HomePage';
import MembershipPage from '@/pages/MembershipPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProgramPage from '@/pages/ProgramPage';
import ProShopPage from '@/pages/ProShopPage';
import ReferPage from '@/pages/ReferPage';
import SportPage from '@/pages/SportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courts" element={<CourtsPage />} />
          <Route path="courts/:sport" element={<SportPage />} />
          <Route path="coaching" element={<CoachingPage />} />
          <Route path="coaching/:sport" element={<CoachingSportPage />} />
          <Route path="coaching/:sport/:program" element={<ProgramPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="pro-shop" element={<ProShopPage />} />
          <Route path="refer" element={<ReferPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
