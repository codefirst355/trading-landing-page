import React, { useRef, useState } from "react";
import Accordian from "./accordian";

function FAQs() {

    const faqsData = [
        {
            question: "How do I start trading?",
            answer: "How do I start trading?"
        },
        {
            question: "How do I make a deposit?",
            answer: "How do I make a deposit?"
        },
        {
            question: "How should I prepare to start trading?",
            answer: "How should I prepare to start trading?"
        },
        {
            question: "What is the timeframe for withdrawing funds?",
            answer: "What is the timeframe for withdrawing funds?"
        },
        {
            question: "What is the least amount I can deposit and withdraw?",
            answer: "What is the least amount I can deposit and withdraw?"
        }
    ]

  return (
    <div className="w-full flex flex-col items-center gap-16 py-5 text-white" id="faq">
      <h1 className="heading text-center">Frequently Asked Questions</h1>
      <div className="flex flex-col w-[80%]">
        {
            faqsData.length && faqsData.map(({question, answer}, idx) => (
                (
                    <Accordian main={question} body={answer} key={idx} />
                )
            ))
        }
      </div>
    </div>
  );
}

export default FAQs;
