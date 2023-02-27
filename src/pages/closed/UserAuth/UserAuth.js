import React, { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const UserAuth = () => {
    const [login, setLogin] = useState(true)
    return (
        <div>
            <div className='w-full flex flex-col-reverse md:flex-row justify-around'>
                <div>
                    <img src="https://img.freepik.com/free-photo/sunglasses_1203-7886.jpg?size=626&ext=jpg&uid=R48098109&semt=sph" alt="" />
                </div>
                <div>
                {
                    login ? <Login setLogin={setLogin}></Login> : <SignUp setLogin={setLogin}></SignUp>
                }
                </div>
            </div>
        </div>
    );
};

export default UserAuth;