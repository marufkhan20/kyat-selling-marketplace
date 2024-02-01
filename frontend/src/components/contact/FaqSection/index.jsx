"use client";
import Heading from "../../shared/Heading";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  // components/SmoothScroll.js
  return (
    <section id="faq" className="section-container bg-[#F0F6FE]">
      <div className="container-custom">
        <Heading title="Frequently Asked Question" />

        <div className="mt-10 mx-auto flex flex-col gap-4 md:w-[70%]">
          <FaqItem
            question="Do you keep our verification photos? Privacy Issue"
            answer="Due to costly nature to main server, we don't hold photos verifcation more than one month."
          />
          <FaqItem
            question="What if I want to transfer more than $2000?"
            answer="For safety pupose, we are only allowing Zelle. If you want to transfer more than $2000, you must create multiple transition."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
