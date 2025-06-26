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

    /*function SimpleButton()
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
    r1.render(<SimpleButton/>)*/

    //function component with props

    /*function Sample(props)
    {
      return(
        <div>
          <h1>Hello{props.name}{props.age}</h1>
          <p>This is paragraph</p>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample name="azar" age="25"/>)*/

    //Component in Component

    /*function Component1()
    {
      return(
        <div>
          <h1>Hello</h1>
          <p>Component1</p>
          <Component2/>
        </div>
      )
    }
    function Component2()
    {
      return(
        <h1>This is Component2</h1>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Component1/>)*/

    //Constructor using Super

    /*class Sample extends React.Component
    {
      constructor()
      {
        super();
        this.state={name:"azar",age:25}
      }
      render()
      {
        return(
          <div>
            <h1>Hello{this.state.name}{this.state.age}</h1>
            <p>Welcome</p>
          </div>
        )
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/


  //constructor using props

  /*class Sample extends React.Component
  {
    constructor(props)
    {
      super(props);
      this.state={name:props.name,age:props.age}
    }
    render()
    {
      return(
        <div>
          <h1>Welcome{this.props.name}{this.props.age}</h1>
        </div>
      )
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample name="azar" age="25"/>)*/

  //Class Component Another Programs

  /*class Counter extends React.Component
  {
    constructor(props)
    {
      super(props);
      this.state={count:0}

    }
  
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
    }
    render()
    {
      return(
         <div>
          <h2>{this.state.count}</h2>
           <button onClick={this.increment}>increment</button>
           <button onClick={this.decrement}>Decrement</button>

         </div>
      )
    }
  }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Counter/>)*/

    //Another Example

    /*class ToggleMessage extends React.Component
    {
      constructor(props)
      {
        super(props);
        this.state={visible:false}
        }
        toggle=()=>{
          this.setState({visible:!this.state.visible})
        }
        render()
        {
          return(
            <>
             <h1>Toggle Message</h1>
             <button onClick={this.toggle}>{this.state.visible?'Hide':'Show'}</button>
              {this.state.visible&&<p>Hello I am visiable</p>}
            </>
           
          )
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<ToggleMessage/>)*/

  /*import App from "./Sample";

  const r1=ReactDOM.createRoot(document.getElementById('root'));
  r1.render(<App/>)*/

  //Changing the State object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:"Rahul",age:25}
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick()
  {
    this.setState({age:40})
  }
  render()
  {
    return(
      <>
      <h1>Hello{this.state.name}{this.state.age}</h1>
      <button onClick={this.handleClick}>Click</button>
      </>
  )

}
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/


/*import MyComponent from "./Sample";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyComponent/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    alert("Goal")
  }
  return(
    <>
      <button onClick={shoot}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Argument passing

/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal in ${year}`)
  }
  return(
    <>
       <button onClick={()=>shoot(2002)}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>MadeGoal</h1>
}
function Football(props)
{
    const isGoal=props.isGoal;
    if(isGoal)
    {
      return<MadeGoal/>
    }
    else
    {
      return<MissedGoal/>
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football isGoal={false}/>)
r1.render(<Football isGoal={Math.random()>0.5}/>)

var s1=Math.random()
console.log(s1)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Toyota"]
  return(
      <div>
        <h1>Garage</h1>
          <ul>
            {cars.map((car)=><Car b1={car}/>)}
          </ul>
      </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React using key

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Toyota"}
    ]
    return(
      <div>
        <h1>Garage</h1>
        <ul>
          {cars.map((car)=><Car id={car.id} name={car.name}/>)}
        </ul>
      </div>
      )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//Destructuring 

/*function Welcome({name,age})
{
  return(
    <div>
      <h1>Welcome {name}</h1>
      <p>Age is::{age}</p>
    </div>
  )
}
//usage
export default function App()
{
  return<Welcome name="azar" age={30}/>
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

import {Component} from "react";
import { render } from "@testing-library/react";

/*class Welcome extends Component
{
  render()
  {
    const {name,age}=this.props;
    return(
      <div>
        <h1>Hello{name}</h1>
        <h2>Age is {age}</h2>
      </div>
    )
  }
}

export default function App()
{
  return(<Welcome name="azar" age={30}/>)
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Destructring state in class component

/*class Profile extends React.Component
{
  constructor()
  {
    super();
    this.state={
      name:"azar",
      age:30,
  };
}
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h2>Name:{name}</h2>
        <h3>Age is::{age}</h3>
      </div>
    )
  }
  }

export default Profile;

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Profile/>)*/

//Destructuring in Arrays

/*function Skills()
{
  const skills=["java","python","c++"];
  const [first,second,third]=skills;
  return(
    <div>
      <h3>MySkills</h3>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>
    </div>
    )
}
export default Skills;

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0};
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedStateFromProps");
    return{count:props.count}
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>Count:{this.state.count}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header count={10}/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"};
  }
  componentDidMount()
  {
    console.log("componentDidMount");
    setTimeout(()=>{
      this.setState({favcolor:"blue"});
    },6000)
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My Fav Color  is {this.state.favcolor}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//updating getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedStateFromProps");
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My Fav Color::{this.state.favcolor}</p>
        <button onClick={this.changeColor}>ChangeColor</button>
      </div>
      )
  }
  
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>);*/

//shouldComponent Update

/*class Counter extends React.Component
{
  constructor()
  {
      super();
      this.state={count:0}
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("shouldComponentUpdate");
    //only update if count is even
    return nextState.count%2==0;
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
    }
    render()
    {
      return(
        <div>
            <p>Count::{this.state.count}</p>
            <button onClick={this.increment}>increment</button>
        </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Hooks

import { useState,useEffect } from "react";

/*function Counter()
{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("azar");

  return(
    <div>
      <p>Count::{count}</p>
      <button type="button" onClick={()=>setCount(count+1)}>ClickCount</button>
      <p>Name:{name}</p>
      <button type="button" onClick={()=>setName("mohamed")}>ClickName</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//useState

/*function ThemeSwitcher()
{
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>
  {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return(
    <div>
      <button type="button" onClick={toggleTheme}>ToggleMessage</button>
      <p>CurrentTheme:{theme}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ThemeSwitcher/>)*/


//useEffect

/*function ClickCouter()
{
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `Clicks: ${count}`;
  },[count])
  return(
    <div>
      <p>Count::{count}</p>
      <button type="button" onClick={()=>setCount(count+1)}>ClickHere</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ClickCouter/>)*/

/*import CardFilterApp from "./CardFilterApp";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<CardFilterApp/>)*/

//Example 1


/*const Example1=()=>{
  useEffect(()=>{
    console.log("Component Mounted");
  },[])
  return(
    <h3>Hello from useEffect</h3>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example1/>)*/

//Example 2

/*const Example2=()=>{
useEffect(()=>{
  const timer=setInterval(()=>{
    console.log("Timer is running");
  },1000)

  return()=>{
    clearInterval(timer);
    console.log("TimeCleared")
    }
},[])}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example2/>)*/

//React without useContext

function Component1()
{
  const [user,setUser]=useState("mohamed")
  return(
    <div>
      <h1>Username is::{user}</h1>
      <button onClick={()=>setUser("azar")}>Change user</button>
      <Component2 user={user}/>
    </div>
  )
}
function Component2(props)
{
    return(
      <div>
        <h1>UserName is::{props.user}</h1>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)

