import React from 'react'
import img from '../../Assests/logo.PNG'
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

import {useNavigate} from "react-router-dom"
import Editdetails from './Editdetails';

function Editprofile() {

    const navigate = useNavigate();

    const editProfileHandler = () =>{
        navigate('editprofile');
    }
    const dashBord =() =>{
        navigate('/stddash')
    }

  return (
  
    <>
      <div className=''>
          <div className='row'>
            <div className='col-sm-3 br'>
               <img src={img} style={{marginLeft:"2rem"}}></img>
            </div>
            <div className='col-sm-6 br2 '>
             <p style={{fontSize:"1.5rem",fontWeight:"700",color:"#3f51b5"}} ><DashboardIcon sx={{ fontSize: 50 }} color="primary"/> &nbsp;Dashboard</p>
             
            </div>
            <div ></div>
            <div className='col-sm-3 br3'>
            <button className='btn btn-danger center '><LogoutIcon fontSize="small"/>&emsp;Log out</button>
            </div>
          </div>
      </div>
      <hr/>
      <div className='cg2 '>
        <div className='row container '>
             <div className='col-sm-3  cg'>
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
             <div className='col-sm-9'>
                   <Editdetails />
             </div>
        </div>
         
      </div>
      </>  
    
  )
}

export default Editprofile;