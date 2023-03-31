import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './components/templetes/Landingpage';
import Login from './components/templetes/Login';
// import Addstudent from './components/admin/Addstudent';
import Editdetails from './components/student/Editdetails';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage/>} />
          <Route path='login' element={<Login/>} />
          <Route path='edit' element={<Editdetails/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
