// call useState
// return piece of state and AND function to toggle it
import { useState } from "react";

function useMyToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useMyToggle;
