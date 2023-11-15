import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { LuLogOut } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

import avatar from "../data/avatar.jpg";
import { UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { user, signOut } = useAuthenticator();
  const handleLogout = () => {
    signOut();
  };
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  // State to manage UserProfile visibility
  const [showUserProfile, setShowUserProfile] = useState(false);

  // Function to toggle UserProfile visibility
  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  // Function to close UserProfile
  const closeUserProfile = () => {
    setShowUserProfile(false);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        {/* <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        /> */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={toggleUserProfile}
          >
            <FaUserCircle className="text-3xl text-gray-300" />
            {/* <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            /> */}
            <p>
              <span className="text-gray-400 text-14">Hi, {user.username}</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        <NavButton
          title="Logout"
          customFunc={handleLogout}
          color={currentColor}
          icon={<LuLogOut />}
        />

        {isClicked.userProfile && <UserProfile />}
        {/* <Button onClick={signOut}>Sign out</Button> */}
        {showUserProfile && <UserProfile onClose={closeUserProfile} />}
      </div>
    </div>
  );
};

export default Navbar;
