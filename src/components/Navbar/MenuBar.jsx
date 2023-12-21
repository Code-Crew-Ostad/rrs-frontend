import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {UserLogout} from "../../api/apiRequest";
import SubmitButton from './../SubmitButton';

const MenuBar = () => {

  //const userData = useSelector((state)=>state.user.data)

  const [logoutLoader,setLogoutLoader]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onLogoClick = async ()=>{
    if(localStorage.getItem('login')==="1"){
      navigate("/feed")
    }
    else{
      navigate("/")
    }
  }

  const Logout = async () => {
    setLogoutLoader(true)
    sessionStorage.clear();
    localStorage.clear();
    await UserLogout()
    setLogoutLoader(false);
    navigate("/login")
}

  return (
    <div className="sticky top-0 z-50 bg-[#f4f4f4] border-b shadow-md">
      <nav className="flex justify-between rounded-sm shadow-sm shadow-gray  pt-2 pb-2 ps-24 pe-24">
      <div className="flex mt-1">
          <button className="flex" to="/">
            <img
              className="h-12 pb-1 mr-1 drop-shadow-sm"
              src="/get-rest-sqr.svg"
              alt=""
              onClick={onLogoClick}
            />
              <div className="flex flex-col text-[#474646] gap-0">
                <span className="font-bold text-xl mt-2 m-0 p-0">get rest</span>
          
              </div>
          </button>

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

        <div className="w-full mb-1">
          <div className="flex w-full">
            <label
              for="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg  focus:outline-none"
              type="button"
            >
              All Locations{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
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
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 "
                  >
                    Dhaka
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 "
                  >
                    Chattogram
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2"
                  >
                    Sylhet
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2"
                  >
                    Khulna
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none"
                placeholder="Search your favorite Restaurant..."
                required
                autoFocus="true"
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#25916a] rounded-e-lg border focus:outline-none hover:opacity-95"
              >
                <svg
                  className="w-4 h-4"
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
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2">
          {
            (()=>{
              if(localStorage.getItem('login')==="1"){
                return(
                  <>
                    <button onClick={toggleMenu} type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                      <span class="sr-only">Open user menu</span>
                      <img class="w-8 h-8 rounded-full" src="/public/get-rest-sqr.svg" alt="user photo"/>
                    </button>
                    {isOpen && (
                      <div class="absolute right-4 my-4 text-base list-none bg-[#f4f4f4] divide-y divide-green-500 rounded-lg shadow-lg" id="user-dropdown">
                        <div class="px-4 py-3">
                          <span class="block text-sm text-gray-900 ">{localStorage.getItem('name')}</span>
                          <span class="block text-sm  text-gray-500 truncate ">{localStorage.getItem('email')}</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                          <li>
                            <Link type="button" className="block px-4 py-2 text-sm text-gray-700" to="/profile">Profile</Link>
                          </li>
                          <li>
                          <SubmitButton submit={logoutLoader} text="Logout" onClick={Logout} type="button" className="block px-4 py-2 text-sm text-gray-700"/>
                          </li>
                        </ul>
                      </div>
                    )}

                  </>
                )
              }
              else{
                return(
                  <>
                    <Link
                      className="p-2 border-b border-transparent hover:border-b-[#25916a]"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="p-2 border-b border-transparent hover:border-b-[#25916a]"
                      to="/register"
                    >
                      Register
                    </Link>
                  </>
                )
              }
            })()
          }
        </div>
      </div>
      </nav>
    </div>
  );
};

export default MenuBar;
