import { useState } from 'react';
import Header from "./Components/Header";
import Album from "./Components/Album";
import Footer from "./Components/Footer";
import "./App.css"
import "./Components/Album.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chespi from "./assets/imgs/Chespi.png";
import Chillis from "./assets/imgs/Chillis.png";
import Doggie from "./assets/imgs/Doggie.png";
import Duquesa from "./assets/imgs/Duquesa.png";
import Malena from "./assets/imgs/Malena.png";
import Norma from "./assets/imgs/norma.png";
import Nemo from "./assets/imgs/Nemo.png";
import Olivia from "./assets/imgs/Olivia.png";
import Panchita from "./assets/imgs/Panchita.png";


const adoptions = [
  {
    id:0,
    photo: Chespi,
    petName: "Chespi",
    petDescription:"It's a very good cat with a whole future with you",
    breed:"unknown",
    age:"2 weeks",
    petType:"Cat"
  },
  {
    id:1,
    photo: Chillis,
    petName: "Chillis",
    petDescription:"A dog with a good temper, is a little dog he isn't going to grow more",
    breed:"unknown",
    age:"2 months",
    petType:"Dog"
  },
  {
    id:2,
    photo: Doggie,
    petName: "Doggie",
    petDescription:"It's a very good cat with a whole future with you",
    breed:"bulb arab mix",
    age:"5 weeks",
    petType:"Dog"
  },
  {
    id:3,
    photo: Duquesa,
    petName: "Duquesa",
    petDescription:"We don't know the breed but she is beautiful",
    breed:"unknown",
    age:"6 weeks",
    petType:"Dog"
  },
  {
    id:4,
    photo: Malena,
    petName: "Malena",
    petDescription:"The most beautiful cat in the world",
    breed:"unknown",
    age:"3 months",
    petType:"Cat"
  },
  {
    id:5,
    photo: Norma,
    petName: "Norma",
    petDescription:"With a mid size it is going to be a incredible dog for you",
    breed:"unknown",
    age:"4 months",
    petType:"Dog"
  },
  {
    id:6,
    photo: Nemo,
    petName: "Nemo",
    petDescription:"Nemo is lost every day in your heart <3",
    breed:"Clown",
    age:"Unknown",
    petType:"Fish"
  },
  {
    id:7,
    photo: Olivia,
    petName: "Olivia",
    petDescription:"Olivia sings for you every morning",
    breed:"Parrot",
    age:"1 month",
    petType:"Bird"
  },
  {
    id:8,
    photo: Panchita,
    petName: "Panchita",
    petDescription:"Panchita is a pacific turtle",
    breed:"unknown",
    age:"1 year",
    petType:"Turtle"
  }
]

function App() {
  
  const [filterPetType, setFilterPetType] = useState("")

  const handleFilterByPetType = (petType) => {
    setFilterPetType(petType);
  };

  return (
    <>
      <Header onFilterByPetType={handleFilterByPetType}/>
      <div className="Adoptions row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
        {adoptions.filter((pet) => !filterPetType || pet.petType === filterPetType).map((pet) => (
            <Album
              id={pet.id}
              photo={pet.photo}
              petName={pet.petName}
              petDescription={pet.petDescription}
              breed={pet.breed}
              petType={pet.petType}
            />
          ))}
      </div>
      <Footer/>
    </>
  );
}

export default App;
