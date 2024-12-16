import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import DeviceNameDisplay from './devicenameDisplay';
import InstallESimPage from './eSIMChecker';
import URLChecker from './urlChecker';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{listStyle:'none'}}>
            <li style={{textDecoration:'none'}}>
              <Link to="/">URL Checker</Link>
            </li>
            <li>
              <Link to="/install-esim">Install eSIM</Link>
            </li>
            <li>
              <Link to="/device-name">Device Name Display</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<URLChecker />} />
          <Route path="/install-esim" element={<InstallESimPage />} />
          <Route path="/device-name" element={<DeviceNameDisplay />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
