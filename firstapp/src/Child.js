import React from "react"
import GrandChild from "./GrandChild";
const Child = (props) => {
  return (
    <div>
      <h3>Iam Child</h3>
      <GrandChild/>
    </div>
  )
};

export default Child;
