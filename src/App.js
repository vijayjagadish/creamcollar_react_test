
import './App.css';
import Index from './Pages/Index';
import About_us from './Pages/About_us';
import Contact_us from './Pages/Contact_us';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about_us' element={<About_us/>}/>
          <Route path='/contact_us' element={<Contact_us/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='logout' element={<Logout/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
