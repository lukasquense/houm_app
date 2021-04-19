import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import Pokemons from "../Pokemons";
import { getMorePokemons } from "../../api/pokemons";
import { Row, Col } from "antd";
import COLORS from "../../constants/colors";
import { Button } from "antd";

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [defaultPokemons, setDefaultPokemons] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async () => {
    return await fetch(URL)
      .then(response => response.json())
      .then(data => {
        setPokemons(data["results"]);
        setDefaultPokemons(data["results"]);
        setIsLoading(false);
      });
  };

  const morePokemon = () => {
    getMorePokemons(count + 19).then(data => {
      setDefaultPokemons((defaultPokemons)  => {
        return [...new Set([...defaultPokemons, ...data["results"]])]});
      updateInput(input);
      setCount(prevCount => {
        return prevCount + 20;
      });
    });
  };

  const updateInput = async input => {
    setIsLoading(true)
    const filtered = defaultPokemons.filter(pokemon => {
      return pokemon.name.includes(input.toLowerCase());
    });
    setInput(input);
    setPokemons(filtered);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Row>
          <Col
            span={24}
            style={{
              color: COLORS.GREY,
              marginTop: 10,
              textAlign: "center",
              fontSize: "4rem"
            }}
          >
            <b>
              Busca sin problemas. <br />
              Tenemos todos los Pokemons que te gustaría ver.
              <br />
              No puedes comprarlos ni arrendarlos eso si 😅
            </b>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <SearchBar
              input={input}
              onChange={updateInput}
              pokemons={pokemons}
            />
          </Col>
        </Row>
        <Row>
          <Pokemons pokemons={pokemons} count={count} isLoading={isLoading} />
        </Row>
        <Row>
          <Col flex={1} alignItems>
            <Button
              style={{
                fontSize: "18px",
                background: COLORS.LIGHT_ORANGE,
                color: COLORS.ORANGE,
                margin: '10px'

              }}
              shape="round"
              size="large"
              onClick={morePokemon}
            >
              Cargar más Pokemons
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllPokemon;
