import React from "react";
import "./Body.css";
const Body = () => {
  return (
    <>
      <div className="w-full bg-metal text-white mx-auto grid lg:grid-cols-12 mg:grid-cols-1 gap-2">
        <div className="bg-[#ffffff]  py-2 col-span-3">
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className=" h-20 w-20 rounded-full overflow-hidden">
              <img src="https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg" />
            </div>
            <div className="flex items-center">
              <div className="text-sm ml-5">
                <p className="text-gray-900 leading-none text-2xl">
                  Hidayat Morning Star
                </p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          <div className="ml-5 mt-5 text-gray-900 text-xl">
            <ul className="">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                Members
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                Organisation
                <select>
                  <option></option>
                  <option></option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#ffffff]  py-2 col-span-6">
          <di>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </li>
              <li>Home</li>
              <li>
                <button>Hiii</button>
              </li>
            </ul>
          </di>
          <span>
            <div>
              <img
                className="w-100 h-100 "
                src="https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
            <div>
              <h1 className="text-3xl text-gray-900">
                Lorem, ipsum dolor sit amet consectetur
              </h1>
              <p className="text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                obcaecati expedita ipsam facilis necessitatibus eaque minima
                consequuntur maiores, exercitationem quos porro pariatur
                blanditiis architecto a esse maxime perspiciatis nesciunt
                beatae!
              </p>
            </div>
          </span>
          <span>
            <div className="h-300 w-300 border border-solid ">
              <h1 className="text-2xl text-gray-900">Video</h1>
              <div class="max-w-lg mx-auto">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/woUgUFRf9p4?si=J5gqUe9zZ-DXaA2u"
                  title="YouTube Video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </span>
        </div>

        <div className="bg-[#ffffff]  py-2 col-span-3">
          <h1 className="text-3xl ml-2 text-gray-900">Offered By</h1>
          <img className="mt-7 ml-3" src="../logo1.svg" />
          <div className="max-w-sm w-full lg:max-w-full lg:flex mt-5 ml-2">
            <div className=" h-20 w-20 rounded-full overflow-hidden">
              <img src="https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg" />
            </div>
            <div className="flex items-center">
              <div className="text-sm ml-2">
                <p className="text-gray-900 leading-none text-2xl">
                  Hidayat Morning Star
                </p>
                <p className="text-gray-600">Aug Aug Aug</p>
              </div>
            </div>
          </div>
          <ul className="text-gray-900 mt-4 ml-3 text-lg">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </li>
            O42 20futa
          </ul>
        </div>
      </div>
    </>
  );
};
export default Body;
