import React,{createContext} from "react"
import Parent from "./Parent";
const createCon=createContext()
export {createCon}
const Main = (props) => {
  const a="Hello"
  return (
    <div>
     <h1>Iam Main</h1>
      <createCon.Provider value={a}>
        <Parent/>
      </createCon.Provider>
    </div>
  )
};

export default Main;
