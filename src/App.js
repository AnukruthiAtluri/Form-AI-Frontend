/* src/App.js */

//General Imports
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiFormstack } from "react-icons/si";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Dashboard,
  ResumeBuilder,
  Profile,
  CVBuilder,
  Calendar,
  Kanban,
  Editor,
} from "./pages";
import "./App.css";
import Logo from "./assets/logo.png";
import { useStateContext } from "./contexts/ContextProvider";

//AWS imports
import { Amplify, API, graphqlOperation } from "aws-amplify";
import {
  withAuthenticator,
  Text,
  useTheme,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import Applications from "./pages/Applications";
import CustomQuestions from "./pages/CustomQuestions";
Amplify.configure(awsExports);

//Main APP Render
const App = () => {
  const { user, signOut } = useAuthenticator();
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  //Name and button for testing
  {
    /* <Heading style={styles.container} level={1}>
        Hello {user.username}
      </Heading>
      <Button style={styles.container} onClick={signOut}>
        Sign out
      </Button>*/
  }

  return (
    <view className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />

                {/* applications  */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/CustomQuestions" element={<CustomQuestions />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />

                {/* Resume Builder  */}
                <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
                <Route path="/CVBuilder" element={<CVBuilder />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </view>
  );
};

//Might not need just for Test Purposes
const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
};

//Login Screen Customizations
const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View
        textAlign="center"
        padding={tokens.space.large}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiFormstack
          alt="FormAI logo"
          style={{ width: "65px", height: "65px" }} // Control the size of the icon
        />
        <Text
          style={{
            marginLeft: tokens.space.small,
            fontSize: "45px", // Control the size of the text
            fontWeight: "bold", // If the text needs to be bold
          }}
        >
          FormAI
        </Text>
      </View>
    );
  },
};

const formFields = {};

export default withAuthenticator(App, {
  components,
  formFields,
});
