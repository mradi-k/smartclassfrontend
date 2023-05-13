import React, { useState, useEffect } from "react";
import "./TimeTable.css";

const Timetable = () => {
  // const [classes, setClasses] = useState([
  //   { id: 1, name: "Math 101", time: "9:00 AM - 10:00 AM", room: "Room 101" },
  //   {
  //     id: 2,
  //     name: "Physics 201",
  //     time: "10:00 AM - 11:00 AM",
  //     room: "Room 202",
  //   },
  //   {
  //     id: 3,
  //     name: "English 301",
  //     time: "11:00 AM - 12:00 PM",
  //     room: "Room 303",
  //   },
  //   {
  //     id: 4,
  //     name: "Chemistry 401",
  //     time: "1:00 PM - 2:00 PM",
  //     room: "Room 404",
  //   },
  //   {
  //     id: 5,
  //     name: "Computer Science 501",
  //     time: "2:00 PM - 3:00 PM",
  //     room: "Room 505",
  //   },
  // ]);
  const [clases, setClases] = useState([]);
  const [day, setDay] = useState();
  const [semester, setSemester] = useState();
  const [branch, setBranch] = useState();

  const loadData = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM4MzMxZmMxZThhODI3ODFiYzAyOTgiLCJpYXQiOjE2ODMwOTg0Njl9.uEndi0knHGRO-jRTlwdNZbA8unFV6Q_60lrUCQEYZ8E"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://localhost:4000/api/v1/timeTable?branch=" +
        branch +
        "&semester=" +
        semester +
        "&day=" +
        day,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setClases(result.data.Subjects);
      })
      .catch((error) => console.log("error", error));
  };
  const getData = () => {
    console.log(clases);
  };
  useEffect(() => {
    getData();
  }, [clases]);

  return (
    <>
      <div className="timetable">
        <h2>Monday</h2>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option>select Your Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thurseday">Thurseday</option>
          <option value="Friday">Friday</option>
        </select>
        &nbsp; &nbsp; &nbsp;
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option>select Your Branch</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ME">ME</option>
          <option value="EE">EE</option>
          <option value="ECE">ECE</option>
        </select>
        &nbsp; &nbsp; &nbsp;
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option>select Semester</option>
          <option value="FIRST">FIRST</option>
          <option value="SECOND">SECOND</option>
          <option value="THIRD">THIRD</option>
          <option value="FOUR">FOUR</option>
          <option value="FIVE">FIVE</option>
          <option value="SIX">SIX</option>
        </select>
        &nbsp; &nbsp; &nbsp;
        <button onClick={loadData}>Get Data</button>
        <table border="1">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Timing</th>
              <th>Faculty</th>
            </tr>
          </thead>
          <tbody>
            {clases ? (
              clases.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.subName}</td>
                    <td>{item.time}</td>
                    <td>{item.facultyName}</td>
                  </tr>
                );
              })
            ) : (
              <>Not Found</>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Timetable;
