import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, CommentairesPage, PharmaciesPage, LoginPage, ForgetPasswordPage } from './pages';
import Layout from './components/dashboard/shared/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comments" element={<CommentairesPage />} />
          <Route path="pharmacies" element={<PharmaciesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
