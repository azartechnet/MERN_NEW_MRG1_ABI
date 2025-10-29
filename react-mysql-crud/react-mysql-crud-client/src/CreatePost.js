import React from "react";
const CreatePost=()=>{
    return(
       
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                                    <h1>Create a NewPost</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={""}>
                               <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control"/>
                               </div>
                               <div className="form-group">
                                    <label>Body</label>
                                    <textarea className="form-control"></textarea>
                               </div>
                               <button type="submit" className="btn btn-primary">CreatePost</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreatePost;