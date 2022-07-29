import { Routes, Route } from 'react-router-dom';
import DashboardPage from './routes/Dashboard';
import DashboardHomePage from './routes/Dashboard/Home';
import LoginRoute from './routes/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
        {/* <Route path="/dashboard">
        <Route path="" element={<DashboardPage />} />
        <Route path="home" element={<DashboardHomePage />} />
      </Route> */}
      </Routes>
    </>
  );
}

export default App;
