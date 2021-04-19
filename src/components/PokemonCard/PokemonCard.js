import React, { useState, useEffect } from "react";
import COLORS, { TYPE_COLORS } from "../../constants/colors";
import { getPokemon } from "../../api/pokemon";
import { Modal, Card, Divider, Tag, Avatar, Skeleton, Row, Col } from "antd";

const { Meta } = Card;

const PokemonCard = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photoUrl, setPhotoUrl] = useState();
  const [pokemon, setPokemon] = useState([]);
  const pathname = `/pokemon/${props.name}`;

  useEffect(() => {
    getPokemon(pathname).then(data => {
      setPokemon(data);
      setPhotoUrl(
        `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`
      );
      setIsLoading(false);
    });
  }, [pathname]);

  const { id, name } = pokemon;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const titleCase = string => {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence;
  };
  return (
    <>
      {isLoading ? (
        <Skeleton avatar active title={true} paragraph={{ rows: 10 }} />
      ) : (
        <Card
          onClick={showModal}
          style={{
            borderRadius: 20,
            width: 250,
            marginTop: 10,
            marginLeft: 10,
            padding: 50,
            color: COLORS.GREY
          }}
          cover={<img alt="example" src={photoUrl} />}
          actions={
            pokemon.types &&
            pokemon.types.map((type, index) => {
              return (
                <Tag color={TYPE_COLORS[type["type"]["name"]]} key={index}>
                  {type["type"]["name"]}
                </Tag>
              );
            })
          }
        >
          <Meta title={<span style={{color: COLORS.GREY}}>{name}</span>}/>
        </Card>
      )}
      <Modal
        title={<span style={{color: COLORS.GREY}}>{`Nº ${id} - ${name}`}</span>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ borderRadius: 20, overflow: "hidden", color: COLORS.GREY }}
      >
        <Row>
          <Col span={24}>
            <Avatar
              src={photoUrl}
              size={250}
              style={{ margin: 8, padding: 30 }}
            />
          </Col>
          <Col
            style={{
              borderRadius: 10,
              padding: 10,
              background: COLORS.LIGHT_ORANGE
            }}
            span={24}
          >
            <Row>
              {pokemon.stats &&
                pokemon.stats.map((stat, index) => {
                  return (
                    <Col style={{color: COLORS.GREY }} key={index} span={12}>
                      <div>{titleCase(stat["stat"]["name"])}</div>
                      <div>{stat.base_stat}</div>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
        <Row >
          <Col span={12} >
            <Divider style={{color: COLORS.GREY }}  orientation="center">Tipo</Divider>
            <div>
              {pokemon.types &&
                pokemon.types.map((type, index) => {
                  return (
                    <Tag color={TYPE_COLORS[type["type"]["name"]]} key={index}>
                      {type["type"]["name"]}
                    </Tag>
                  );
                })}
            </div>
          </Col>
          <Col span={12}>
            <Divider style={{color: COLORS.GREY }}  orientation="center">Habilidades</Divider>
            <div>
              {pokemon.abilities &&
                pokemon.abilities.map((ability, index) => {
                  return (
                    <Tag style={{margin: 5}} color={COLORS.GREY} key={index}>
                      {ability["ability"]["name"]}
                    </Tag>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PokemonCard;
