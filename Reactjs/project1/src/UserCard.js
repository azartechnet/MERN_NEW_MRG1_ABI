import React from "react";

const UserCard=(props)=>{
    return(
        <div style={{border:'1px solid #ccc',borderRadius:'10px',padding:'40px',width:'200px',boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
            
            <h3>{props.name}</h3>
            <p><strong>{props.role}</strong></p>
            
        </div>
    )
}

export default UserCard;