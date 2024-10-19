import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Change from useHistory to useNavigate
import { auth } from "../FireBase/fireBaseConfig";
import { AuthContext } from "../ContextStore/AuthContext";
import Logo from "../olx-logo.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { Login } = useContext(AuthContext); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await Login(email, password); // Call the Login function
          navigate("/"); // Navigate to home after successful login
        } catch (error) {
          setError(error.message); // Display error message if login fails
        }
      };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img width="200" height="200" src={Logo} alt="Logo" className="mb-8" />
      <div className="border border-gray-400 rounded-lg p-8 shadow-md bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-lg font-semibold">Email</label>
          <input
            className="border rounded-md p-2 w-full"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block text-lg font-semibold">Password</label>
          <input
            className="border rounded-md p-2 w-full"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-600">{error}</p>} {/* Display error message */}
          <button className="w-full bg-teal-600 text-white font-bold py-2 rounded-md hover:bg-teal-700">Login</button>
        </form>
        <Link to="/signup" className="mt-4 text-teal-600">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
