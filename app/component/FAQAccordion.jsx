'use client'
import { useState } from "react";
import { HiArrowDown } from "react-icons/hi2";

import { FaqData } from "@/Data/Data";


export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1450px] gap-4 py-[60px] mx-auto w-full h-auto grid grid-cols-1">
      <p className="uppercase text-black contact-title opacity-70 text-[14.5px] flex gap-1 items-center">
        <span>/</span>FAQ – Questions Fréquemment Posées
      </p>

      <div>
        {FaqData.map((faq, index) => (
          <div
            key={index}
            className="pb-1 border-b-[1.5px] border-[#434343]/20 hover:text-main2 font-bold transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex pb-1 justify-between font-[450] items-center w-full text-left text-[27px] focus:outline-none  pt-5"
            >
              <div className="flex gap-7 items-center">
                <span className="text-[13.5px] font-normal font-metro blinkon">[{index}]</span>
                {faq.question}
              </div>
              <span
                className={`ml-2 transition-transform duration-300 font-metro font-light text-[20px] ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <HiArrowDown />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
              style={{ maxHeight: openIndex === index ? "500px" : "0" }}
            >
              <div className="pt-3 pb-12 pl-11 font-[450] tracking-[.08px] text-[#0e0e0e] w-[750px] text-[17.5px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
