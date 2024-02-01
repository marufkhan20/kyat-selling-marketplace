"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg bg-white">
      <div
        className="p-5 cursor-pointer flex justify-between items-center gap-5 flex-wrap"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg">{question}</h3>
        <div className="w-[18px] p-[2px] h-[18px] border-2 border-heading rounded flex items-center justify-center">
          {open ? <FaMinus /> : <FaPlus />}
        </div>
      </div>

      {open && <p className="p-5 text-lg">{answer}</p>}
    </div>
  );
};

export default FaqItem;
