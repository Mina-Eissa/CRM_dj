import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/auth";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const result = await signUp({ name, email, phone_number: phoneNumber, Gender, birth_date: birthDate, password });
    alert(result.message);
    if (result.success) {
      navigate("/signin");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md grid gap-4 grid-cols-1 md:grid-cols-2 w-full max-w-3xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 font-bold text-center col-span-full">Sign Up</h2>
        <FormInput label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput label="Phone Number" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <FormInput label="Birth Date" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        <div className="grid grid-cols-2 gap-4 col-span-full">
          <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormInput label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="col-span-full flex justify-end">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
