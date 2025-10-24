import React,{useState} from "react";
export default function LoginApp()
{
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [user,setUser]=useState("");

  const handleLogin=(e)=>{
    const username=e.target.username.value;
    const password=e.target.password.value;
    if(username=="admin"&&password=="admin@123")
    { 
        setIsLoggedIn(true);
        setUser(username);
    }
    else
    {
        alert("Invalid username and password...")
    }
  }
  const handleLogout=(e)=>{
    
    setIsLoggedIn(false);
    setUser("");
  }

  return(
    <div style={{textAlign:"center"}}>
       {!isLoggedIn?(
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="username" required/>
          <br/>
          <input type="text" name="password" placeholder="password" required/>
          <br/>
          <button type="submit">Login</button>

        </form>
       ):(
        <div>
          <h2>Welcome,{user}!!!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
       )}
    </div>
  )
}
