import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const ProfilePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  const [Myuser, setMyser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://avatars.githubusercontent.com/u/98970491?v=4",
    healthInterests: ["Medical Research", "Fitness"],
    educationInterests: ["Online Learning", "Curriculum Development"],
    climateInterests: ["Sustainability", "Climate Change Mitigation"],
  });


  return (
    <>
        { isAuthenticated && (
    <div className="min-h-screen bg-blue-100">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
  <a href='/Profile' target="_blank" rel="noopener noreferrer">
    <img
      src={user.picture}
      alt="Profile"
      className="rounded-full h-24 w-24 object-cover mx-auto mt-8"
    />
  </a>
</div>

        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold text-blue-900">{user.name}</h1>
          <p className="text-lg text-blue-700">{user.email}</p>
        </div>
        <div className="mt-8 px-4">
          <h2 className="text-blue-900 text-xl font-medium mb-4">
            Interests and Preferences
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-blue-900 text-lg font-medium mb-2">
                Health Interests
              </h3>
              {Myuser.healthInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-blue-700 text-base font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-blue-900 text-lg font-medium mb-2">
                Education Interests
              </h3>
              {Myuser.educationInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-blue-700 text-base font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-blue-900 text-lg font-medium mb-2">
                Climate Interests
              </h3>
              {Myuser.climateInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-blue-700 text-base font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div> )}</>

  
  );
};

export default ProfilePage;