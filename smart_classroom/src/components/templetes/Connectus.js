import React, { useState } from 'react'

function Connectus() {
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [query,setQuery]=useState("");

    // handle submit 
    // sending contact data to database from landing page 
    const handleSubmit=(e)=>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "name": name,
          "phone": mobile,
          "email": email,
          "query": query
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:4000/api/v1/contact/new", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success){
                alert("Your details has sent to Admin. Thank You for connectiing us")
            }
          })
          .catch(error => console.log('error', error));       
    }

  return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label >Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Name"/>
                </div>
                <div className="form-group col-md-6">
                <label>Mobile</label>
                <input type="mobile" className="form-control" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="Mobile"/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="inputEmail4" placeholder="Email"/>
                </div>
            
            </div>
            <div className="form-group">
                <label htmlFor="inputquery">Query</label>
                <input type="text" className="form-control" value={query} onChange={(e)=>{setQuery(e.target.value)}} id="inputquery" placeholder="write your query here.."/>
            </div>

            <button type="submit" className="btn" style={{backgroundColor:"crimson",color:"white",fontWeight:"bold"}}>Send</button>
        </form>

        </div>
    )
}

export default Connectus;