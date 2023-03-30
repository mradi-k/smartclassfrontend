import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './components/templetes/Landingpage';
import Login from './components/templetes/Login';
import Addstudent from './components/admin/Addstudent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage/>} />
          <Route path='login' element={<Login/>} />
          <Route path='addstudent' element={<Addstudent/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
