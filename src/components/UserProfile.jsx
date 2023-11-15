import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineReportProblem, MdExitToApp } from "react-icons/md";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { FaUserCircle } from 'react-icons/fa';

const UserProfile = ({ onClose }) => {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const handleLogout = () => {
    signOut();
  };

  const navigateToProfile = () => {
    navigate('/profile');
    onClose(); // Close the UserProfile component after navigation
  };

  const userProfileData = [
    {
      icon: <CgProfile />,
      title: "My Profile",
      desc: "Account Details",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      action: navigateToProfile, // Attach navigation function here
    },
    {
      icon: <MdOutlineReportProblem />,
      title: "Report",
      desc: "Report an Issue",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
    },
    {
      icon: <MdExitToApp />,
      title: "Logout",
      desc: "Sign out of your account",
      iconColor: "rgb(255, 69, 58)",
      iconBg: "rgb(255, 229, 227)",
      action: handleLogout,
    },
  ];

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          onClick={onClose} // Use onClose function when button is clicked
          className="rounded-md p-2 hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
      <FaUserCircle className="text-6xl text-gray-300" />
        {/* <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        /> */}
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {user.username}{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            {user.attributes.email}{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
            onClick={item.action ? item.action : null} // If action is defined, make it clickable
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
