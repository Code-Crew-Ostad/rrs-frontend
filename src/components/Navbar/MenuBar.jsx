import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
const MenuBar = () => {
  return (
    <nav className="flex justify-between rounded-sm shadow-sm shadow-green-300 pt-5 pb-5 ps-24 pe-24">
      <div className="flex">
        <h4 className="text-2xl font-bold mr-10 drop-shadow-sm">
          <Link className="flex gap-2" to="/">
            <img
              className="h-14 pb-1 drop-shadow-sm"
              src="/get-rest2.svg"
              alt=""
            />{" "}
            <span className="mt-2">GET REST</span>
          </Link>
        </h4>
        <ul className="flex gap-6 mt-3">
          {/* <li><Link className='p-2 rounded hover:text-white hover:bg-green-400' to="/about">About Us</Link></li>
              <li><Link className='p-2 rounded hover:text-white hover:bg-green-400' to="/contact">Contact Us</Link></li> */}
        </ul>
      </div>
      <div className="flex gap-8 me-2 w-8/12 pt-2">
        {/* <input
              type="search"
              name="search"
              id=""
              placeholder= "Search here"
              autoComplete="off"
              className="p-3 border border-green-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] h-10 placeholder:"
            /> */}

        <div className="w-full">
          <div class="flex w-full">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-green-100 border border-gray-300 rounded-s-lg  focus:outline-none hover:bg-green-200"
              type="button"
            >
              All Locations{" "}
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 "
                  >
                    Dhaka
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 "
                  >
                    Chattogram
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2"
                  >
                    Sylhet
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2"
                  >
                    Khulna
                  </button>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none"
                placeholder="Search your favorite Restaurant..."
                required
                autoFocus="true"
              />
              <button
                type="submit"
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-green-400 rounded-e-lg border focus:outline-none hover:bg-green-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <Link
            className="p-2 rounded hover:text-white hover:bg-green-400"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="p-2 rounded hover:text-white hover:bg-green-400"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
