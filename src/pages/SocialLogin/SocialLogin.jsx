import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSigIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                // saveUser(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <button className="flex justify-center items-center space-x-2" onClick={handleGoogleSigIn}><FcGoogle size={32} /><p>Continue with Google</p></button>


            </div>

        </div>
    );
};

export default SocialLogin;