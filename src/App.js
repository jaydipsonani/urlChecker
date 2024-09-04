import './App.css';
import DeviceNameDisplay from './devicenameDisplay';
import InstallESimPage from './eSIMChecker';


import URLChecker from './urlChecker';

function App() {
  return (
    <div className="App">
        <URLChecker />
        <InstallESimPage />
        {/* <DeviceNameDisplay /> */}
    </div>
  );
}

export default App;
