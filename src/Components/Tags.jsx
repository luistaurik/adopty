import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Tags(){
    
    function colorHandler(petType){
        let colorType = ""

        if(petType === "Turtle"){
          colorType = "primary"
        } else if (petType === "Dog") {
          colorType = "success"
        }  else if (petType === "Cat") {
          colorType = "warning"
        }  else if (petType === "Bird") {
          colorType = "danger"
        }  else{
          colorType = "info"
        }
      
        return colorType; 
      }

    const tagColor = colorHandler(petType);
    console.log(tagColor)
    console.log(petType)



}

export default Tags;