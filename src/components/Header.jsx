import React, { useEffect, useState } from "react";
import Button from "./button";
import { navItems } from "../utils";

function Header() {
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
    <header
      className={`z-50 justify-between items-center pl-10 pr-6 py-8 fixed top-0 left-0 w-full font-[SFProDisplay-Regular] hidden md:flex ${
        stickyHeader ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="logo flex justify-center items-center" onClick={() => window.scrollTo(0, 0)}>
        <svg
          width="50"
          height="23"
          viewBox="0 0 50 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" width="34" height="12" rx="6" fill="white" />
          <rect y="11" width="35" height="12" rx="6" fill="white" />
        </svg>
      </div>

      <nav className="flex items-center scroll-smooth gap-4 self-center relative -mr-56">
        {navItems.length > 0 &&
          navItems.map((navItem) => (
            <a href={navItem.slug} key={navItem.slug}>
              <span
                key={navItem.label}
                className="cursor-pointer text-white tracking-wider hover:text-slate-50"
              >
                {navItem.label}
              </span>
            </a>
          ))}
      </nav>

      <div className="actions flex items-center gap-4">
        <Button variant="primary">Login</Button>
        <Button variant="primary" type="signup">
          Registeration
        </Button>
        <figure id="language-switcher">
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_169_38)">
              <path
                d="M30.2886 0H1.31556C0.590222 0 0 0.5478 0 1.2221V20.779C0 21.4522 0.590222 22 1.31674 22H30.2886C30.4615 22 30.6326 21.9684 30.7923 21.907C30.952 21.8455 31.0971 21.7555 31.2192 21.642C31.3414 21.5285 31.4383 21.3938 31.5043 21.2455C31.5704 21.0972 31.6043 20.9383 31.6041 20.7779V1.221C31.6041 0.897361 31.4657 0.586962 31.2192 0.358011C30.9728 0.129061 30.6373 0.000291567 30.2886 0Z"
                fill="#002781"
              />
              <path
                d="M31.6053 1.2221C31.6053 0.5478 31.0151 0 30.2886 0H26.8895L18.4367 6.0357V0H13.1674V6.0357L4.71467 0H1.31674C0.590222 0 0 0.5478 0 1.2221V2.8028L8.05926 8.5558H0V13.4442H8.05926L0 19.1972V20.7779C0 21.4522 0.590222 22 1.31674 22H4.71467L13.1686 15.9643V22H18.4367V15.9643L26.8895 22H30.2886C30.4615 22 30.6326 21.9684 30.7923 21.907C30.952 21.8455 31.0971 21.7555 31.2192 21.642C31.3414 21.5285 31.4383 21.3938 31.5043 21.2455C31.5704 21.0972 31.6043 20.9383 31.6041 20.7779V19.1983L23.5461 13.4453H31.6053V8.5547H23.5461L31.6053 2.8017V1.2221Z"
                fill="#E6E6E6"
              />
              <path
                d="M31.6053 9.7779H17.1188V0H14.4853V9.7779H0V12.2221H14.4853V22H17.1188V12.2221H31.6053V9.779V9.7779Z"
                fill="#D10D24"
              />
              <path
                d="M30.9476 0.187012L19.2261 8.55471H21.3867L31.6053 1.25951V1.22101C31.6053 0.774412 31.3327 0.400412 30.9476 0.187012ZM21.3867 13.4453H19.2273L30.9487 21.813C31.3339 21.5996 31.6053 21.2256 31.6053 20.779V20.7405L21.3867 13.4453ZM10.2187 13.4453L0 20.7405V20.7779C0 21.2256 0.272593 21.5996 0.657778 21.8119L12.3793 13.4453H10.2187ZM10.2187 8.55471H12.3781L0.657778 0.187012C0.460351 0.290993 0.295731 0.441176 0.18032 0.622598C0.064909 0.804019 0.0027373 1.01034 0 1.22101L0 1.25951L10.2187 8.55471Z"
                fill="#D10D24"
              />
            </g>
            <defs>
              <clipPath id="clip0_169_38">
                <rect width="32" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </figure>
      </div>
    </header>
  );
}

export default Header;
