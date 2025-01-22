// src/ResponsiveForm.js
import{ useState } from 'react';
import './Login.css';
import { useCreateAcount } from '../../contexts/CreateUser';

const Login = () => {
    const[isShow,setIsShow] = useState(false)
    const [accounts,setAccounts] = useCreateAcount()
    function handleSubmit(){
       setAccounts({
        name:'ali',
        lastName:'karimin'
       })
    }
    console.log(accounts);

     function openHanlder(){
        console.log(isShow);
        setIsShow(true)
     }
    return (

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
