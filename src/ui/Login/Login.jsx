// src/ResponsiveForm.js
import{ useState } from 'react';
import './Login.css';
import { useCreateAccount } from '../../contexts/CreateUser';

const Login = () => {
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[lastName,setLastName] = useState('')
  const[job,setJob] = useState('')

    const[isShow,setIsShow] = useState(false)
    const {accounts,setAccounts} = useCreateAccount()

    function handleSubmit(e){
    e.preventDefault()
        setAccounts(accounts=>[...accounts,{name,lastName,email,job}])
    }
console.log(accounts[0]);

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
                    <label >name</label>
                    <input type="text"  required onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div className="input-container">
                    <label >lastName</label>
                    <input type="text"  required  onChange={(e)=>setLastName(e.target.value)}/>
                  </div>
                  <div className="input-container">
                    <label >email</label>
                    <input type="email"  required  onChange={(e)=>setEmail(e.target.value)}/>
                  </div>

                  <div className="input-container">
                    <label>Job</label>
                    <input type="text"  required  onChange={(e)=>setJob(e.target.value)}/>
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
