import React, { useState, useEffect } from "react";
import axios from "axios";

// Member Component
const MemberRecord = ({ member, onModify, onDelete }) => (
  <tr className="border-b">
  <td className="border border-gray-300 p-4 text-center">{member.name}</td>
  <td className="border border-gray-300 p-4 text-center">{member.email}</td>
  <td className="border border-gray-300 p-4 text-center">{member.phone_number}</td>
  <td className="border border-gray-300 p-4 text-center">{member.Age}</td>
  <td className="border border-gray-300 p-4 text-center">{member.birth_date}</td>
  <td className="border border-gray-300 p-4 text-center">{member.bio}</td>
  <td className="border border-gray-300 p-4 flex justify-center items-center">
    <button
      onClick={() => onModify(member)}
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
    >
      Modify
    </button>
    <button
      onClick={() => onDelete(member.id)}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  </td>
</tr>
);
  
export default MemberRecord;