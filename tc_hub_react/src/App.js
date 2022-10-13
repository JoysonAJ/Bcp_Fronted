import './App.css';
import {Route,Routes} from 'react-router-dom';
import {NAVBAR} from './assets/modules/Admin_navbar';
import {ADMIN_HOME} from './assets/pages/Admin_home';

function App() {
  return (
    <Routes>
          <Route exact path="/" element={<ADMIN_HOME/>}/>
          <Route exact path="/nav" element={<NAVBAR/>}/>
        </Routes>
  );
}

export default App;
