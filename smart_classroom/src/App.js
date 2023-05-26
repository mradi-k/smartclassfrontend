import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./components/templetes/Landingpage";
import Login from "./components/templetes/Login";
import AdminDas from "./components/admin/AdminDas";
import Studentdashboard from "./components/student/Studentdashboard";
import Editprofile from "./components/student/Editprofile";
import StudentRegistermain from "./components/admin/StudentRegistermain";
import Facultydashboard from "./components/faculty/Facultydashboar";
import Editprofilef from "./components/faculty/Editprofile";
import FacultyRegMain from "./components/admin/FacultyRegMain";
import Postassignmentmain from "./components/faculty/Postassignmentmain";
import Assignments from "./components/student/Assignments";
import Timetable from "./components/admin/Timetable";
import TimeTable from "./components/student/TimeTable";
import CreateClass from "./components/admin/CreateClass";
import LiveLectureMain from "./components/student/LiveLectureMain";
import Bot from "./components/student/StudentBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        {/* //Admin Dash */}
        <Route path="/admindash" element={<AdminDas />} />
        <Route path="/admindash/createclass" element={<CreateClass />} />
        <Route
          path="/admindash/stdregister"
          element={<StudentRegistermain />}
        />
        <Route path="/admindash/facultyregister" element={<FacultyRegMain />} />
        <Route path="/admindash/timetable" element={<Timetable />} />
        {/* //Student Dash */}
        <Route path="/stddash" element={<Studentdashboard />} />
        <Route path="/stddash/timetable" element={<TimeTable />} />
        <Route path="/stddash/assignments" element={<Assignments />} />
        <Route path="/stddash/editprofile" element={<Editprofile />} />
        <Route path="/stddash/upcominglecture" element={<LiveLectureMain />} />
        <Route path="/stddash/chatbot" element={<Bot />} />

        {/* faculty Dash */}
        <Route path="/facdash/editprofile" element={<Editprofilef />} />
        <Route
          path="/facdash/postassignment"
          element={<Postassignmentmain />}
        />
        <Route path="/facdash/upcominglecture" element={<LiveLectureMain />} />

        <Route path="/facdash" element={<Facultydashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
