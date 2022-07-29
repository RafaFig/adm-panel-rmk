import { Routes, Route, Link } from 'react-router-dom';
import DashboardHomePage from './Dashboard/Home';

function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/home">Home</Link>
      <Link className="block" to="/dashboard/home">
        Dashboard Home
      </Link>

      <Routes>
        <Route path="home" element={<DashboardHomePage />} />
      </Routes>
    </>
  );
}

export default DashboardPage;
