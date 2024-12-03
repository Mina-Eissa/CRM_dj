import React, { useState, useEffect } from "react";
import axios from "axios";

// Member Component
const MemberRecord = ({ member, onModify, onDelete }) => (
    <tr className="border-b">
      <td className="p-4">{member.name}</td>
      <td className="p-4">{member.email}</td>
      <td className="p-4">{member.phone_number}</td>
      <td className="p-4">{member.age}</td>
      <td className="p-4">{member.birthdate}</td>
      <td className="p-4">{member.bio}</td>
      <td className="p-4">
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