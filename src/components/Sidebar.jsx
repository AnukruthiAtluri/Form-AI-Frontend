import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { SiFormstack } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {MdOutlineStickyNote2} from "react-icons/md";
import {RiFileEditFill} from "react-icons/ri";
import {MdEditDocument} from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineExtension } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { BsQuestionSquare } from "react-icons/bs";

import {
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  //Sidebar Links
  const links = [
    {
      title: "Dashboard",
      links: [
        {
          name: "dashboard",
          icon: <RiDashboardLine />,
        },
      ],
    },

    {
      title: "Applications",
      links: [
        {
          name: "Profile",
          icon: <CgProfile />,
        },
        {
          name: "Applications",
          icon: <MdOutlineStickyNote2 />,
        },
        {
          name: "CustomQuestions",
          icon: <BsQuestionSquare />,
        },
      ],
    },
    {
      title: "Resume Builder",
      links: [
        {
          name: "ResumeBuilder",
          icon: <RiFileEditFill />,
        },
        {
          name: "CVBuilder",
          icon: <MdEditDocument />,
        }
        // {
        //   name: "line",
        //   icon: <AiOutlineStock />,
        // },
        // {
        //   name: "area",
        //   icon: <AiOutlineAreaChart />,
        // },

        // {
        //   name: "bar",
        //   icon: <AiOutlineBarChart />,
        // },
        // {
        //   name: "pie",
        //   icon: <FiPieChart />,
        // },
        // {
        //   name: "financial",
        //   icon: <RiStockLine />,
        // },
        // {
        //   name: "color-mapping",
        //   icon: <BsBarChart />,
        // },
        // {
        //   name: "pyramid",
        //   icon: <GiLouvrePyramid />,
        // },
        // {
        //   name: "stacked",
        //   icon: <AiOutlineBarChart />,
        // },
      ],
    },
    {
      title: "Apps",
      links: [
        {
          name: "calendar",
          icon: <AiOutlineCalendar />,
        },
        {
          name: "kanban",
          icon: <BsKanban />,
        },
        // {
        //   name: "editor",
        //   icon: <FiEdit />,
        // },
      ],
    },
    {
      title: "Extras",
      links: [
        {
          name: "download-extension",
          icon: <MdOutlineExtension />,
          desc: "Download Chrome Extension",
          linkAction: () => window.open('https://chrome.google.com/webstore/', '_blank'), // Replace with your actual link
        },
        {
          name: "Subscribe to FormAI+",
          icon: <FaUserPlus />,
          desc: "Upgrade to FormAI+",
          //linkAction: handleUpgradePopup,
        },
      ],
    },
  ];

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiFormstack /> <span>FormAI</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
