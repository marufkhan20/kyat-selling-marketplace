// components/SmoothScroll.js
"use client";
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    // Attach smooth scroll behavior to all anchor links with hash (#)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return null;
};

export default SmoothScroll;
