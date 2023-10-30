import "./sidebar.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  //useProSidebar
} from "react-pro-sidebar";
import logo from "../../assets/logo.webp";

function Sidebars() {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    // textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt="FormAI"
                    style={{
                      marginRight: "8px",
                      width: "30px",
                      height: "30px",
                    }} // Adjust width and height values as needed
                  />
                  FormAI
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
            <SubMenu defaultOpen label={"User Profile"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}>Education Details</MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Work Experience</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Custom Questions</MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              label={"Resume Builder"}
              icon={<RiFolder2Line />}
            >
              <MenuItem icon={<RiStackLine />}>Resume 1</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Resume 2</MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;
