import React from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero my-10">
      <div className="hero-content flex-col grid gap-20 md:grid-cols-2 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm p-6 shadow-[0px_16px_40px_4px_rgba(0,0,0,0.20)]">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>
          <p className="text-center">
            new to shining car{" "}
            <Link className="text-orange-600 font-bold ms-2" to="/signup">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
