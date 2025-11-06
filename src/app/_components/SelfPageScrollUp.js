"use client"

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function SelfPageScrollUp() {
  const [show, setShow] = useState(false);

  function handleScroll() {
    setShow(window.scrollY >= 200);
  }

  useEffect(function () {
    // add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // cleanup listener on unmount
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function clickHandle() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="h-36 w-20">
      {show && (
        <button
          onClick={clickHandle}
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-primary-200 text-primary-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-500
${show ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
}

export default SelfPageScrollUp;
