import React from "react";
export default function Navbar() {
    return (
      <header className="bg-black text-white">
        {/* Top bar with Download and Sign In/Up */}
        <div className="flex justify-between items-center p-1 text-sm bg-gray-900 text-gray-300">
          <div className="flex items-center">
            <span className="bg-red-500 mr-2"></span>
            <span>Download app via SMS</span>
          </div>
          <div>
            <span className="mr-4">Sign Up</span> | <span className="mr-4">Sign In</span>
          </div>
        </div>
  
        {/* Main navigation */}
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          
          <div className="flex flex-col items-center">
            {/* Logo Image */}
            <img
              src="/logo_car.png"  // Ensure this is the correct path to the image
              alt="Pakwheels Logo"
              className="h-9 w-24"  // Adjust the size as needed, remove bottom margin
              style={{ marginBottom: '-4px' }}  // This helps to bring the text closer to the image
            />
            {/* Pakwheels Text */}
            <span className="text-lg font-semibold leading-none  text-red-300 ">Pakwheels</span>  
            {/* `leading-none` reduces the space between lines */}
          </div>
  
          {/* Navigation items */}
          <nav className="flex space-x-6">
            <span className="hover:text-gray-400">Used Cars</span>
            <span className="hover:text-gray-400">New Cars</span>
            <span className="hover:text-gray-400">Bikes</span>
            <span className="hover:text-gray-400">Auto Store</span>
            <span className="hover:text-gray-400">Videos</span>
            <span className="hover:text-gray-400">Forums</span>
            <span className="hover:text-gray-400">Blogs</span>
            <span className="hover:text-gray-400">
              More <span className="bg-blue-600 text-white px-1 ml-1 rounded">New</span>
            </span>
          </nav>

          <div>
            <button className="py-2 px-6 rounded-lg text-white bg-red-500 ">Post an add</button>
          </div>
        </div>
      </header>
    );
  }
  