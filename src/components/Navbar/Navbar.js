import React, { useState } from "react";
import Links from "../Links/Links";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Service", link: "/service" },
    { id: 3, name: "DashBoard", link: "/dashboard" },
    { id: 4, name: "Reviews", link: "/review" },
    { id: 5, name: "Blogs", link: "/blogs" },
    { id: 6, name: "About Us", link: "/aboutus" },
    { id: 7, name: "Explore more", link: "/explore" },
  ];
  return (
    <nav className="bg-green-100 w-full nav">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center bg-green-100 items-center absolute md:static w-full duration-500 ease-in ${
          open ? "top-5" : "top-[-220px]"
        }`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
