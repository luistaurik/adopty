import React from "react";
import adopty from "../assets/imgs/Adopty.png"
import "../Components/Header.css"



function Header({onFilterByPetType}){
    return (
        <>
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 align-items-center header">
      <a href="/" class="d-flex align-items-center mb-1 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img className="logo"
            src={adopty} alt="Adopty Logo" 
        />
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" onClick={() => onFilterByPetType("Dog")} class="nav-link">Dogs</a></li>
        <li class="nav-item"><a href="#" onClick={() => onFilterByPetType("Cat")} class="nav-link">Cats</a></li>
        <li class="nav-item"><a href="#" onClick={() => onFilterByPetType("Fish")} class="nav-link">Fish</a></li>
        <li class="nav-item"><a href="#" onClick={() => onFilterByPetType("Turtle")} class="nav-link">Turtles</a></li>
        <li class="nav-item"><a href="#" onClick={() => onFilterByPetType("Bird")} class="nav-link">Birds</a></li>
        <li class="nav-item"><a href="#" onClick={() => onFilterByPetType("")} class="nav-link">Alls</a></li>
      </ul>
    </header>
        </>
    )
}

export default Header;
