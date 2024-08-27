import React, { useRef, useState } from "react";

function Accordian({ main, body }) {
  const [open, setOpen] = useState(false);
  const showRef = useRef(null);

  return (
    <div
      className="flex flex-col w-full border-b border-muted overflow-hidden duration-75 pb-6"
      style={{
        height: open
          ? showRef.current.offsetHeight +
            showRef.current.previousElementSibling.offsetHeight +
            "px"
          : "5rem",
        transitionProperty: "height",
        transitionDuration: "400ms",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <div className="question flex justify-between items-center py-6 w-[100%]">
        <label className="text-xs md:text-xl lg:text-3xl font-[SFProDisplay-Bold]">{main}</label>
        <figure className="rotate-90" onClick={() => setOpen((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </figure>
      </div>
      <div className="answer font-[SFProDisplay-Regular] pb-6" ref={showRef}>
        <span className="text-sm md:text-lg lg:text-2xl">{body}</span>
      </div>
    </div>
  );
}

export default Accordian;
