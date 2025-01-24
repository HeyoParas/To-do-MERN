import React from "react";

const SkeletonBoard = () => {
  return (
    <div className="flex bg-gray-800 text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-700 p-4">
        {/* Logo */}
        <div className="h-10 bg-gray-600 rounded mb-6"></div>

        {/* Navigation Links */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-8 bg-gray-600 rounded mb-4 animate-pulse"
          ></div>
        ))}

        {/* Footer Section */}
        <div className="mt-auto">
          <div className="h-8 bg-gray-600 rounded"></div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="h-8 bg-gray-600 rounded w-1/3"></div>
          <div className="flex gap-4">
            <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
          </div>
        </header>

        {/* Filter and Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 bg-gray-600 rounded w-1/4"></div>
          <div className="flex gap-4">
            <div className="h-8 w-24 bg-gray-600 rounded"></div>
            <div className="h-8 w-32 bg-gray-600 rounded"></div>
          </div>
        </div>

        {/* Columns */}
        <div className="flex gap-4">
          {/* Column */}
          {["To do", "In Progress", "Done"].map((_, index) => (
            <div
              key={index}
              className="flex-1 bg-gray-700 p-4 rounded-lg border border-dashed border-gray-500"
            >
              {/* Column Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="h-5 bg-gray-500 rounded w-1/3"></div>
                <div className="h-8 w-8 bg-gray-500 rounded-full"></div>
              </div>
              {/* Cards */}
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-600 p-4 rounded-lg mb-4 animate-pulse"
                >
                  {/* Card Title */}
                  <div className="h-4 bg-gray-500 rounded w-2/3 mb-2"></div>
                  {/* Card Subtitle */}
                  <div className="h-3 bg-gray-500 rounded w-1/2 mb-4"></div>
                  {/* Progress Bar */}
                  <div className="h-2 bg-gray-500 rounded w-full mb-2"></div>
                  {/* Date */}
                  <div className="h-4 bg-gray-500 rounded w-1/4"></div>
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-2">
                    <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SkeletonBoard;
