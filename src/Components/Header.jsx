import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../ContextStore/AuthContext";
import OlxLogo from "../assets/OlxLogo";
import SearchIcon from "../assets/SearchIcon";
import Arrow from "../assets/Arrow";


function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [location, setLocation] = useState(false);
  const [language, setLanguage] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleSelectedSearch = (value) => {
    setPostContent(value);
    navigate("/view");
  };

  const handleEmptyClick = () => {
    alert("Please Enter the input");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleLanguageDropdown = () => {
    setLanguage((prev) => !prev);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50 p-3">
        <div className="flex justify-between items-center">
          <OlxLogo />

          {!location ? (
            <div className="bg-white h-12 ml-8 p-3 w-30 relative border-2 border-gray-950 rounded-md">
              <li className="grid bg-clip-text">
                <div className="flex ">
                  <div className="w-10">
                    <div onClick={handleEmptyClick} className="w-10">
                      <SearchIcon />
                    </div>
                  </div>
                  <div>
                    <input placeholder="Kerala" />
                  </div>
                  <div>
                    <button
                      className="w-12 h-5"
                      onClick={() => setLocation(true)}
                    >
                      <div id="clearBtn" className="ml-5">
                        <Arrow />
                      </div>
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ) : (
            <div className="bg-white h-12 ml-8 p-3 w-30 relative border-2 border-gray-950 rounded-md">
              <li className="grid bg-clip-text">
                <div className="flex">
                  <div className="w-10">
                    <div onClick={handleEmptyClick} className="w-12">
                      <SearchIcon />
                    </div>
                  </div>
                  <div>
                    <input placeholder="Search city, area or locality" />
                  </div>
                  <div>
                    <button
                      className="w-12 h-5"
                      onClick={() => setLocation(false)}
                    >
                      <div id="clearBtn" className="ml-5">
                        <Arrow />
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <ul className="absolute w-60 bg-white shadow-lg rounded-md m-5">
                    <li className="mt-8 m-4 w-4 h-4 flex  hover: cursor-pointer">
                      <img src="/location.png" />
                      <span className="pl-2   hover: cursor-pointer">
                        Kerala
                      </span>
                    </li>
                    <li className="mt-8 m-4 w-4 h-4 flex  hover: cursor-pointer">
                      <img src="/location.png" />
                      <span className="pl-2  hover: cursor-pointer">
                        Tamilnadu
                      </span>
                    </li>
                    <li className="mt-8 m-4 w-4 h-4 flex  hover: cursor-pointer">
                      <img src="/location.png" />
                      <span className="pl-2  hover: cursor-pointer">
                        Karnataka
                      </span>
                    </li>
                    <li className="mt-8 m-4 w-4 h-4 flex  hover: cursor-pointer">
                      <img src="/location.png" />
                      <span className="pl-2  hover: cursor-pointer">
                        Andrapradesh
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          )}

          <div className="flex ml-4 h-12 mt-2 w-100 border-2 border-gray-950 rounded-md">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and More ...."
              value={wordEntered}
              onChange={handleFilter}
              className="w-80"
            />
            {filteredData.length === 0 ? (
              <div onClick={handleEmptyClick} className="w-12 p-3">
                <SearchIcon />
              </div>
            ) : (
              <div id="clearBtn" onClick={clearInput}>
                <Arrow />
              </div>
            )}
            {filteredData.length !== 0 && (
              <div className="absolute z-10 bg-white shadow-lg w-64 mt-1">
                {filteredData.slice(0, 15).map((value, key) => (
                  <div
                    key={key}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelectedSearch(value)}
                  >
                    <p>{value.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {language ? (
            <div className="relative">
              <div className="h-12 rounded-md w-40">
                <li className="font-bold text-sm pt-4 ml-6 olx-font flex">
                  ENGLISH
                  <div
                    className="cursor-pointer relative"
                    onClick={toggleLanguageDropdown}
                  >
                    <Arrow />
                  </div>
                </li>
              </div>

              {/* Language Dropdown */}
              <div className="absolute bg-white shadow-lg rounded-md top-14 left-0 w-40 z-50">
                <div className="grid olx-font text-sm gap-3 p-4">
                  <span className="hover:bg-gray-300 p-1 cursor-pointer">
                    ENGLISH
                  </span>
                  <span className="hover:bg-gray-300 p-1 cursor-pointer">
                    HINDI
                  </span>
                  <span className="hover:bg-gray-300 p-1 cursor-pointer">
                    TELUGU
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-12 rounded-md w-40">
              <li className="font-bold text-sm pt-4 ml-6 olx-font flex">
                ENGLISH
                <div
                  className="cursor-pointer relative"
                  onClick={toggleLanguageDropdown}
                >
                  <Arrow />
                </div>
              </li>
            </div>
          )}

          <div className="flex items-center relative">
            {user ? (
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <span className="ml-5 mt-3 olx-font text-sm underline hover:text-red-600 cursor-pointer">
                    {user ? `Welcome ${user?.displayName}` : ""}
                  </span>
                  <div
                    className="cursor-pointer relative"
                    onClick={toggleDropdown}
                  >
                    <Arrow />
                  </div>
                </div>
                {dropdownOpen && (
                  <div className="absolute w-32 bg-white shadow-lg rounded-md m-10">
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="mr-3">
                <span>Login</span>
              </Link>
            )}
            <Link to="/create">
              <div className="flex items-center cursor-pointer">
                <div className="flex items-center ml-1">
                  <img src="/sell-logo.png" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
