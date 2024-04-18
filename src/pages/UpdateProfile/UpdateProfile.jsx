import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";

const UpdateProfile = () => {
  const { user } = useContext(FirebaseContext);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewURL, setImagePreviewURL] = useState(user?.photoURL || "");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: newDisplayName,
      photoURL: imagePreviewURL
    }).then(() => {
      // Profile updated successfully
      console.log("Profile updated successfully!");
      // You can add further logic such as showing a success message to the user
    }).catch((error) => {
      // An error occurred while updating the profile
      console.error("Error updating profile:", error);
      // You can add further logic such as showing an error message to the user
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Display Name:</label>
        <input
          type="text"
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      {selectedFile && (
        <img
          src={imagePreviewURL}
          alt="Preview"
          className="max-w-full mb-4 rounded-md"
        />
      )}
      <button
        onClick={handleUpdateProfile}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UpdateProfile;

