import React from "react";

function Button({ type, children }) {
  return (
    <button
      type={type}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
}

export default Button;
