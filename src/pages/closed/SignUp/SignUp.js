import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {  useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../componenets/LoadingSpinner';
import { AuthContext } from '../../../userContext/UserContext';





const SignUp = ({setLogin}) => {
    const { createUser,  setLoading, loading } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('')
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

  

    const handleSignUp = data => {
        setLoading(true)
        if (data.password !== data.confirm) {
            return setErrorMsg("Password did not match")
        } else {
          
                        createUser(data.email, data.password)
                            .then(result => {
                                const user = result.user;
                                navigate(from, { replace: true });
                            })
                            .catch(error => {
                                setLoading(false)
                                if(error){
                                    setErrorMsg("Password should be at least 6 characters")
                                    console.log('====================================');
                                    console.log(error);
                                    console.log('===================================='); 
                                }
                            
                    })
            }
    }
   
    useEffect(()=>{
        window.scrollTo(0,0);
    })

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-[#041127b9] text-white w-96'>
                <h1 className="text-center font-bold text-2xl">Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="">Password</span></label>
                        <input type="password" {...register("password", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="">Confirm Password</span></label>
                        <input type="password" {...register("confirm", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.confirm && <p className='text-red-500'>{errors.confirm.message}</p>}
                    </div>

                    <p className='text-red-500 font-semibold'>{errorMsg}</p>

                    <input className='  font-bold text-lg bg-[#050d1d] text-white py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Sign Up" type="submit" />


                </form>
                <h4>Already Have an Account? <button onClick={()=>setLogin(true)}  className='text-gray-100 underline'>Sign In</button></h4>
            </div>

        </div>
    );
};

export default SignUp;