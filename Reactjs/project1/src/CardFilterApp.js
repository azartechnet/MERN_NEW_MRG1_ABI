import React,{useState} from "react";
import UserCard from './UserCard';
const usersData=[
    {id:1,name:"azar",role:"developer"},
    {id:2,name:"john",role:"admin"},
    {id:3,name:"jane",role:"user"},
    {id:4,name:"jim",role:"user"},
]
const CardFilterApp=()=>{
    const [search,setSearch]=useState('');

    const filteredUsers=usersData.filter((user)=>user.name.toLowerCase().includes(search.toLocaleLowerCase()));
    return (

        <div style={{padding:'20px'}}>
             <h2>UserList</h2>
             <input type="text" placeholder="Search by Name" value={search} onChange={(e)=>
                setSearch(e.target.value)}
                style={{padding:'8px',marginBottom:'20px',width:'100%'}}/>


          <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>

            {filteredUsers.map((user)=>(<UserCard key={user.id} name={user.name} role={user.role}/>))}

          </div>

        </div>
        
    )
}

export default CardFilterApp;