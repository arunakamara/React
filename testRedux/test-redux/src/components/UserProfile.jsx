import { useState } from "react";

export default function UserProfile() {
  const [user] = useState({
    name: "Aruna Kamara",
    email: "aruna@example.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    address: "123 Market Street, Freetown, Sierra Leone",
    phone: "+232 76 123 456",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-md border-2 border-gray-200"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* User Info */}
        <div className="mt-6 space-y-2 text-gray-700">
          <p>
            <span className="font-medium">Address:</span> {user.address}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {user.phone}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            View Orders
          </button>
          <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
            Wishlist
          </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition">
            Account Settings
          </button>
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
