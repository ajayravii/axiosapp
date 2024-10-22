import React,{useState} from "react"

const Counter = (props) => {
  const [counter,setCounter]=useState(0)
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Click</button>
      Counter:{counter}
    </div>
  )
};
export default Counter;
