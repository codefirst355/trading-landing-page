import React from "react";
import { cn } from "../utils";

export function CardContainer({ children, className }) {
  return (
    <div className={cn("bg-background rounded-[20px]", className)}>
      {children}
    </div>
  );
}

export function ActiveAccount() {
  return (
    <CardContainer className="flex flex-col items-around gap-10 lg:gap-20 py-10 px-14 lg:py-14 lg:px-28">
      <div className="flex flex-col items-center gap-1">
        <figure className="pb-4">
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.9997 6.25C19.2468 6.25 14.5831 10.9137 14.5831 16.6667C14.5831 19.6262 15.8174 22.2975 17.7993 24.194C13.8528 25.7342 11.1874 28.4552 9.44526 31.165C8.14478 33.1881 7.35855 35.1954 6.89632 36.6887C6.66413 37.439 6.51069 38.0692 6.41403 38.5202C6.36565 38.746 6.33132 38.9277 6.30834 39.0581C6.29686 39.1233 6.28821 39.1756 6.28205 39.2144L6.27463 39.2621L6.27225 39.2781L6.27138 39.2842L6.27071 39.2887C6.108 40.4277 6.89946 41.4829 8.03848 41.6458C9.17573 41.8081 10.2295 41.0196 10.3947 39.8833L10.397 39.8685C10.3997 39.8521 10.4045 39.8227 10.4118 39.781C10.4265 39.6977 10.4512 39.5662 10.4882 39.3931C10.5624 39.0469 10.6857 38.5377 10.8767 37.9206C11.2608 36.6796 11.9069 35.041 12.9502 33.4183C14.9945 30.2381 18.5595 27.0833 24.9997 27.0833C31.4401 27.0833 35.0051 30.2381 37.0495 33.4183C38.0926 35.041 38.7389 36.6796 39.1228 37.9206C39.3139 38.5377 39.4372 39.0469 39.5114 39.3931C39.5484 39.5662 39.573 39.6977 39.5878 39.781C39.5932 39.8121 39.5974 39.8365 39.6001 39.8538C39.6012 39.8594 39.6018 39.8644 39.6026 39.8685L39.6043 39.8798L39.6049 39.8833C39.7701 41.0196 40.8239 41.8081 41.9612 41.6458C43.1001 41.4829 43.8916 40.4277 43.7289 39.2887L43.7282 39.2842L43.7274 39.2781L43.7249 39.2621L43.7176 39.2144C43.7114 39.1756 43.7026 39.1233 43.6912 39.0581C43.6682 38.9277 43.6339 38.746 43.5855 38.5202C43.4889 38.0692 43.3355 37.439 43.1032 36.6887C42.6409 35.1954 41.8547 33.1881 40.5543 31.165C38.8122 28.4552 36.1468 25.7342 32.2003 24.194C34.1822 22.2975 35.4164 19.6262 35.4164 16.6667C35.4164 10.9137 30.7528 6.25 24.9997 6.25ZM18.7498 16.6667C18.7498 13.2149 21.548 10.4167 24.9997 10.4167C28.4516 10.4167 31.2497 13.2149 31.2497 16.6667C31.2497 20.1184 28.4516 22.9167 24.9997 22.9167C21.548 22.9167 18.7498 20.1184 18.7498 16.6667Z"
              fill="white"
            />
          </svg>
        </figure>
        <span className="text-1xl font-extrabold text-heading">Active accounts</span>
        <h1 className="heading-2">1 Lakh+</h1>
      </div>
      <div className="flex flex-col items-center gap-1">
        <figure className="">
          <svg
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
          >
            <path
              d="M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z"
              fill="white"
            />
          </svg>
        </figure>
        <h1 className="heading-2">4.9</h1>
        <span className="text-1xl font-extrabold text-heading">User Interaction</span>
      </div>
    </CardContainer>
  );
}

export function MonthlyPayout() {
  return (
    <CardContainer className="flex flex-col items-around gap-10 lg:gap-20 py-10 px-14 lg:py-14 lg:px-28">
      <div className="flex flex-col items-center gap-1">
        <figure className="pb-4">
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.1399 25.1041C17.3264 24.2905 16.0072 24.2905 15.1937 25.1041L6.35483 33.9428C5.54123 34.7563 5.54123 36.0755 6.35483 36.8891L15.1937 45.728C16.0072 46.5416 17.3264 46.5416 18.1399 45.728C18.9535 44.9143 18.9535 43.5953 18.1399 42.7818L12.8576 37.4993H27.0835C28.2342 37.4993 29.1669 36.5666 29.1669 35.4159C29.1669 34.2653 28.2342 33.3326 27.0835 33.3326H12.8576L18.1399 28.0503C18.9535 27.2368 18.9535 25.9176 18.1399 25.1041Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.8604 4.27109C32.6741 3.45749 33.9931 3.45749 34.8066 4.27109L43.6456 13.1099C44.4591 13.9235 44.4591 15.2426 43.6456 16.0562L34.8066 24.8951C33.9931 25.7086 32.6741 25.7086 31.8604 24.8951C31.0468 24.0815 31.0468 22.7623 31.8604 21.9488L37.1429 16.6664H22.9168C21.7662 16.6664 20.8335 15.7337 20.8335 14.583C20.8335 13.4325 21.7662 12.4997 22.9168 12.4997H37.1429L31.8604 7.21736C31.0468 6.40376 31.0468 5.08468 31.8604 4.27109Z"
              fill="white"
            />
          </svg>
        </figure>
        <span className="text-1xl font-extrabold text-heading">Monthly Payout</span>
        <h1 className="heading-2">10 Lakh+</h1>
      </div>
      <div className="flex flex-col items-center gap-1">
        <figure className="">
          <svg
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
          >
            <path
              d="M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z"
              fill="white"
            />
          </svg>
        </figure>
        <h1 className="heading-2">4.9</h1>
        <span className="text-1xl font-extrabold text-heading">User Payout</span>
      </div>
    </CardContainer>
  );
}
