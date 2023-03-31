import React from "react";
import img from "../../Assests/Loginimg.png";
import "./Login.css";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const roles = ["Student", "Faculty", "Admin"];
function Login() {
  const [modal, setModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const Navigate = useNavigate();
  const handleLogb = () => {
    Navigate("/dash");
  };
  return (
    <>
      {/* forgot password model code start here  */}
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Forgot Your password
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="username">Email:</label>
              <input type="email" id="username" />
            </div>
            <div>
              <button className="btn btn-danger ml-4">Send Otp</button>
              <input
                type="text"
                placeholder=" enter rhe otp"
                className="ml-4"
                id="otp"
              />
              <button className="btn btn-success ml-4">Verify Otp</button>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confpassword">Confirm Password:</label>
              <input type="password" id="password" />
            </div>
            <button className="btn btn-secondary">Submit</button>
          </form>
        </ModalBody>
      </Modal>
      {/* forgot password model code end here  */}

      <div className="login-container">
        <div className="container row">
          <div className="col-sm-6 left-side">
            <h1 className="p-2">Smart Classroom</h1>
            <img
              src={img}
              className="left-container"
              alt="image is loading...."
            ></img>
          </div>
          <div className="col-sm-6">
            <div className="right-side mt-5">
              <span
                style={{
                  fontSize: "50px",
                  color: " #007bff",
                  alignItems: "center",
                }}
              >
                {" "}
                <AccessibleIcon color="primary" sx={{ fontSize: 50 }} /> Login
              </span>
              <form>
                <label htmlFor="role-select" className="label">
                  Select Role:
                </label>
                <select
                  id="role-select"
                  value={selectedRole}
                  onChange={handleRoleChange}
                  className="role-option"
                >
                  {roles.map((role) => (
                    <option key={role} value={role} className="choose-role">
                      {role}
                    </option>
                  ))}
                </select>

                <div className="form-group">
                  <label htmlFor="username">Email:</label>
                  <input type="email" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" />
                </div>
                <button type="submit" onClick={handleLogb}>
                  Login
                </button>
                <a href="#" onClick={() => setModal(true)}>
                  Forgot password
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
