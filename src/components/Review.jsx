import React, { useEffect, useRef, useState } from "react";
import { CardContainer } from "./card";
import { getVisibleElementsCount, normalize } from "../utils";

function Review() {
  const reviews = [
    {
      label: "Amar",
      icon: "",
      text: "I also appreciate the support team's helpfulness and responsiveness, along with the platform's fast functionality and instant withdrawals.",
    },
    {
      label: "Jai",
      icon: "",
      text: "This level of efficiency and support has enhanced my trading experience and trust in the platform",
    },
    {
      label: "Neha",
      icon: "",
      text: "Depositing funds and accessing earnings instantly has made trading much easier",
    },
    {
      label: "Amar",
      icon: "",
      text: "I also appreciate the support team's helpfulness and responsiveness, along with the platform's fast functionality and instant withdrawals.",
    },
    {
      label: "Jai",
      icon: "",
      text: "This level of efficiency and support has enhanced my trading experience and trust in the platform",
    },
    {
      label: "Neha",
      icon: "",
      text: "Depositing funds and accessing earnings instantly has made trading much easier",
    },
  ];

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024 ? true : false
  );
  const [isTab, setIsTab] = useState(
    window.innerWidth < 1024 && window.innerWidth >= 768 ? true : false
  );
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 ? true : false
  );

  const [scrollY, setScrollY] = useState(0);
  const [carsoleScrollY, setCarsoleScrollY] = useState(0);

  const carsoleContainerRef = useRef(null);
  const carsoleBarRef = useRef(null);

  let scroll = 0;
  let totalWidth = 0;
  const childrentCount = getVisibleElementsCount(carsoleContainerRef.current);

  if (isDesktop) {
    scroll = 401 + 20 + (32 - 20);
    totalWidth = reviews.length * scroll;
  }
  if (isTab) {
    scroll = 321 + 20 + (32 - 20);
    totalWidth = reviews.length * scroll;
  }
  if (isMobile) {
    scroll = 321 + 20 + (32 - 20);
    totalWidth = reviews.length * scroll;
  }
  totalWidth = totalWidth - childrentCount * 401;

  const carsoleBarWidth = 80 * (401 / totalWidth);

  function handleLeft() {
    const calcScroll = scrollY - scroll;

    if (calcScroll < 0) {
      setScrollY(0);
      carsoleContainerRef.current.scroll(0, 0);
    } else {
      setScrollY(calcScroll);
      carsoleContainerRef.current.scroll(calcScroll, 0);
    }
  }

  function handleRight() {
    const calcScroll = scrollY + scroll;

    if (calcScroll > totalWidth) {
      setScrollY(scrollY);
      carsoleContainerRef.current.scroll(totalWidth, 0);
    } else {
      setScrollY(calcScroll);
      carsoleContainerRef.current.scroll(calcScroll, 0);
    }
  }

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1024 ? true : false);
      setIsTab(
        window.innerWidth < 1024 && window.innerWidth > 768 ? true : false
      );
      setIsMobile(window.innerWidth < 768 ? true : false);
    }

    function handleScroll() {
      let normal = normalize(
        carsoleContainerRef.current.scrollLeft / 80 / 2 + 1,
        0,
        9.5
      );
      if(isMobile) setCarsoleScrollY(Math.floor(normal * 100)*3);
      if(isTab) setCarsoleScrollY(Math.floor(normal * 100)*2);
      else setCarsoleScrollY(Math.floor(normal * 100)*3)
    }

    window.addEventListener("resize", handleResize);
    carsoleContainerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      carsoleContainerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {

  // }, [carsoleScrollY])

  return (
    <div className="w-full flex flex-col items-center gap-6 py-5">
      <h1 className="heading text-center py-5">User Experience with Trading</h1>
      <div
        className={`
          flex 
          gap-8 
          overflow-x-auto
          scroll-smooth
          no-scrollbar
          ${isDesktop ? "w-[97%] px-5" : ""} 
          ${isTab ? "w-[90%] px-4 ml-10" : ""} 
          ${isMobile ? "w-[88%] px-1" : ""}`}
        ref={carsoleContainerRef}
      >
        {reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <CardContainer
              className="flex flex-col text-white items-around gap-8 md:gap-10 min-w-[321px] lg:min-w-[401px] min-h-[410px] lg:min-h-[490px] pt-10 px-10"
              key={idx}
            >
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 bg-primary rounded-full">
                  {review.icon}
                </span>
                <span className="text-[20px] lg:text-2xl font-[SFProDisplay-Black]">
                  {review.label}
                </span>
              </div>
              <p className="text-[20px] lg:text-2xl font-[SFProDisplay-Black] tracking-wider">
                {review.text}
              </p>
            </CardContainer>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="bg-background rounded-lg flex items-center gap-4 py-3 px-2">
        <figure onClick={handleLeft} className="hover:text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </figure>
        <div className="bg-[#282525] h-2 rounded-full w-20 overflow-hidden">
          <div
            className={`bg-white h-full rounded-full`}
            style={{ 
              width: carsoleBarWidth + "px",
              transform: `translateX(${carsoleScrollY}%)`
            }}
            ref={carsoleBarRef}
          ></div>
        </div>
        <figure onClick={handleRight} className="hover:text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
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
    </div>
  );
}

export default Review;
