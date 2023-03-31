import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './components/templetes/Landingpage';
import Login from './components/templetes/Login';
import AdminDas from './components/admin/AdminDas';
import StudentReg from './components/admin/StudentReg'

function App() {
  return (
    // <BrowserRouter>
    //     <Routes>
    //       <Route index element={<Landingpage/>} />
    //       <Route path='login' element={<Login/>} />
    //       <Route path='dash' element={<AdminDas/>}/>
    //     </Routes>
    // </BrowserRouter>
    <StudentReg/>
    
    
  );
}

export default App;
