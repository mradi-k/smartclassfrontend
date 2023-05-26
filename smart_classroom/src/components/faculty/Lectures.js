import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";

function Lectures() {
  const [lectures, setLectures] = useState();

  const loadClass = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM4MzMxZmMxZThhODI3ODFiYzAyOTgiLCJpYXQiOjE2ODMwOTg0Njl9.uEndi0knHGRO-jRTlwdNZbA8unFV6Q_60lrUCQEYZ8E"
    );

    var raw = JSON.stringify({
      faculty: localStorage.getItem("fac_userName"),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/getClassbyfac", requestOptions)
      .then((response) => response.json())
      .then((result) => setLectures(result.UpcomingClass))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    loadClass();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px",
        marginTop: "2rem",
      }}>
      {lectures ? (
        lectures.map((lecture, index) => {
          return (
            <div
              key={index}
              class="card"
              style={{
                width: "20rem",
                backgroundColor: "blue",
                color: "white",
              }}>
              <h1>Subject :{lecture.subject}</h1>
              <h4>Date: {lecture.classDate}</h4>
              <h4>Timing :{lecture.classTime}</h4>
              <h1>Faculty :{lecture.faculty}</h1>
              <a href={lecture.classLink} target="_blank">
                <Button variant="contained">Join Class</Button>
              </a>
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Lectures;
