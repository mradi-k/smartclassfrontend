import React , { useState , useEffect} from 'react'
import './Editdetails.css'
function Editdetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [session, setSession] = useState("");
    const [branch, setBranch] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [department, setDepartment] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        errorValidator();

      };
      //form validation
    const errorValidator =() =>{
        if(!name) {
            errors.name = 'Name is required';
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
        errors.name = 'Name must contain only letters and spaces';
        }
        else{
        errors.name ="";
        }
        if(!fatherName) {
            errors.fatherName = 'Father Name is required';
        } else if (!/^[a-zA-Z ]+$/.test(fatherName)) {
        errors.fatherName = 'Father Name must contain only letters and spaces';
        }
        else{
        errors.fatherName =" ";
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

    //
    const loadstdData = () =>{ 
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:4000/api/v1/student/"+localStorage.getItem("std_userId"), requestOptions)
            .then(response => response.json())
            .then(result => {
                setName(result.student.name);
                setEmail(result.student.email);
                setSession(result.student.session);
                setAddress(result.student.address);
                setBranch(result.student.branch);
                setDateOfBirth(result.student.dob);
                setDepartment(result.student.department);
                setFatherName(result.student.fathername);
                setPhone(result.student.phone);
                setGender(result.student.gender);
                // alert(result.student.name);
            })
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
      loadstdData();
    }, [])

    //update student data --api 
    const updatestdDetails = (e) =>{
        e.preventDefault();
       // errorValidator();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
            "name": name,
            "email":email,
            "fathername": fatherName,
            "gender":gender,
            "dob": dateOfBirth,
            "phone":phone,
            "department":department,
            "branch":branch,
            "session":session,
            "address":address
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/api/v1/student/"+localStorage.getItem("std_userId"), requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.success);
        })
        .catch(error => console.log('error', error));
    }
    

  return (
    <div style={{}}>
        <form onSubmit={updatestdDetails} >
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
                        //onKeyup={errorValidator}
                        />
                        {errors && <div style={{position:"relative"}}>{errors.name}</div>}
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
                        //onKeyup={errorValidator}
                        />
                        {errors && <div style={{position:"relative"}}>{errors.email}</div>}
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
                        <label htmlFor="session">Session</label>
                        <input
                        type="text"
                        className="form-control"
                        id="session"
                        placeholder="Enter Session as 2020-21"
                        value={session}
                        onChange={(event) => setSession(event.target.value)}
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
                        //onKeyup={errorValidator}
                        />
                        {errors && <div style={{position:"relative"}}>{errors.phone}</div>}
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
                        <label htmlFor="fathersname">Father's Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="fatherName"
                        placeholder="Enter Father's Name"
                        value={fatherName}
                        onChange={(event) => setFatherName(event.target.value)}
                        //onKeyup={errorValidator}
                        />
                        {errors && <div style={{position:"relative"}}>{errors.fatherName}</div>}
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
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="MECHNICAL">Mechanical</option>
                        <option value="CIVIL">Civil</option>
                        <option value="EE">Electrical</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="brancj">Branch</label>
                        <input
                        type="text"
                        className="form-control"
                        id="branch"
                        placeholder="Enter Branch"
                        value={branch}
                        onChange={(event) => setBranch(event.target.value)}
                        required
                        />
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
                        //onKeyup={errorValidator}
                        />
                        {errors && <div style={{position:"relative"}}>{errors.password}</div>}
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
                        //onKeyup={errorValidator}
                        />
                        {errors && <div style={{position:"relative"}}>{errors.confirmPassword}</div>}
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