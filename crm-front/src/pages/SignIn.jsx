import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn({ email, password });
    alert(`${result.message}`);
    if (result.success) {
      navigate("/home");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 font-bold text-center">Sign In</h2>
        <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Sign In</Button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
