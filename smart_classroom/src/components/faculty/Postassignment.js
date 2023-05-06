import React, { useState } from "react";
import "../student/Editdetails.css";

function Postassignment() {
  const [department, setDepartment] = useState("");
  const [semester, setSemeste] = useState("");
  const [subject, setSubject] = useState("");
  const [submissiondate, setSubbmissiondate] = useState("");
  // const[file,setFile]=useState();
  const handleUpload = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM4MzMxZmMxZThhODI3ODFiYzAyOTgiLCJpYXQiOjE2ODMwOTg0Njl9.uEndi0knHGRO-jRTlwdNZbA8unFV6Q_60lrUCQEYZ8E"
    );

    var data = JSON.stringify({
      department: department,
      semester: semester,
      subject: subject,
      submissionDate: submissiondate,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/assignment", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <form onSubmit={handleUpload} enctype="multipart/form-data">
        <div style={{ width: "50vw" }}>
          <div className="form-group">
            <label htmlFor="gender">Department</label>
            <select
              className="form-control"
              id="department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              required>
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="MECHANICAL">MECHANICAL</option>
              <option value="IT">IT</option>
              <option value="EE">EE</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="department">Select Semester</label>
            <select
              className="form-control"
              id="semester"
              value={semester}
              onChange={(event) => setSemeste(event.target.value)}
              required>
              <option value="">Select Semester</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourt</option>
              <option value="fifth">Fith</option>
              <option value="six">Six</option>
              <option value="seven">Seven</option>
              <option value="final">Final</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="submissiondate">Submission Date</label>
            <input
              type="date"
              className="form-control"
              id="submissiondate"
              placeholder="submissiondate"
              value={submissiondate}
              onChange={(event) => setSubbmissiondate(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter Subject Name"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            />
          </div>
          {/* <div className="form-group">
                        <label htmlFor="dateOfBirth">Upload Assignment PDF</label>
                        <input
                        type="file"
                        className="form-control m-0 p-0"
                        // id="dateOfBirth"
                        // placeholder="Enter Subject Name"
                        // value={dateOfBirth}
                        onChange={(event) => setFile(event.target.files[0])}
                        required
                        />
                    </div> */}
        </div>

        <div style={{ width: "50vw" }}>
          <button type="Upload Assignment" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Postassignment;
