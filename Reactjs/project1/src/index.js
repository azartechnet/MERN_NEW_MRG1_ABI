import React from "react";
import ReactDOM from "react-dom/client";

/*const App=()=>{
  return (
    <div>
      <h1>WElcome</h1>
      <h2>Welcome</h2>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=20;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>You age is::{age}</p>
      <p>Todays date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React without JSX

/*const myelem1=React.createElement("h1",null,"welcome")

const myelem2=React.createElement("p",null,"This is a paragraph")

const r1=ReactDOM.createRoot(document.getElementById("root"))

r1.render(React.createElement("div",null,myelem1,myelem2))*/

//Login Form

/*const Login=()=>{
  return(
    <>
    <form>
      <label>UserName</label>
      <input type="text"/>
      <label>Password</label>
      <input type="password"/>
      <input type="submit" value="Login"/>
    </form>
    </>
   
  )
  }
  const r1=ReactDOM.createRoot(document.getElementById("root"))
  r1.render(<Login/>)*/

  //React List

  /*const MyElem=()=>{
    return(
      <div>
        <h1>MyList</h1>
        <ul>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
        </ul>
        <ol>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
        </ol>
      </div>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<MyElem/>)*/

  //conditional Rendering
  /*const x=20;
  let text="";
  if(x>10)
  {
    text="x is greater than 10";
  }
  else
  {
    text="x is less than 10";
  }
  const MyElem=()=>{
    return(
      <div>
        <h1>{text}</h1>
      </div>
    )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<MyElem/>);*/

    /*const x=10;
    let text="";
    if(x>10)
    {
       text="x is greater than 10";
    }
    else if(x==10)
    {
       text="Equal to 10";
    }
    else
    {
      text="x is less than 10";
    }
    const MyElem=()=>{
      return(
        <div>
          <h1>{text}</h1>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<MyElem/>);*/

    //Task nested if else statement

    /*import './index.css'

    const App=()=>{
      return(
        <>
          <h1>Welcome</h1>
          <p className="f1">This is paragraph</p>
        </>
      
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<App/>)*/

    //Function Component

    /*function Sample()
    {
      return(
        <div>
          <h1>This is Function Component</h1>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //class component

    /*class Sample extends React.Component
    {
      render()
      {
        return(
          <h1>Welcome</h1>
        )
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //Function Component

    /*function Greeting()
    {
      const name="azar";
      return(
        <div style={{textAlign:'center',marginTop:'50px',backgroundColor:'green'}}>
               <h1>Hello,{name}</h1>
               <p>Welcome to React Functional component</p>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Greeting/>)*/

    //Using onClick()

    function SimpleButton()
    {
      function showMessage()
      {
        alert("Button was clicked")
      }
      return(
        <div style={{textAlign:'center',marginTop:'50px',backgroundColor:'pink'}}>
           <button onClick={showMessage}>ClickHere</button>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<SimpleButton/>)
