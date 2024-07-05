import React, { useContext } from "react";
import styles from "./Home.module.css";
import { MyContext } from "../../context";
import Pagination from "react-bootstrap/Pagination";
import HomeCards from "../../components/HomeCards";

const Home = () => {
  const { allPokemons } = useContext(MyContext); 
  const { setURL } = useContext(MyContext); 

  console.log(allPokemons);
  const pokemonList = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Charmander" },
    { id: 5, name: "Charmeleon" },
    { id: 6, name: "Charizard" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>wellcome to </p>
        <h1>POKEMON WORLD</h1>
      </div>

      <div className={styles.listContainer}>
        {allPokemons?.results?.map((el, i) => (
          <HomeCards props={el} index={i} key={i} />
        ))}
      </div>
      <div style={{display: 'flex', justifyContent:'center', paddingBottom:"30px", gap:"1rem", fontFamily:"'Montserrat', sans-serif"}}>
        <button style={{backgroundColor:'black', color:'white',padding:"1rem" , boxShadow:"2px 3px green"}} onClick={()=>{
          if(allPokemons.previous === null){
            setURL("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
          }else{
            setURL(allPokemons.previous)
          }
        }}>prev</button>
        <button style={{backgroundColor:'black', color:'white',padding:"1rem" , boxShadow:"2px 3px green"}} onClick={()=>{
           if(allPokemons.next === null){
            setURL("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
          }else{
            setURL(allPokemons.next)
          }
        }} >next</button>
      </div>
    </div>
  );
};

export default Home;
