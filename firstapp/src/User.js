import React,{useEffect,useState} from "react"
import axios from "axios";
const User = (props) => {
  const [data,setData]=useState()
  const [loading,setLoading]=useState(true)
  // const [post,setPost]=useState({
  //   "userId":1,
  //   "title":"",
  //   "body":"",
  // })
  useEffect(()=>{
    const fetchData=async ()=>{
        try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(response?.data)
    }
    catch(e){
        console.log(e)
    }
    finally{
      setLoading(false)
    }
    }
    fetchData()
  },[])
  console.log(data?.[0])
  if(loading){
    return <div>Loading..</div>
  }
  const putData=async ()=>{
   try{
    await axios.delete("https://jsonplaceholder.typicode.com/posts/1")}
    catch(e){
      console.log(e)
    }
  }
  return (
    <div>
      User
      {data?.[0]?.title}
      <button onClick={()=>putData()}>PUT</button>
    </div>
  )
};

export default User;
