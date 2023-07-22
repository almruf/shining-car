import React from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero my-10">
      <div className="hero-content flex-col grid gap-20 md:grid-cols-2 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm p-6 shadow-[0px_16px_40px_4px_rgba(0,0,0,0.20)]">
          <h1 className="text-4xl text-center font-bold">sign up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="text-center">
            {" "}
            have an account{" "}
            <Link className="text-orange-600 font-bold ms-2" to="/Login">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
