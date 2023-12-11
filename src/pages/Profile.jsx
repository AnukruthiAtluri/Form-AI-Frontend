import React, { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth, Storage } from "aws-amplify";
import { FaEdit } from "react-icons/fa";
import PersonalSection from "./Forms/PersonalSection";
import PortfolioLinksSection from "./Forms/PortfolioLinkssection";
import ResourcesSection from "./Forms/ResourcesSection";
import EduDetailsSection from "./Forms/EduDetailsSection";
import WorkExperienceSection from "./Forms/WorkExpSection";
import ResumeSection from "./Forms/ResumeSection";
import Modal from "../components/Modals/DeleteModal";
import SubscribeModal from "../components/Modals/SubscribeModal";

const Profile = () => {
  const { user, signOut } = useAuthenticator();
  const [uploading, setUploading] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };
  // State for handling modal visibility
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenSubscribeModal = () => {
    setIsSubscribeModalOpen(true);
  };

  // Function to close the modal
  const handleCloseSubscribeModal = () => {
    setIsSubscribeModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = async () => {
    try {
      await Auth.deleteUser();
      // Perform signout or redirect
    } catch (error) {
      console.error("Error deleting user account", error);
    }
    setIsModalOpen(false);
  };

  // Function to handle file selection and uploading
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const fileName = `profile-pictures/${user.username}/${file.name}`;

    setUploading(true);
    try {
      // Upload the file to the bucket with "public" access
      const result = await Storage.put(fileName, file, {
        level: "public",
        contentType: file.type,
      });
      const url = await Storage.get(result.key); // Get the URL of the uploaded file
      setProfilePic(url); // Update state with new profile pic URL
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setUploading(false);
  };

  // Function to handle the account deletion
  async function handleDeleteAccount() {
    // Ask user to confirm the deletion
    const isConfirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (isConfirmed) {
      try {
        // Delete the user's account
        await Auth.deleteUser();
        // Perform signout if needed or redirect to a goodbye page
        signOut();
      } catch (error) {
        console.error("Error deleting user account", error);
      }
    }
  }

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center justify-between">
          <div className="relative flex items-center justify-center h-20 w-20 bg-blue-500 rounded-full text-2xl text-white uppercase">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-full h-full w-full object-cover"
              />
            ) : (
              <span>{user.username[0]}</span>
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="fileInput"
              className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer"
            >
              <FaEdit className="text-blue-500" />
            </label>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <p className="text-gray-500">No University</p>
          </div>
        </div>
        <div>{/* Icons and such */}</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* Contact Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>{user.attributes.email}</p>
            {/* Other contact info */}
          </div>

          {/* Job Preferences Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Job Preferences</h3>
            {/* Details */}
          </div>

          {/* Simplify+ */}

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleOpenSubscribeModal} // Open modal on click
          >
            Subscribe to FormAI+
          </button>
          <div>
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Delete Account
            </button>
            <Modal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onConfirm={confirmDelete}
            />
          </div>
        </div>

        <div>
          {/* Personal Details Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
            <PersonalSection />
          </div>

          {/* Work Experience Section */}
          <div className="mb-4">
            {/* <h3 className="text-lg font-semibold mb-2">Work Experience</h3> */}
            <WorkExperienceSection />
            {/* Add button and functionality */}
          </div>

          {/* Education Section */}
          <div className="mb-4">
            {/* <h3 className="text-lg font-semibold mb-2">Education Details</h3> */}
            <EduDetailsSection />
          </div>

          {/* Resume Upload */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Resume</h3>
            <ResourcesSection />
            <ResumeSection />
          </div>

          {/* Portfolio Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
            <PortfolioLinksSection />
            {/* Other URLs */}
          </div>

          {/* Skills Section */}
          {/* You can add Skills section here */}
          {/* Subscribe Modal */}
          <SubscribeModal
            open={isSubscribeModalOpen}
            onClose={handleCloseSubscribeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
