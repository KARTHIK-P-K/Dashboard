"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const Profile = ({ setIsOpen, setUser, user }) => {
  const [btn, setBtn] = useState(true);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(user.email && user.name && user.phone)) {
      alert("Name , Email and Phone number are required");
    }
    setIsOpen(false);
  };

  return (
    <aside className="modal-overlay ">
      <div className="modal-container p-4 w-[80vw] sm:w-[544px] h-[600px] ">
        {/* <img src={image} alt={title} className="img modal-img" /> */}
        <div className="flex justify-between">
          <h1 className="font-bold mb-4">Add New Profile</h1>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <hr />
        <div className="flex justify-around gap-4 mt-10 ">
          <div className="flex items-center gap-4 flex-col">
            <h1 className="font-bold">Basic</h1>
            <div className="w-28 sm:w-48 h-1 bg-blue-600"></div>
          </div>
          <div className="flex items-center gap-4 flex-col">
            <h1 className="font-bold">{btn ? "Contact" : "Social"}</h1>
            <div className="w-28 sm:w-48 h-1 bg-slate-300"></div>
          </div>
        </div>
        <div>
          {btn ? (
            <div className="flex flex-col gap-4 mt-8 ">
              <label htmlFor="name">Enter Name*</label>
              <input
                type="text"
                className="p-3 rounded-xl border-2"
                id="name"
                name="name"
                placeholder="Eg. Jon Doe"
                required
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-8 ">
              <label htmlFor="insta">Instagram Link (Optional)</label>
              <input
                type="text"
                className="p-3 rounded-xl border-2"
                id="insta"
                name="insta"
                onChange={handleChange}
                placeholder="Eg. ..instagram.com/username"
              />
            </div>
          )}
          {btn ? (
            <div className="flex flex-col gap-4 mt-8 ">
              <label htmlFor="email">Enter Email*</label>
              <input
                type="email"
                className="p-3 rounded-xl border-2"
                id="email"
                name="email"
                placeholder="Eg. Jon@xyz"
                required
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-8 ">
              <label htmlFor="youtube">Youtube Link (Optional)</label>
              <input
                type="text"
                className="p-3 rounded-xl border-2"
                id="youtube"
                name="youtube"
                placeholder="Eg. ..youtube.com/username"
                onChange={handleChange}
              />
            </div>
          )}
          {btn && (
            <div className="flex flex-col gap-4 mt-8 ">
              <label htmlFor="phone">Enter Phone*</label>
              <input
                type="number"
                className="p-3 rounded-xl border-2"
                id="phone"
                name="phone"
                placeholder="Eg. 9658325932"
                required
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        {btn ? (
          <div className="text-right mt-10">
            <button
              onClick={() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                setBtn(false);
              }}
              className="bg-[#3E84F8] py-2 px-4 text-white rounded-xl   "
            >
              Next
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-10 gap-4">
            <button
              onClick={() => {
                document.getElementById("insta").value = "";
                document.getElementById("youtube").value = "";
                setBtn(true);
              }}
              className="bg-white py-2 px-4 text-black border-2 rounded-xl   "
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#3E84F8] py-2 px-4 text-white rounded-xl   "
            >
              Done
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Profile;
