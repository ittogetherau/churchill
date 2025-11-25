import React from "react";

const Loading = () => {
  return (
    <div className="h-[40vh] grid place-items-center">
      <i className="fi fi-rr-spinner text-5xl animate-spin flex text-brand-primary"></i>
    </div>
  );
};

export default Loading;
