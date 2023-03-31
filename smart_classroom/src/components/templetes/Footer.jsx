import React from 'react'
import './Footer.css'
function Footer() {
  return (
    
        <div classNmae="footer-clean">
        <footer>
            <div classNmae="container">
                <div classNmae="row justify-content-center">
                    <div classNmae="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Class Management</a></li>
                            <li><a href="#">Assignment Management</a></li>
                            <li><a href="#">Attandence Management</a></li>
                        </ul>
                    </div>
                    <div classNmae="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Chatbot</a></li>
                            <li><a href="#">Student Community</a></li>
                            <li><a href="#">Notice</a></li>
                        </ul>
                    </div>
                    <div classNmae="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div classNmae="col-lg-3 item social"><a href="#"><i classNmae="fa fa-whatsapp"></i></a><a href="#"><i classNmae="fa fa-facebook"></i></a><a href="#"><i classNmae="fa fa-twitter"></i></a><a href="#"><i classNmae="fa fa-linkedin"></i></a><a href="#"><i classNmae="fa fa-instagram"></i></a>
                        <p classNmae="copyright">Smart Classroom © 2023</p>
                    </div>
                </div>
            </div>
        </footer>
       
    </div>
   
  )
}

export default Footer