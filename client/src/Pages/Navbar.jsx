import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from './Context';
// import useLocalState from './utils/localState';
import axios from 'axios';

function Navbar() {
  const { saveUser } = useGlobalContext();
  const { user, logoutUser } = useGlobalContext();

  const [isAuthenticated, setData] = useState(false);
  // const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
    // const history = useHistory();
  const Login = async () => {
  
    try {
      console.log("ja");
      window.location.href = 'http://localhost:5000/login';
    
      // history.push('/dashboard');
    } catch (error) {
      // showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  }

  const Logout = () => {
    setData(false);
    window.location.href = 'http://localhost:5000/logout';
    logoutUser();
  }

  // Clear custom session variable
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isAuthenticatedParam = urlParams.get('isAuthenticated');
    const titleParam = urlParams.get('title');

    if (isAuthenticatedParam && titleParam) {
      console.log(isAuthenticatedParam);
      setData(isAuthenticatedParam === 'true');
    }
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="Icon.jpeg" className="h-8 mr-3" alt="Contentify" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Contentify
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Profile"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li>
              {!user ? (
                <button
                  onClick={Login}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 hover-underline-animation dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover-underline-animation"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={Logout}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 hover-underline-animation dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover-underline-animation"
                >
                  Logout
                </button>
              )}
            </li>
            <li>
              {user && (
                <div className="flex  gap-4 ">
                  <Link to="/Profile">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.picture}
                      alt={user.name}
                    />
                  </Link>

                  <p class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 hover-underline-animation  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover-underline-animation ">
                    {" "}
                    {user.name}{" "}
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
