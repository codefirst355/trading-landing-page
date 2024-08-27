import React from "react";

function Contact() {
  return (
    <div id="support" className="w-full flex flex-col items-center gap-16 pt-32 pb-5 text-center z-10">
      <h1 className="heading">Connect with xxxxx</h1>
      <div className="relative border border-white text-white rounded-lg pl-4 py-2 flex justify-between w-[280px] lg:w-[320px]">
        <label
          className="absolute -top-3 left-4 text-sm overflow-hidden bg-black px-2"
          htmlFor="email"
        >
          Email
        </label>
        <div className="flex w-full h-full justify-between items-center">
          <input
            type="text"
            placeholder="info.xxx@example.com"
            className="outline-none border-none bg-transparent placeholder-[#1E1E1E]"
          />
        </div>
        <figure className="absolute top-2 right-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="14" stroke="#9C9C9C" strokeWidth="2" />
            <path
              d="M21.7071 15.7071C22.0976 15.3166 22.0976 14.6834 21.7071 14.2929L15.3431 7.92893C14.9526 7.53841 14.3195 7.53841 13.9289 7.92893C13.5384 8.31946 13.5384 8.95262 13.9289 9.34315L19.5858 15L13.9289 20.6569C13.5384 21.0474 13.5384 21.6805 13.9289 22.0711C14.3195 22.4616 14.9526 22.4616 15.3431 22.0711L21.7071 15.7071ZM9 16L21 16V14L9 14V16Z"
              fill="#9C9C9C"
            />
          </svg>
        </figure>
      </div>
    </div>
  );
}

export default Contact;
