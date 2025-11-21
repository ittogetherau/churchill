import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="w-full h-24 border-2 rounded-md mt-4">
        <div className="flex animate-pulse flex-col h-full justify-center space-y-3 px-4">
          <div className="w-full bg-gray-300 h-6 rounded-md"></div>
          <div className="w-3/4 bg-gray-300 h-6 rounded-md"></div>
        </div>
      </div>
      <div className="w-full h-24 border-2 rounded-md mt-4">
        <div className="flex animate-pulse flex-col h-full justify-center space-y-3 px-4">
          <div className="w-full bg-gray-300 h-6 rounded-md"></div>
          <div className="w-3/4 bg-gray-300 h-6 rounded-md"></div>
        </div>
      </div>
      <div className="w-full h-24 border-2 rounded-md mt-4">
        <div className="flex animate-pulse flex-col h-full justify-center space-y-3 px-4">
          <div className="w-full bg-gray-300 h-6 rounded-md"></div>
          <div className="w-3/4 bg-gray-300 h-6 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;