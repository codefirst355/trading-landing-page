import React from "react";
import Advantages from "../assets/advantages.png";
import Transactions from "../assets/transactions.png";
import QuickSupport from "../assets/quick-support.png";
import Button from "./button.jsx";

function Platform() {
  const features = [
    {
      icon: Advantages,
      label: "Advantages",
      desc: [
        "Intuitive Interface: Navigate and trade   with ease using our user-friendly platform.",
        "Real-Time Trading Signals: Receive accurate, timely signals to make informed decisions.",
        "No Fees on Transactions: Enjoy zero fees on deposits and withdrawals, keeping more of your earnings.",
      ],
    },
    {
      icon: Transactions,
      label: "Transactions",
      desc: [
        "Effortless Transactions: Enjoy a smooth and intuitive process for deposits and withdrawals.",
        "Fee-Free Freedom: Keep more of your money with zero transaction fees.",
        "Top-Notch Security: Trust in our robust security measures for safe and secure transactions.",
      ],
    },
    {
      icon: QuickSupport,
      label: "Quick Support",
      desc: [
        "24/7 Customer Support: Assistance available around the clock.",
        "Immediate Assistance: Quick responses to your queries at any time.",
        "Constant Availability: Professional support whenever you need it.",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-16 py-5 text-center">
      <h1 className="heading">Fast and Secure - Trading Platform</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {features.map((feature) => (
          <div key={feature.label} className="bg-background font-[SFProDisplay-Black] tracking-wide rounded-[30px] pt-6 pb-10 flex flex-col gap-6 w-[321px] h-[294px] lg:h-auto lg:w-[418px]">
            <div className="flex justify-start items-center font-black px-6">
              <figure>
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="h-14 w-14 lg:h-24 lg:w-24"
                />
              </figure>
              <span className="text-2xl lg:text-4xl text-white">{feature.label}</span>
            </div>
            <ul className="text-xs flex flex-col items-start text-start list-disc pl-1 gap-2 mx-14">
              {feature.desc.map((desc) => (
                <li key={desc} className="text-xs lg:text-base font-black text-muted">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Button variant="white">Start now</Button>
    </div>
  );
}

export default Platform;
