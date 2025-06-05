
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';
import axios from "axios";


const App = () => {
  const [loading,setloading]=useState(true);
  const [input, setInput] = useState("https://jsonplaceholder.typicode.com/posts")
  const [data,setdata]=useState([]);

  const data1=useMemo(()=>{
    return data},
        [input]);
 
  useEffect(()=>{
    axios.get(input).then((res)=>{
      setdata(res.data);
      setloading(false);
    });
},[data]);

  
 
  return (
    <div>
      {loading && <div>Loading...</div> }
      <ul>
      {
  data.map((item,i)=> 
  <li key={item.id}>
  <h4>{item.title}</h4>
  <p>{item.body}</p>
</li>
  )
}
      </ul>
    </div>
  )
}

export default App