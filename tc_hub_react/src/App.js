import './App.css';
import {Route,Routes} from 'react-router-dom';
import {NAVBAR} from './assets/modules/Admin_navbar';
import {ADMIN_HOME} from './assets/pages/Admin_home';
import { Community } from './assets/modules/Community';
import { TABLE } from './assets/modules/table_design';

function App() {
  return (
    <Routes>
          <Route exact path="/" element={<ADMIN_HOME/>}/>
          <Route exact path="/nav" element={<NAVBAR/>}/>
          <Route exact path='/table' element={<TABLE />}/>
          <Route path="/community" element={<Community />}/>
        </Routes>
  );
}

export default App;
