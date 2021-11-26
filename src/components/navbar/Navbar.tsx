import React from "react";
import {Link} from "react-router-dom";

export const Navbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [inHome, setInHome] = React.useState(true);
    return (
        <>
            <nav
                className={
                    "w-full relative bg-white shadow-lg inline-flex flex-wrap justify-between items-center px-0 py-3 "
                }>
                <div className="w-full px-0 mx-5 flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className={"text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            } to="/">
                            Zhechun
                        </Link>

                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    <div className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                         id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:justify-end">

                            {/*resume*/}
                            <li className="nav-item">
                                <Link
                                    className={
                                        "text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"}
                                    to="/purchase">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                    <span className="ml-2">download CV</span>
                                </Link>
                            </li>


                            {/*contact*/}
                            <li className="nav-item">
                                <Link
                                    className={
                                        "text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    }
                                    to="/about">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                    </svg>
                                    <span className="ml-2">Contact Me</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}