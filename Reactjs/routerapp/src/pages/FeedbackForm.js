import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const FeedbackForm=()=>{
    return(
       
        <div className="container mt-5">
           <h2 className='text-center mb-4'>FeedBackForm</h2>
           <form>
            <div className='mb-3'>
                <label className='form-label'>Name<span className='text-danger'>*</span></label>
                <input type="text" name="name" className='form-control' required  pattern='[A-Za-z]{10}'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email<span className='text-danger' >*</span></label>
                <input type="email" className='form-control' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
           </form>
        </div>
    )
}
export default FeedbackForm;