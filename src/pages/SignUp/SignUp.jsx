import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()


    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        saveUser(result.user)
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')

                    })
                    .catch(error => console.log(error))
            })


    };

    // handle password
    const [passwordEye, setPasswordEye] = useState(false)

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }
    // handle conf password
    const [ConfirmPasswordEye, setConfirmPasswordEye] = useState(false)

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!ConfirmPasswordEye)
    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    {...register("name", { required: true })}

                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    {...register("email", { required: true })}
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <input type={(passwordEye === false) ? 'password' : 'text'}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder='******' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.password?.type === 'required' && <p role="alert" className="text-red-600">password is required</p>}
                                    {errors.password?.type === 'minLength' && <p role="alert" className="text-red-600">must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p role="alert" className="text-red-600">must be less then 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p role="alert" className="text-red-600">password must have one uppercase, one lower case, one number and one special charaters</p>}

                                    {/* eye */}


                                    <div className="text-1xl absolute top-3 right-5">
                                        {
                                            (passwordEye === false) ? < FaEyeSlash onClick={handlePasswordClick}></FaEyeSlash> : <FaEye onClick={handlePasswordClick}></FaEye>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <input type={(ConfirmPasswordEye === false) ? 'password' : 'text'} {...register("confirm", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                        placeholder='******' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.confirm?.type === 'required' && <p role="alert" className="text-red-600">password is required</p>}
                                    {errors.confirm?.type === 'minLength' && <p role="alert" className="text-red-600">must be 6 characters</p>}
                                    {errors.confirm?.type === 'maxLength' && <p role="alert" className="text-red-600">must be less then 20 characters</p>}
                                    {errors.confirm?.type === 'pattern' && <p role="alert" className="text-red-600">password must have one uppercase, one lower case, one number and one special charaters</p>}

                                    {/* eye */}

                                    <div className="text-1xl absolute top-3 right-5">
                                        {
                                            (ConfirmPasswordEye === false) ? < FaEyeSlash onClick={handleConfirmPasswordClick}></FaEyeSlash> : <FaEye onClick={handleConfirmPasswordClick}></FaEye>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                        </div>

                        <div>
                            <input className='bg-rose-500 w-full rounded-md py-3 text-white' style={{ cursor: 'pointer' }} type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>

                    <SocialLogin></SocialLogin>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;