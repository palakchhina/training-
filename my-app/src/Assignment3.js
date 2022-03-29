import React,{useEffect,useState} from "react";
function App(){
  const [count,setCount]=useState(0);
  const [count1,setCount1]=useState(0);
  useEffect(()=>{
    alert("You just clicked and your count is " + count+" for counter 1 and "+count1+" for counter 2");
    console.warn(" use effect called");
  
  })
  ;
  return(
    <div className="App">
     <h1>Counter 1 :{count}</h1>
     <button
     onClick={()=>{
       setCount(count+1);
      
     }}
     >
       Update Count
     </button>
     <h1>Counter 2 :{count1}</h1>
     <button
     onClick={()=>{
       setCount1(count1+1);
      
     }}
     >
       Update Count
     </button>
    </div>
  );
}
export default App;