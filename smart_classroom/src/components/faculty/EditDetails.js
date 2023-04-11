import React , { useState ,useEffect } from 'react'
import '../student/Editdetails.css'
function Editdetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [department, setDepartment] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        //errorValidator();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "name": name,
        "email": email,
        "dob": dateOfBirth,
        "phone": phone,
        "gender": gender,
        "address": address,
        "department":department,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/api/v1/faculty/"+localStorage.getItem("fac_userId"), requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(`faculty Updated status : ${result.success}`);
        })
        .catch(error => console.log('error', error));

      };
    const errorValidator =() =>{
        if(!name) {
            errors.name = 'Name is required';
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
        errors.name = 'Name must contain only letters and spaces';
        }
        else{
        errors.name ="";
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }else{
            errors.email=""
        }
        if (!phone) {
            errors.phone = 'Mobile number is required';
        } else if (!/^\d{9}$/.test(phone)) {
            errors.phone = 'Mobile number is invalid';
        }
        else{
            errors.phone="";
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
        }else{
            errors.password="";
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }else {
            errors.confirmPassword="";
        }
        setErrors(errors);
    }
    const loadFacultyData = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:4000/api/v1/faculty/"+localStorage.getItem("fac_userId"), requestOptions)
            .then(response => response.json())
            .then(result =>{
                setName(result.faculty.name);
                setEmail(result.faculty.email);
                // setSession(result.faculty.session);
                setAddress(result.faculty.address);
                // setBranch(result.faculty.branch);
                setDateOfBirth(result.faculty.dob);
                setDepartment(result.faculty.department);
                // setFatherName(result.faculty.fatherName);
                setPhone(result.faculty.phone);
                setGender(result.faculty.gender);
            })
            .catch(error => console.log('error', error));
    }
   

    useEffect(()=>{
        loadFacultyData();
    },[])

  return (
    <div style={{}}>
        <form onSubmit={handleSubmit} >
            <div style={{width:"50vw",display:"flex",gap:"20px"}} >
                <div style={{width:"50%"}}>
                    <div className="form-group">
                        <label htmlFor="firstName"> Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter  Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        
                        />
                        {/* {errors && <div style={{position:"relative"}}>{errors.name}</div>} */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        
                        />
                        {/* {errors && <div style={{position:"relative"}}>{errors.email}</div>} */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        
                        />
                        {/* {errors && <div style={{position:"relative"}}>{errors.phone}</div>} */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        required
                        >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        </select>
                    </div>

                </div>
                <div style={{width:"50%"}}>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        placeholder="Enter Date of Birth"
                        value={dateOfBirth}
                        onChange={(event) => setDateOfBirth(event.target.value)}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select
                        className="form-control"
                        id="department"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                        required
                        >
                        <option value="">Select Department</option>
                        <option value="cse">CSE</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="civil">Civil</option>
                        <option value="electrical">Electrical</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        
                        />
                        {/* {errors && <div style={{position:"relative"}}>{errors.password}</div>} */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        
                        />
                        {/* {errors && <div style={{position:"relative"}}>{errors.confirmPassword}</div>} */}
                    </div>
                </div>
            </div>

            <div style={{width:"50vw"}}>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            </form>
    </div>
  )
}

export default Editdetails