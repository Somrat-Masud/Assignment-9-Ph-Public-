import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {

    const { registerUser, googleUser} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
       
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password,name, photo)
        console.log(form)

       

        if(password.length <6 ){
            toast.error("Error: Password must be at least 6 characters")
            return 
        }
        if(!/[A-Z]/.test(password)){
            toast.error('Error: Password must contain at least one uppercase letter')
        }
        registerUser(email, password)
        .then( result => {
            console.log(result.user)
            toast('Successfully your register.');
        })
        .catch(error => console.error(error))
      
    }
    const handlegoogle = () =>{
        googleUser()
        .then(result => {
            console.log(result.user)
            toast('Successfully your register.');
        })
        .catch(error => console.error(error))
    }
    return (

        <div>
             <div className="shadow-2xl rounded-xl bg-slate-200 md:w-3/4 lg:w-1/2 mx-auto  ">
   <h2 className="text-3xl py-10 my-10 text-center " >Please Login</h2>
     <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mb-4">
     <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Type Your Name" className="input input-bordered" required />
                 </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name="text" placeholder="Photo Url" className="input input-bordered" required />
                 </div>
      
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
         </div>
         <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
         </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary mb-4">Register</button>
         </div>
     </form>
     <p className="text-center font-bold ">Do not Have a Account <Link className="text-blue-600" to='/register'>Register</Link></p>
        <div>
            
     <button className=' text-center mx-auto ml-56 mt-2 mb-5 btn btn-primary' onClick={handlegoogle}>GoogleLogin</button>
        </div>
   </div>
   <div>
   <Toaster />
   </div>
        </div>
    );
};

export default Register;