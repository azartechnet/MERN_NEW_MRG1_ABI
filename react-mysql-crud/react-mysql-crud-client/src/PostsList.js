import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const PostsList=()=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/getposts')
        .then(response=>setPosts(response.data))
    },[])

    return(
         <div className="container mt-5">
              <h2>PostsList</h2>
              <table className="table table-striped">
                  <thead>
                    <tr>
                       <th>Id</th>
                       <th>title</th>
                       <th>Body</th>
                       <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        posts.map(
                            post=>(
                                <tr key={post.id}>
                                  <td>{post.id}</td>
                                  <td>{post.title}</td>
                                  <td>{post.body}</td>
                                  <td>
                                    <Link to={""} className="btn btn-warning btn-sm mr-2">Edit</Link>
                                    <button onClick={""} className="btn btn-danger btn-sm">Delete</button> 
                                  </td>
                                </tr>
                            )
                        )
                    }
                  </tbody>
              </table>
         </div>   
    )
}
export default PostsList;