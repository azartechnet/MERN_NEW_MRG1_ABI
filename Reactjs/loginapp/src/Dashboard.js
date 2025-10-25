import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard()
{
    const navigate=useNavigate();

    const handleLogout=()=>{
        navigate("/")
    }
    return(
        <div style={{textAlign:"center"}}>
             <p>Welcome to Dashboard</p>
             <p>You have Success!! Logged In!!!</p>
             <button onClick={handleLogout}>Logout</button>
        </div>
    )
}