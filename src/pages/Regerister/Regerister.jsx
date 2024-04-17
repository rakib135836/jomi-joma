import { Link } from "react-router-dom";


const Regerister = () => {

    const handleRegister= e =>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        console.log(form.get('email'))
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col  ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Register now!</h1>

            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                <form onSubmit={handleRegister} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="Name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name="Photo" placeholder="Photo url" className="input input-bordered" required />
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
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

            </div>


            <p className="text-center">OR</p>



            

            <p>Already have an account? please <Link className="text-red-400" to={'/login'}> Login</Link></p>
        </div>


    </div>
    );
};

export default Regerister;