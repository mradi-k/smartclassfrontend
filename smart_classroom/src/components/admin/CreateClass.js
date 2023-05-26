import React, { useState } from "react";
// import { Select } from "react-miui";

const CreateClass = () => {
  const [formData, setFormData] = useState({
    department: "",
    semester: "",
    subject: "",
    classTime: "",
    classDate: "",
    classLink: "",
    faculty: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM4MzMxZmMxZThhODI3ODFiYzAyOTgiLCJpYXQiOjE2ODMwOTg0Njl9.uEndi0knHGRO-jRTlwdNZbA8unFV6Q_60lrUCQEYZ8E"
    );

    var data = JSON.stringify({
      department: formData.department,
      semester: formData.semester,
      subject: formData.subject,
      classDate: formData.classDate,
      classTime: formData.classTime,
      classLink: formData.classLink,
      faculty: formData.faculty,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/addclass", requestOptions)
      .then((response) => response.json())
      .then((result) => alert(result.message))
      .catch((error) => console.log("error", error));
    // add code here to send form data to the server
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "50vw",
          margin: "0px auto",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}>
        <h1>Create Class</h1>
      </div>
      <div style={{ width: "50vw", margin: "0px auto" }}>
        <div style={{ width: "30vw" }}>
          <form onSubmit={handleSubmit} className="class-form">
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}>
                <option value="">Select a department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
                <option value="ME">MECHANICAL</option>
                <option value="CIVIL">CIVIL</option>
                <option value="IT">IT</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="semester">Semester:</label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}>
                <option value="">Select a semester</option>
                <option value="FIRST">Semester 1</option>
                <option value="SECOND">Semester 2</option>
                <option value="THIRD">Semester 3</option>
                <option value="FOUR">Semester 4</option>
                <option value="FIVE">Semester 5</option>
                <option value="SIX">Semester 6</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="classTime">Class Time:</label>
              <input
                type="time"
                name="classTime"
                id="classTime"
                required
                value={formData.classTime}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="classDate">Class Date:</label>
              <input
                type="date"
                name="classDate"
                id="classDate"
                required
                value={formData.classDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="classLink">Class Link:</label>
              <input
                type="text"
                name="classLink"
                id="classLink"
                required
                value={formData.classLink}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="faculty">Faculty:</label>
              <input
                type="text"
                name="faculty"
                id="faculty"
                required
                value={formData.faculty}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Create Class</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClass;
