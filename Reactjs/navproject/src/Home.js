import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
   
    <div className="container mt-5 d-flex gap-4">
        
      {/* About Card */}
      <div className="card text-white bg-primary mb-3" style={{ cursor: "pointer", width: "18rem" }} onClick={goToAbout}>
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text">Learn more about our mission and team.</p>

        </div>
       
      </div>

      {/* Contact Card */}
      <div className="card text-white bg-success mb-3" style={{ cursor: "pointer", width: "18rem" }} onClick={goToContact}>
        <div className="card-body">
          <h5 className="card-title">Contact</h5>
          <p className="card-text">Get in touch with us for more information.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;


/*

import { useNavigate } from "react-router-dom";

function Home()
{

    const navigate=useNavigate();
    const goToAbout=()=>{
        navigate("/about");
    }
    const goToContact=()=>
        {
            navigate("/contact");
            }
    return(
        
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={goToAbout}>GoToAbout</button>
            <button onClick={goToContact}>GoToContact</button>
        </div>

    )
}
export default Home;


*/
