// src/ResponsiveForm.js
import{ useState } from 'react';
import '../styles/Login.css';

const Login = () => {

    const[isShow,setIsShow] = useState(false)

    function handleSubmit(){
        console.log('submit');
    }

     function openHanlder(){
        console.log(isShow);
        setIsShow(true)
     }
    return (
    //    <div>
    //     <button onClick={()=>setIsShow(show=>!show)}>Create Account</button>
    //         <div classNameName={`formContainer ${isShow ? 'hidden' : '' }`}>
    //         <h2>Create Acount</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div classNameName='formGroup'>
    //                 <label htmlFor="name">Name</label>
    //                 <input type="text" name = 'name'required/>
    //             </div>
    //             <div classNameName='formGroup'>
    //                 <label htmlFor="lastName">lastName</label>
    //                 <textarea id="lastName" name="lastName" rows="4" required />
    //             </div>
    //             <div classNameName='formGroup'>
    //                 <label htmlFor="phone">Phone Number</label>
    //                 <input type="number" id="phone" name="phone" required />
    //             </div>
    //             <div classNameName='formGroup'>
    //                 <label htmlFor="email">Email</label>
    //                 <input type="email" id="email" name="email" required />
    //             </div>
    //             <button type="submit">Submit</button>
    //         </form>
    //     </div>
    //    </div>

   <div>
    <button onClick={openHanlder}>click</button>
    <div id="myModal" className={`modal ${isShow ? '' : 'hidden'}`} >
              <div className="modal-content">
                <span className="close">&times;</span>
                <h1 className="form-title">Add a House</h1>
                <form id="addForm" onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label >Owner</label>
                    <input type="text" id="owner" name="owner" required />
                  </div>
                  <div className="input-container">
                    <label >Location</label>
                    <input type="text" id="location" name="location" required />
                  </div>
                  <div className="input-container">
                    <label >Price</label>
                    <input type="number" id="price" name="price" required />
                  </div>
  
                  <div className="input-container">
                    <button type="submit" className="btn-register">Register</button>
                    <button type="button" className="btn-register" onClick={()=>setIsShow(false)}>close</button>
                  </div>
                </form>
              </div>
            </div>
   </div>

    );
};

export default Login;
