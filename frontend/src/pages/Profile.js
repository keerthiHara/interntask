// import React from "react";

// const Profile = () => {
//   const user = JSON.parse(localStorage.getItem("userdetail")); // Assuming user info is stored locally

//   if (!user) return <p>No user profile found.</p>;

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p><strong>Username:</strong> {user.username}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Role:</strong> {user.role}</p>
//     </div>
//   );
// };

// export default Profile;

const Profile = () => {
    // Safely retrieve and parse the user details
    const userDetail = localStorage.getItem("userdetail");
    const user = userDetail ? JSON.parse(userDetail) : null;
  
    if (!user) return <p>No user profile found.</p>;
  
    return (
      <div>
        <h1>Profile</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    );
  };
  
  export default Profile;
  