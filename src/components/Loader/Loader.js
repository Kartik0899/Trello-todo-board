import React from "react";

const Loader = () => {
  return (
    <div class="animate-pulse md:flex md:items-center flex space-x-4">
      <div class="flex items-center justify-center w-full h-60 bg-gray-300 rounded-sm">
        <div>Pending todos are loading....</div>
      </div>

      <div class="flex items-center justify-center w-full h-60 bg-gray-300 rounded-sm">
        <div>Completed todos are loading....</div>
      </div>
    </div>
  );
};

export default Loader;
