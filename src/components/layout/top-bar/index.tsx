import React from "react";

// Components
import Button from "@/components/ui/button";

const TopBar = () => {
  return (
    <>
      <div className="py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* left */}
            <div className="flex items-center gap-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-[400]">
                Projects: <span className="text-primary-500">16</span>
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 font-[400]">
                Creators: <span className="text-primary-500">9</span>
              </p>
            </div>

            {/* right */}
            <div className="flex items-center gap-5">
              <Button size="sm" variant="outline">
                Sign In
              </Button>

              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
