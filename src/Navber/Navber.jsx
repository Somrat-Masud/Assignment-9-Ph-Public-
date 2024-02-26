
import './Navber.css'
import {   NavLink  } from "react-router-dom";
const Navber = () => {
const navLinks = <>
<li><NavLink to='/'>Home</NavLink></li>

<li><NavLink to='/about'>About Us</NavLink></li>
<li><NavLink to='/gallery'>Gallary</NavLink></li> 
<li><NavLink to='/login'>Login</NavLink></li> 
<li><NavLink to='/register'>Register</NavLink></li> 




</>
    return (
        //navber section
        <div className=''>
            <div className="navbar bg-base-100  w-[1250px] mx-auto h-20 flex justify-between ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/hgtqyK7/logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            
       
        
    </div>
   
           
            <div className='w-[1250px] h-20 mx-auto'>
            
            </div>

         
        </div>
    );
};

export default Navber;