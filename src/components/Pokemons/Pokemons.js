import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { Row, Col, Skeleton } from "antd";


const Pokemons = ({pokemons, isLoading, count}) => {
    return (
        <Row>
        {pokemons && pokemons.map((pokemon, index) => {
              return (
                <>
                {isLoading ? (
                  <Skeleton />
                )  : (
                  <Col>
                  <PokemonCard
                    key={index}
                    {...pokemon}
                    id={index+1}
                    loading={isLoading}
                  />
                </Col>
                )} 
                </>
              );
            })}
        </Row>
    )}

export default Pokemons;