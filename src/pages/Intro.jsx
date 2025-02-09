import { NavLink } from "react-router";

export default function Intro(){
    return <div className="appLayout">
          <h1>Wellcome!</h1>
          <NavLink to='/login'>Login</NavLink>
          </div>
}