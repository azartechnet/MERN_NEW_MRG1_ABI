import React from "react";
import ReactDOM from "react-dom/client";

const App=()=>{
  return (
    <div>
      <h1>WElcome</h1>
      <h2>Welcome</h2>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)