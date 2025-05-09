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
    <div className="max-w-[1450px] gap-4 pt-[100px] py-[60px] px-5  mx-auto w-full h-auto grid grid-cols-1">
      <p className="uppercase text-black contact-title opacity-70 text-[14.5px] flex gap-1 items-center w-fit">
        <span>/</span>FAQ – Questions Fréquemment Posées
      </p>

      <div>
        {FaqData.map((faq, index) => (
          <div
            key={index}
            className="pb-1 border-b-[1.5px] border-[#434343]/20 hover:text-main2 font-bold transition-all duration-300 highlight"
          >
            <button
              onClick={() => toggle(index)}
              className="flex pb-1 justify-between font-[450] items-center w-full text-left truncate  text-[15px]  sm:text-[18px] md:text-[27px] focus:outline-none  pt-5"
            >
              <div className="flex gap-7 items-center md:font-medium md:max-w-[800px] max-w-[400px]  truncate font-bold">
                <span className="text-[12px] font-normal font-mono indeex">[{index}]</span>
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
              <div className="pt-3 leading-snug pb-12 pl-11 font-[450] tracking-[.08px] text-[13px] text-[#0e0e0e] md:w-[600px] md:text-[16.5px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
