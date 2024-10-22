import React,{useContext} from "react"
import { createCon } from "./Main";
const GrandChild = (props) => {
  const val = useContext(createCon)
  return (
    <div>
      <h6>{val} I am GrandChild</h6>
    </div>
  )
};

export default GrandChild;
