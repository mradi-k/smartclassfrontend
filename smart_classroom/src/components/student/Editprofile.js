import React from 'react'
import img from '../../Assests/logo.PNG'
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

import {useNavigate} from "react-router-dom"
import Editdetails from './Editdetails';

function Editprofile() {

    const Navigate = useNavigate();

    const editProfileHandler = () =>{
        // navigate('editprofile');
    }
    const dashBord =() =>{
        Navigate('/stddash')
    }
    const handleLogoutnavigate = () =>{
        Navigate('/');
    }

  return (
  
    <>
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-3 br'>
               <img src={img} style={{marginLeft:"2rem"}}></img>
            </div>
            <div className='col-sm-6 br2 '>
             <p style={{fontSize:"1.5rem",fontWeight:"700",color:"#3f51b5"}} ><DashboardIcon sx={{ fontSize: 50 }} color="primary"/> &nbsp;Dashboard</p>
             
            </div>
            <div ></div>
            <div className='col-sm-3 br3'>
            <button className='btn btn-danger center ' onClick={handleLogoutnavigate}><LogoutIcon fontSize="small"/>&emsp;Log out</button>
            </div>
          </div>
      </div>
      <hr/>
      <div className='cg2 '>
        <div className='row p-0 m-0 '>
             <div className='col-sm-2  cg'>
                <div>
                    <button className='dash' onClick={dashBord}>Dashboard</button>
                </div>
                <div>
                    <button className='dash'onClick={editProfileHandler}  >Edit Profile</button>
                </div>
                <div>
                    <button className='dash'>Live Lectures</button>
                </div>
                <div>
                    <button className='dash'>Time Table</button>
                </div>
                <div>
                    <button className='dash'>Assignments</button>
                </div>
                <div>
                    <button className='dash'>Progress Report</button>
                </div>
                <div>
                    <button className='dash'>Msg to Faculty</button>
                </div>
                <div>
                    <button className='dash'> Msg to Admin</button>
                </div>
             </div>
             <div className='col-sm-10'>
             <div className='row'>
                        <div  className='col-sm-2'></div>
                        <div className='col-sm-8 d-flex justify-content-center'>
                            <h1 
                                className='mt-4 bg-primary  text-white  border border-danger rounded-lg'
                                style={{
                                    textAlign:"center",
                                    width:"50vw"
                                }}>
                                Edit Your Details
                            </h1>
                        </div>
                        <div className='col-sm-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8 d-flex justify-content-center'>
                            <Editdetails/>
                        </div>
                        <div className='col-sm-2'></div>
                    </div>
             </div>
        </div>
         
      </div>
      </>  
    
  )
}

export default Editprofile;