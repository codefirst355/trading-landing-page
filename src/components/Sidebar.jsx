import React, { useEffect, useState } from "react";
import Button from "./button";
import { navItems } from "../utils";

function Sidebar() {
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) setStickyHeader(true);
      else setStickyHeader(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div
        className={`fixed z-50 top-0 left-0 flex items-center justify-between w-full py-4 px-4 md:hidden ${
          stickyHeader ? "backdrop-blur-sm" : ""
        }`}
      >
        <div className="logo flex gap-4 justify-center items-center pl-2">
          <svg
            width="50"
            height="23"
            viewBox="0 0 50 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => window.scrollTo(0, 0)}
          >
            <rect x="16" width="34" height="12" rx="6" fill="white" />
            <rect y="11" width="35" height="12" rx="6" fill="white" />
          </svg>
        </div>
        <div className="flex gap-4 items-center">
          <Button type="signin">Login</Button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
