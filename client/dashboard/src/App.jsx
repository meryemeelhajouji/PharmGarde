import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  CommentairesPage,
  PharmaciesPage,
  ReglagesPage,
} from './pages/dashboard/indexDashboard'
import Layout from './components/dashboard/shared/Layout';

function App() {
  return (
    <>
    
        <Routes>
        // Syndicat url = admin Dash Component
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="Commentaires" element={<CommentairesPage />} />
              <Route path="Pharmacies" element={<PharmaciesPage />} />
              <Route path="reglage" element={<ReglagesPage />} />
            </Route>
        </Routes>
     
    </>
  );
}

export default App;
