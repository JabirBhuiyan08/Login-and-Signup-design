import React from 'react';
import "../Login/Login.css";
import { Link } from 'react-router-dom';

const SignUP = () => {
    return (
        <div className="h-screen flex items-center justify-center">
        <div
          className="neumorphic neumorphic-card
    flex flex-col items-center justify-center text-black 
      "
        >
          <h1 className="text-3xl font-bold mb-8">Sign UP</h1>
  
          <input
            type="text"
            placeholder="Username"
            className="neumorphic neumorphic-input p-4 mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="neumorphic neumorphic-input p-4 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="neumorphic neumorphic-input p-4 mb-4"
          />
          <button className="neumorphic neumorphic-button p-4 mb-3">Sign Up</button>
          <div className="text-small text-gray-500 mb-4">
            <h1>Have an account?</h1>
            <Link to="/">
              <h1 className="text-blue-500">Login</h1>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SignUP;