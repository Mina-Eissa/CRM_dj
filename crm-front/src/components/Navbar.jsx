import React, { useState, useEffect } from "react";
import axios from "axios";

// Navbar Component
const Navbar = ({ onLogout }) => (
  <nav className="bg-slate-800 p-3 flex justify-between items-center">
    <h1 className="text-white text-xl font-bold">Members Management</h1>
    <button
      onClick={onLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  </nav>
);
export default Navbar;