import React, { useContext, useState } from "react";
import logo from "../assets/Logo/Theeb.png";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/icons/user.png";
import cart from "../assets/icons/cart.png";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [userToken, setUserToken] = useState(true);
  const navigate = useNavigate();
  const { currency } = useContext(ShopContext);
  return (
    <div className="flex items-center py-2 justify-around">
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
      <ul className="flex gap-4">
      <li className="relative group">
  <Link to={"/"}>HOME</Link>
  <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
</li>

        <li className="relative group">
          <Link to={"/brands"}>BRANDS</Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link to={"/perfumes"}>PERFUMES</Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link to={"/about-us"}>ABOUT US</Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
        <li className="relative group">
          <Link to={"/contact-us"}>CONTACT US</Link>
          <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-mainColor transition-all duration-300  group-hover:w-[75%]"></span>
        </li>
      </ul>

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
              <p className="text-sm">{currency}.0.00</p>
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
            className="bg-mainColor text-white text-xs px-6 py-2 rounded-full hover:opacity-80 duration-300"
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
