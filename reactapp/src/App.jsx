import { Routes, Route, Link } from 'react-router-dom';
import Companies from './Companies.jsx';
import Employees from './Employees.jsx';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Welcome</h1>
      <Link to="/companies">
        <button style={{ margin: 10, padding: 20, fontSize: 18 }}>Companies</button>
      </Link>
      <Link to="/employees">
        <button style={{ margin: 10, padding: 20, fontSize: 18 }}>Employees</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
}

export default App;
