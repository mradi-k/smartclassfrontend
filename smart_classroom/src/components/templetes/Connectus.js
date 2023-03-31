import React from 'react'

function Connectus() {
  return (
        <div>
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label >Name</label>
                <input type="text" className="form-control"  placeholder="Name"/>
                </div>
                <div className="form-group col-md-6">
                <label>Mobile</label>
                <input type="mobile" className="form-control"  placeholder="Mobile"/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
            
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Query</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="write your query here.."/>
            </div>

            <button type="submit" className="btn" style={{backgroundColor:"crimson",color:"white",fontWeight:"bold"}}>Send</button>
        </form>

        </div>
    )
}

export default Connectus;