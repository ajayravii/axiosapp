import React,{useEffect,useState} from "react"
import axios from "axios";
const ShowData = (props) => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const fetchData=async ()=>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log("response",response)
        setData(response?.data)
    }
    catch(e){
        console.log("e",e)
    }
    finally{
        setLoading(false)
    }
  }
  useEffect(()=>fetchData(),[])
  console.log("data",data)
  const tableData=data?.map((e)=>{
    return (
        <tr>
        <th>{e?.id}</th>
        <th>{e?.title}</th>
        <th>{e?.userId}</th>
    </tr>
    )
  })
  if(true){
    return(
        <h1>Hellooooo</h1>
    )
  }
  if(true){
    return(
        <h1>Hai</h1>
    )
  }
  if(loading){
    return(
        <h1>Loading...</h1>
    )
  }
//   const postData=async ()=>{
//        const response=await axios.delete("https://jsonplaceholder.typicode.com/todos/1")
//        console.log("response",response)
//   }
  return (
    <>
   <table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>USER ID</th>
        </tr>
    </thead>
    <tbody>
    {tableData}
    </tbody>
   </table>
   {/* <button onClick={()=>postData()}>Click</button> */}
   </>
  )
};

export default ShowData;
