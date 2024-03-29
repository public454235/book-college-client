import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)




                Swal.fire({
                    title: 'Custom animation with Animate.css',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate('/')

            })
    }

    // handle password
    const [passwordEye, setPasswordEye] = useState(false)

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Login</h1>
                        <p className='text-sm text-gray-400'>
                            Sign in to access your account
                        </p>
                    </div>
                    <form onSubmit={handleLogin}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input type='email' name='email' required placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <input type={(passwordEye === false) ? 'password' : 'text'} name='password' required placeholder='******'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />

                                    {/* eye */}

                                    <div className="text-1xl absolute top-3 right-5">
                                        {
                                            (passwordEye === false) ? < FaEyeSlash onClick={handlePasswordClick}></FaEyeSlash> : <FaEye onClick={handlePasswordClick}></FaEye>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <input className='bg-rose-500 w-full rounded-md py-3 text-white' type="submit" style={{cursor: 'pointer'}} value="Login" />
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                            Forgot password?
                        </button>
                    </div>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Do not have an account yet?{' '}
                        <Link
                            to='/signUp'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;