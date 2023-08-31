import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-[#272e71] p-7 flex  justify-between">
      <div>
        <img
          src="logo.svg"
          height="200px"
          width="200px"
          style={{ color: "white" }}
        />
      </div>
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          size="20"
          placeholder="Enter interests,comapny,name,etc."
        />
      </div>
      <div className="last3">
        <div>
          <button className=" h8 w-8 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover "
              src="https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
            />
          </button>
          <select className="mt-4 focus:outline-none bg-[#272e71]">
            <option></option>
            <option>h</option>
          </select>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
      </div>
    </div>
  );
};
export default Header;
