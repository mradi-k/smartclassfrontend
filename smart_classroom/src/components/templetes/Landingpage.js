import React from 'react'
import Connectus from './Connectus'
import Footer from './Footer'
import Navbar from './Navbar'
import Textanimation from './Textanimation'

function Landingpage() {
  return (
    <>  
        <Navbar/>
        {/* section 1  */}
        <div className="row pt-5 "></div>
        <div className="row section1-bg  ml-0">
            <div className="col-sm-5 d-flex justify-content-center flex-column pl-md-5" id='sec-1-lp'>
            <Textanimation/>
            <h2>Smart Classroom</h2>
            <p>A collaborative web conferencing tool with an online whiteboard, breakout rooms, and screen sharing capabilities for teachers and tutors who want to conduct highly interactive live online teaching sessions.</p>
            </div>
            <div className="col-sm-7"></div>
        </div>

        {/* section2 start  */}

        <div className="container">
            <div className='row mt-4 pt-4 lp-section2 '>
                <div className="col-sm-4 d-flex justify-content-center">
                <img src="https://mintbook.com/assetsNew/img/virtual-1.png" alt="" />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-7 p-5 ">
                <h3>Live Class Rooms</h3>
                <p>At the heart of extraordinary learning lies the human element. This human element finds a platform in Mintbook’s live virtual classrooms. Using our live classrooms, organizations can provide instructor-led trainings (ILTs) to train learners on various concepts. Additionally, our virtual classroom software is supported on both mobile and web platforms and comes fitted with chat options, so learners can take the lesson on-the-go or wherever they are.</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className='row mt-4 pt-4 lp-section2'>
                <div className="col-sm-7 p-5">
                <h3>Ease of Use</h3>
                <p>With our accessible integrated LMS platform and virtual classroom solution, upskilling professionals or students becomes a breeze. With the option to tag recordings of previous classes into the course in the LMS, trainers utilise multiple tools to emphasize their points. Trainers can also use our wide array of eBooks and videos from the library to augment their learning modules.</p>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-4 d-flex justify-content-center">
                <img src="https://mintbook.com/assetsNew/img/virtual-2.png" alt="" />
                </div>
            </div>
        </div>

        <div className="container">
            <div className='row mt-4 pt-4 lp-section2'>
                <div className="col-sm-4 d-flex justify-content-center">
                <img src="https://mintbook.com/assetsNew/img/virtual-3.png" alt="" />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-7 p-5">
                <h3>Whiteboard Integration</h3>
                <p>Classes are discussion-based rather than lecture-based thanks to the whiteboard feature available with our online classes. Trainers can acknowledge those students whose hands are virtually raised, use the annotate tool on the whiteboard and perform screensharing to diffuse information in a more democratic manner. Trainers can also conduct moderated sessions along with real-time polls while video conferencing to comprehend the efficacy of training modules.</p>
                </div>
            </div>
        </div>


        <div className="container">
            <div className='row mt-4 pt-4 lp-section2'>
                <div className="col-sm-7 p-5">
                <h3>Reporting & Attendance</h3>
                <p>With our virtual classroom software, trainers get real-time analytics that help them manage their classes better. Taking attendance, for example, is an easily-accomplished task thanks to our painless user interface. Trainers can also generate reports that provide actionable insights regarding the performance of learners through end of module tests.</p>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-4 d-flex justify-content-center">
                <img src="https://mintbook.com/assetsNew/img/virtual-4.png" alt="" />
                </div>
            </div>
        </div>

        {/* Why choose us section  */}
        <div className="row why-choose-us mt-5 p-5">
            <div className="col-sm-12 text-center">
                <h1>Why Choose Us?</h1>
                <p className='text-muted'>Transforming change in this era of Hybrid Learning</p>
            </div>
        </div>

        <div className="row why-choose-us pb-4" id='services'>
            <div className="col-sm-5">
            <img src="https://classroom.live/wp-content/uploads/2020/07/teacher-dimensions-three.png" />
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5">
                <h3>We are Teacher’s Ultimate Partner </h3>
                <ul style={{lineHeight:"2rem"}}>
                <li>Save Time</li>
                <li>Reduce Workload</li>
                <li>Flipped Classroom</li>
                <li>Content Curation</li>
                <li>Reports with Deep Insights</li>
                <li>Assessments</li>
                <li>Personalized teacher attention</li>
                <li>Integrated assignment & assessment</li>
                </ul>
            </div>
                
        </div>



        <div className="container" id='contact'>
            <div className='row mt-4 pt-4 lp-section3'>
                <div className="col-sm-5 lp-section3-img d-flex justify-content-center">
                <img src="https://mintbook.com/assetsNew/img/analysis-image.png" alt="" />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-6">
                <div style={{color:"red",fontWeight:"bolder"}}>Reach Us</div>
                <h3>
                    Our Team is Here to Help.
                    Email us or Fill out the form below for a Free Demo
                </h3>
                <p>Establish an eLearning infrastructure for your organization in no time. Reach out to us below or email us today!</p>
                <br />
                <Connectus/>
                </div>
            </div>
        </div>

        {/* <Footer/> */}
        <div className='mt-5'>
        <Footer/>
        </div>
    </>
  )
}

export default Landingpage