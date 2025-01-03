import React, { useContext, useState } from "react";
import logo from "../assets/Logo/Theeb.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/icons/user.png";
import cart from "../assets/icons/cart.png";
import menu from "../assets/icons/menu.png";
import close from "../assets/icons/close.png";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [userToken, setUserToken] = useState(false);
  const navigate = useNavigate();
  const { currency } = useContext(ShopContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path; 
  return (
    <div className="flex items-center py-2 justify-around">
      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <img
          onClick={() => setShowMobileMenu(true)}
          className={`lg:hidden w-8`}
          src={menu}
          alt=""
        />
      </div>
      {/* Theeb Logo */}
      <div className="flex items-center justify-center">
        <img
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          src={logo}
          className="w-[200px] cursor-pointer"
          alt=""
        />
      </div>
      {/* Navlinks */}
      <ul className="hidden lg:flex gap-4">
        <li className="relative group">
          <Link
            to="/"
            className={`${
              isActive("/") ? "font-semibold text-mainColor" : ""
            }`}
          >
            HOME
          </Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link
            to="/brands"
            className={`${
              isActive("/brands") ? "font-semibold text-mainColor" : ""
            }`}
          >
            BRANDS
          </Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link
            to="/perfumes"
            className={`${
              isActive("/perfumes") ? "font-semibold text-mainColor" : ""
            }`}
          >
            PERFUMES
          </Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link
            to="/about-us"
            className={`${
              isActive("/about-us") ? "font-semibold text-mainColor" : ""
            }`}
          >
            ABOUT US
          </Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link
            to="/contact-us"
            className={`${
              isActive("/contact-us") ? "font-semibold text-mainColor" : ""
            }`}
          >
            CONTACT US
          </Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
      </ul>

      {/* Mobile menu navbar links */}
      <div
        className={`${
          showMobileMenu ? "w-full left-0" : "w-0 -left-full"
        } max-w-[300px] flex flex-col h-screen z-10 bg-white duration-300 transition-all absolute top-0 bottom-0 overflow-hidden shadow-xl p-8`}
      >
       <div className="flex items-center justify-end">
       <img onClick={()=>setShowMobileMenu(false)} src={close} className="w-4 cursor-pointer " alt="" />
       </div>
        <div className="flex flex-col text-mainColor mt-8">
          <Link onClick={()=>{setShowMobileMenu(false);window.scrollTo(0,0)}} className="text-lg font-medium ml-2 hover:pl-4 duration-300 transition-all" to={"/"}>HOME</Link>
          <Link onClick={()=>{setShowMobileMenu(false);window.scrollTo(0,0)}} className="text-lg font-medium ml-2 hover:pl-4 duration-300 transition-all"  to={"/brands"}>BRANDS</Link>
          <Link onClick={()=>{setShowMobileMenu(false);window.scrollTo(0,0)}} className="text-lg font-medium ml-2 hover:pl-4 duration-300 transition-all"  to={"/perfumes"}>PERFUMES</Link>
          <Link onClick={()=>{setShowMobileMenu(false);window.scrollTo(0,0)}} className="text-lg font-medium ml-2 hover:pl-4 duration-300 transition-all"  to={"/about-us"}>ABOUT US</Link>
          <Link onClick={()=>{setShowMobileMenu(false);window.scrollTo(0,0)}} className="text-lg font-medium ml-2 hover:pl-4 duration-300 transition-all"  to={"/contact-us"}>CONTACT US</Link>
        </div>
      </div>

      {/* Cart Login/profile */}
      <div>
        {userToken ? (
          <div className="flex items-center gap-4">
            <div
              onClick={() => {
                navigate("/cart");
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-1 cursor-pointer"
            >
              <img src={cart} className="w-6 " alt="" />
              <p className="hidden sm:text-sm">{currency}.0.00</p>
            </div>
            <img
              onClick={() => {
                navigate("/user-profile");
                window.scrollTo(0, 0);
              }}
              src={profile}
              className="w-6 cursor-pointer"
              alt=""
            />
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
              window.scrollTo(0, 0);
            }}
            className={`${isActive('/login')||isActive('/sign-up')?"hidden":""} bg-mainColor text-white text-xs px-6 py-2 rounded-full hover:opacity-80 duration-300`}
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
