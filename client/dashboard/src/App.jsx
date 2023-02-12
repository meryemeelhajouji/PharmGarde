import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  CommentairesPage,
  PharmaciesPage,
  LoginPage,
  ForgetPasswordPage,
  ResetPassword,
  AddPharmacyPage,
} from './pages';
import Layout from './components/dashboard/shared/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comments" element={<CommentairesPage />} />
          <Route path="pharmacies" element={<PharmaciesPage />} />
          <Route path="pharmacies/new" element={<AddPharmacyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
