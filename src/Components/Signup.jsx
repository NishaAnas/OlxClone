import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Change from useHistory to useNavigate
import { auth } from "../FireBase/fireBaseConfig";
import { AuthContext } from "../ContextStore/AuthContext"; // Import AuthContext
import Logo from "../olx-logo.png";

function Signup() {
    const navigate = useNavigate();
    const { Signup } = useContext(AuthContext); // Use Signup from AuthContext
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Signup(email, password, name); // Pass the name during signup
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img width="200" height="200" src={Logo} alt="Logo" className="mb-8" />
      <div className="border border-gray-400 rounded-lg p-8 shadow-md bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-lg font-semibold">Full Name</label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="block text-lg font-semibold">Email</label>
          <input
            className="border rounded-md p-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block text-lg font-semibold">Phone</label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label className="block text-lg font-semibold">Password</label>
          <input
            className="border rounded-md p-2 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-600">{error}</p>} {/* Display error message */}
          <button className="w-full bg-teal-600 text-white font-bold py-2 rounded-md hover:bg-teal-700">Signup</button>
        </form>
        <Link to="/login" className="mt-4 text-teal-600">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
