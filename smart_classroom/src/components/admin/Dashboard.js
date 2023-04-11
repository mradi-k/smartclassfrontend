import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [totalStudnet, setTotalStudent] = useState();
  //All Students
  const AllStudent = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/students", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTotalStudent(result.data.length);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    AllStudent();
  }, [totalStudnet]);
  //All Faculty

  const [totalfaculty, setTotalFaculty] = useState();
  const AllFaculty = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/facultys", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTotalFaculty(result.data.length);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    AllFaculty();
  }, [totalfaculty]);

  return (
    <div
      style={{
        width: "80vw",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "2rem",
      }}>
      <div
        class="card"
        style={{ width: "18rem", backgroundColor: "blue", color: "white" }}>
        <div class="card-body">
          <h3 class="card-title text-center">Total Student </h3>
          <h1 class="text-center">{totalStudnet}</h1>
          <h6 class="card-subtitle mb-2 bg-warning p-2 text-dark">
            Measured by SmartClassroom
          </h6>
          <p class="card-text"></p>
          {/* <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> */}
        </div>
      </div>

      <div
        class="card"
        style={{ width: "18rem", backgroundColor: "blue", color: "white" }}>
        <div class="card-body">
          <h3 class="card-title text-center">Total Faculty </h3>
          <h1 class="text-center">{totalfaculty}</h1>
          <h6 class="card-subtitle mb-2 bg-warning p-2 text-dark">
            Measured by SmartClassroom
          </h6>
          <p class="card-text"></p>
          {/* <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> */}
        </div>
      </div>

      <div
        class="card"
        style={{ width: "18rem", backgroundColor: "blue", color: "white" }}>
        <div class="card-body">
          <h3 class="card-title text-center">Total Admin </h3>
          <h1 class="text-center">1</h1>
          <h6 class="card-subtitle mb-2 bg-warning p-2 text-dark">
            Measured by SmartClassroom
          </h6>
          <p class="card-text"></p>
          {/* <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> */}
        </div>
      </div>
    </div>
  );
}
