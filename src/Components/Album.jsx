import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Album.css";

function Album({photo,petName,petDescription,breed,age,petType}) {

    
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

    return (
        <>
                    <div className="card col">
                    <img src={photo} className="card-img-top" alt={`${petName}+", "+${petDescription}`}/>
                        <div className="card-body">
                            <h5 className="card-title">{petName}</h5>
                            <p className="card-text description">{petDescription}</p>
                            <p className="card-text breed">{breed}</p>
                            <p className="card-text age">{age}</p>
                            <button className={`btn btn-${tagColor}`}>{petType}</button>                             
                        </div>
                    </div>
        </>
    )

}


export default Album;
