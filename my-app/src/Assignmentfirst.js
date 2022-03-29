import React from 'react'
var count=0;
const Assignmentfirst =() => {
  return (
    <div>
<h2>Assignment 1</h2>
<h2 id="valueToIncrement">0</h2>
<form onSubmit={increment} id="button">
    <button type="submit" >Click here to increment</button>
</form>   
<h3 id="todayDate">24-03-2022</h3>
</div>
)
};
function increment(e)
{
e.preventDefault();  //to prevent defalut value to be shown on the screen
try{
count++;
var counter=document.getElementById("valueToIncrement");
counter.innerHTML=count;
return counter;
}
catch(error)
{ 
document.getElementById("button").style.visibility='hidden' ;
}
}
export default Assignmentfirst;