import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './components/templetes/Landingpage';
import Login from './components/templetes/Login';
import AdminDas from './components/admin/AdminDas';
import Studentdashboard from './components/student/Studentdashboard';
import Editdetails from './components/student/Editdetails';
import Editprofile from './components/student/Editprofile';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/admindash' element={<AdminDas/>}/>
          <Route path='/stddash' element={<Studentdashboard/>}/>
          <Route path='/stddash/editprofile' element={<Editprofile/>}/>
          {/* <Route path='editprofile' element={<Editprofile/>}/> */}
        </Routes>
    </BrowserRouter>


  );
}

export default App;
