import { useEffect, useState } from "react";

function useFindOutsideClick(ref, OutsideClickCallback) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("navid  isClickOutside = true");
      OutsideClickCallback();
    }
  }
  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
export default useFindOutsideClick;
