import React from 'react'
import './Footer.css'
function Footer() {
  return (
    
        <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Class Management</a></li>
                            <li><a href="#">Assignment Management</a></li>
                            <li><a href="#">Attandence Management</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Chatbot</a></li>
                            <li><a href="#">Student Community</a></li>
                            <li><a href="#">Notice</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><a href="#"><i className="fa fa-whatsapp"></i></a><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-instagram"></i></a>
                        <p className="copyright">Smart Classroom © 2023</p>
                    </div>
                </div>
            </div>
        </footer>
       
    </div>
   
  )
}

export default Footer