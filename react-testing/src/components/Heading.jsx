import React from 'react';
import Food from './Food';

export default function Heading() {
    const name = "Anna";
    const currentYear = new Date().getFullYear();
    const currentTime= new Date().getHours();
  
  //   const time = ()=>{
  //     if (currentTime >= 0 && currentTime < 12){
  //       return "Good morning";
  //     }
  //     else if(currentTime >= 12 && currentTime < 18){
  //       return "Good afternoon";
  //     }
  //     else{
  //       return "Good evening";
  //     }
  //   }
  
  // function color(time){
  //   switch(time){
  //     case "Good morning":
  //       return <h1 className="red">{`${time}, ${name}`}!</h1>;
  //     case "Good afternoon":
  //       return  <h1 className="blue">{`${time}, ${name}`}!</h1>;
  //     case "Good evening":
  //       return <h1 className="green">{`${time}, ${name}`}!</h1>;
  //     default:
  //       return null;
  //   }
  // }
  
  // OR
  
  let greeting;
  const costumeStyle = {
    color: ""
  }
  
    if (currentTime >= 0 && currentTime < 12){
     greeting = "Good morning";
     costumeStyle.color = "red";
    }
    else if(currentTime >= 12 && currentTime < 18){
      greeting = "Good afternoon";
       costumeStyle.color = "green";
    }
    else{
      greeting = "Good evening";
      costumeStyle.color = "blue";
    }
  
  return (
    <div>
           {/* {color(time())} */}
     <h1 style={costumeStyle}>{`${greeting}, ${name}`}!</h1>
      <p>Copyright {currentYear}</p>
      <Food/>
    </div>
  )
}
