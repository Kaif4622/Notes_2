import React from "react";
import "./Profile.css"; // Keep this line for custom CSS (if needed)

function Profile({ data , show}) {
  return (
    <div className="flex justify-evenly mt-10">
      {show && (data.map((item) => (
        <div key={item.id} className="flex flex-col bg-yellow-400 text-black p-4  rounded-md shadow-lg shadow-orange-400">
          <li className="li-style">{item.name}</li>
          <li className="li-style">{item.phone}</li>
          <li className="li-style">{item.email}</li>
          <li className="li-style">{item.address}</li>
        </div>
      )))}
    </div>
  );
}

export default Profile;