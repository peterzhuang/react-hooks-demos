import React from "react";
import useMyToggle from "./hooks/useMyToggle";

function MyToggler() {
  const [isHappy, toggleIsHappy] = useMyToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useMyToggle(false);
  const [isBanana, toggleIsBanana] = useMyToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "❤️"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍏"}</h1>
    </div>
  );
}

export default MyToggler;
