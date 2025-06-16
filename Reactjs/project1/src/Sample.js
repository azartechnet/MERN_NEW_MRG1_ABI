
import React from "react";
class MyComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: 'azar',
            age: 25
    }
}
//Function to update state
changeState=()=>{
    this.setState({
        name: 'mohamed',
        age: 20
        });
}
render()
{
    return (
        <div>
        <h2>Name:{this.state.name}</h2>
        <h2>Age:{this.state.age}</h2>
        <button onClick={this.changeState}>ChangeState</button>
        </div>
        
    )
}
}
export default MyComponent;