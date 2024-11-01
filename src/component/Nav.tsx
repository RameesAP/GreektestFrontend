import { useEffect, useState } from "react";
import img from "../assets/react.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Nav = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [searchMovies, setSearchMovies] = useState();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);

  // const [searchName, setsearchName] = useState("");

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://greektestbackend.onrender.com/api/movieList",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             title: searchName,
  //             // category: "movies",
  //             // language: "kannada",
  //             // genre: "all",
  //             // sort: "voting",
  //           }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.statusText}`);
  //       }

  //       const data = await response.json();
  //       console.log("Movies:", data);
  //       setSearchMovies(data.result);
  //     } catch (error) {
  //       setError("Failed to fetch movies");
  //       console.error("Error fetching movie data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  // const getSearchedData = () =>{

  // }

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // if (loading) return <div className="text-center mt-8">Loading...</div>;
  // if (error)
  //   return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={img} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MoviesWeb
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

  

        {/* Main navigation links */}
        <div className="hidden w-full md:block md:w-auto ">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}
              >
                Company Info
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                className={`z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                } font-normal bg-white divide-y w-[330px] h-fit divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute`}
              >
                <Card className="">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Company Info</h2>
                    <p>
                      <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
                    </p>
                    <p>
                      <strong>Address:</strong> Sanjayanagar, Bengaluru-56
                    </p>
                    <p>
                      <strong>Phone:</strong> XXXXXXXXX09
                    </p>
                    <p>
                      <strong>Email:</strong> XXXXXX@gmail.com
                    </p>
                  </CardContent>
                </Card>
              </div>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
