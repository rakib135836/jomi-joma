import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";

const MyProfile = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <div>
      <Helmet>
        <title>My Profile</title>
      </Helmet>

      <h1>My Profile</h1>

      {user ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
        
          <div className="flex-none">
            <img
              src={user.photoURL || "default-avatar.png"} 
              alt="User Avatar"
              className="w-32 h-32 object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center p-4">
            <h2 className="text-xl font-semibold">{user.displayName || "Anonymous"}</h2> 
            <p className="text-gray-600">{user.email}</p>
            
          </div>
        </div>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default MyProfile;

