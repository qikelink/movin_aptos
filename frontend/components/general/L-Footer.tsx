import React from "react";

export const LFooter = () => {
  return (
    <>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-yellow-400 font-semibold text-xl">TurboGo</p>
          <p className="text-sm w-48 lg:w-96">
            Your easy guide to all things onchain. Learn, earn and race through terrains on Aptos, one adventure at a
            time.
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <img src="/public/icons/Twitter X.svg" />
          <img src="/public/icons/Discord Icon.svg" />
        </div>
      </div>

      {/* Todo: add image here */}

    </>
  );
};
