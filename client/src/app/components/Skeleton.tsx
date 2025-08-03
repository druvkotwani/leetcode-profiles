import React from "react";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-[400px] w-full px-8 pb-3 bg-[#0e0e0e] flex justify-center flex-col items-center rounded h-[280px] border-2 border-[#cecece] shadow animate-pulse"
    >
      {/* Profile section skeleton */}
      <div className="flex gap-1 xl:gap-4 items-center justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
          <div className="flex flex-col gap-1">
            <div className="h-4 bg-gray-600 rounded w-20"></div>
            <div className="h-3 bg-gray-600 rounded w-16"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[0.5px] bg-gray-600 w-full mb-4"></div>

      {/* Stats section skeleton */}
      <div className="flex gap-5 items-center justify-center">
        <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-600 rounded w-12"></div>
            <div className="h-2 bg-gray-600 rounded w-20"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-600 rounded w-16"></div>
            <div className="h-2 bg-gray-600 rounded w-20"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-600 rounded w-12"></div>
            <div className="h-2 bg-gray-600 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
