import './App.css';
import {Route,Routes} from 'react-router-dom';
import {ADMIN_HOME} from './assets/pages/Admin_home';
import { Community } from './assets/modules/Community';
import { TABLE } from './assets/modules/table_design';
import { UserNav } from './assets/modules/User_navbar';
import { UserHome } from './assets/pages/User_home';
import { AboutUs } from './assets/pages/About_us';
import { UserSignIn } from './assets/pages/User_signin';
import { UserRegister } from './assets/pages/User_Register';
import { UserDetails } from './assets/modules/User_details';

function App() {
  return (
    <Routes>
          <Route exact path="/admin" element={<ADMIN_HOME/>}/>
          <Route path="/" element={<UserHome/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/sign" element={<UserSignIn/>}/>
          
          <Route path="/register" element={<UserRegister/>}/>
          <Route path="/profile" element={<UserDetails/>}/>
          <Route exact path="/nav" element={<UserNav/>}/>
          <Route exact path='/table' element={<TABLE />}/>
          <Route path="/community" element={<Community />}/>
        </Routes>
  );
}

export default App;
