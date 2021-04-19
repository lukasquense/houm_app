import React from 'react';


const SearchBar = (props) => {
  return (
    <input 
     style={{padding: 15, borderRadius: 20, width:"60%", margin: 30}}
     key="random1"
     value={props.input}
     placeholder={"Pokebusca 🕵🏽‍♀️"}
     onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default SearchBar