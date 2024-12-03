import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import MemberRecord from "../components/MemberRecord"
import MemberDisplay from "./MemberDisplay"

const Home = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from API
    axios.get("/api/members")
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/signin')
  };

  const handleModify = (member) => {
    setSelectedMember(member);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/members/${id}`)
      .then(() => setMembers(members.filter((member) => member.id !== id)))
      .catch((error) => console.error("Error deleting member:", error));
  };

  const handleSave = (updatedMember) => {
    axios.put(`/api/members/${updatedMember.id}`, updatedMember)
      .then((response) => {
        setMembers(members.map((member) => member.id === updatedMember.id ? response.data : member));
        setSelectedMember(null);
      })
      .catch((error) => console.error("Error updating member:", error));
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div className="container mx-auto p-4">
        {selectedMember ? (
          <MemberDisplay member={selectedMember} onSave={handleSave} />
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone Number</th>
                <th className="p-4">Age</th>
                <th className="p-4">Birthdate</th>
                <th className="p-4">Bio</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <MemberRecord
                  key={member.id}
                  member={member}
                  onModify={handleModify}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;