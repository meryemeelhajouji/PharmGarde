import React from "react";
// import Logout from '../shared/Navbar'
// import {
//   HiMenuAlt2,
//   FaUserCircle,
//   HiMenuAlt3,
//   BiSearch,
// } from "../../../assets/icons";



function Navbar() {
  

  

function logout() {

  localStorage.clear();
  window.location.replace('http://localhost:3000/')

}
  return (
    <div className="navbar bg-white-800 text-dark" style={{background:"#FFFFFF"}}>
      <div className="navbar-start">
        
      </div>
      <div className="navbar-end flex bg-purple">
  
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered input-xs text-black"
            />
            <button className="btn btn-square btn-xs">
            </button>
          </div>
       <h2>{'Admin'} </h2>
      <button className="mx-4 btn btn-muted" onClick={logout} style={{background:"#34d399"}}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar