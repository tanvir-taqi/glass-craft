
import React, { useContext, useEffect, useState } from 'react';
import { BiBullseye, BiSleepy } from 'react-icons/bi';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../componenets/LoadingSpinner';
import { AuthContext } from '../../../userContext/UserContext';


const Login = ({setLogin}) => {
    const { login, setLoading, loading } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                setLoading(false)

                navigate(from, { replace: true });


            })
            .catch(error => {

                setLoading(false)
                setErrorMsg("Wrong email or password")
            })
    }



   

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>

    }

    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-[#041127b9] text-white w-96'>
                <h1 className="text-center font-bold text-2xl">Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col my-3 items-start justify-start'>
                        <label htmlFor="email" className=''>Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="text-black p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="password" className=''>Password</label>
                            <span className='cursor-pointer text-lg' onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ?
                                        <BiSleepy className='text-red-600'></BiSleepy>
                                        :
                                        <BiBullseye className='text-white' ></BiBullseye>

                                }
                            </span>
                        </div>
                        <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="text-black p-2 w-full" />
                    </div>
                    <p className='text-red-500 font-semibold'>{errorMsg}</p>

                    <input type="submit" className='font-bold text-lg bg-[#050d1d] text-white py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Sign In" />
                </form>
                <h4>New to <strong>Glass Craft?</strong> <button onClick={()=>setLogin(false)}  className='text-gray-100 underline'>Create Account</button></h4>
            </div>

        </div>
    );
};

export default Login;