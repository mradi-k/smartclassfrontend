import React from 'react'
import './AdminDas.css'
import img from '../../Assests/logo.PNG'
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

export default function AdminDas() {
  return (
  
    <>
      <div className='container'>
          <div className='row'>
            <div className='col-sm-3 br'>
               <img src={img}></img>
            </div>
            <div className='col-sm-6 br2 '>
             <p style={{fontSize:"1.5rem",fontWeight:"700",color:"#3f51b5"}} ><DashboardIcon sx={{ fontSize: 50 }} color="primary"/> &nbsp;Dashboard</p>
             
            </div>
            <div className='com-sm-3 br3'>
            <button className='btn btn-danger center '><LogoutIcon fontSize="small"/>&emsp;Log out</button>
            </div>
          </div>
      </div>
      <hr/>
      <div className='cg2 '>
        <div className='row container '>
             <div className='col-sm-3  cg'>
                  <div>
                      <button className='dash'>Dashboard</button>
                  </div>
                  <div>
                      <button className='dash'>Student Register</button>
                  </div>
                  <div>
                      <button className='dash'>Faculty Register</button>
                  </div>
                  <div>
                      <button className='dash'>Admin Register</button>
                  </div>
                  <div>
                      <button className='dash'>Time Table</button>
                  </div>
                  <div>
                      <button className='dash'>Progress Report</button>
                  </div>
                  <div>
                      <button className='dash'>Faculty Msg</button>
                  </div>
                  <div>
                      <button className='dash'>Admin Msg</button>
                  </div>

                  
                  
             </div>
             <div className='col-sm-9'>
                   
             </div>
        </div>
         
      </div>
      </>  
    
  )
}
