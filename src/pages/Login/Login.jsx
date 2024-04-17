
import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";


const Login = () => {

    const {signIn}=useContext(FirebaseContext);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password')
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                    <form onSubmit={handleLogin} className="card-body">

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

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>


                </div>


                <div>


                    <button className="btn">
                        <FaGoogle />
                        login with google
                    </button>

                    <button className="btn">
                        <FaGithub />
                        log in with git hub
                    </button>

                </div>

                <p>Dont have an account? Please <Link className="text-red-300" to={"/regerister"}> Register</Link></p>
            </div>

        </div>
    );
};

export default Login;