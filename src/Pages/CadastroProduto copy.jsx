/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import api from "../api";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  // background: "yellow",
  justify-content: center;
  align-items: center;
  margin-top: -50px;

  @media screen and (max-width: 400px) {
    margin-top: -70px;
  }

  @media screen and (min-width: 400px) and (max-width: 800px) {
    margin-top: -30px;
  }
`;

const Card = styled.div`
  display: flex;
  background: lightgray;
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 79%;
    /* height: auto; */
    justify-content: center;
    align-items: center;
    margin-left: "3px";
  }
`;

const Img = styled.img`
  width: 380px;

  @media screen and (max-width: 800px) {
    width: 79%;
  }
`;

const H1 = styled.h1`
  margin-top: 62px;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    font-size: 24px;
    margin-top: 62px;
  }
`;

const NameProduct = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: darkblue;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Price = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: darkblue;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

function CadastroProdutos() {
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function CadastroProduto(e) {
    e.preventDefault();
    try {
      const data = new FormData();

      data.append("image", image);
      data.append("name", name);
      data.append("description", description);
      data.append("price", price);

      await api.get(`/create-product`, data);

      return alert("CADASTRADO!");
    } catch (error) {
      return alert(error);
    }
  }

  // useEffect(() => {
  //   GetProductId();
  // }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link to="/">HOME</Link>

        <H1>CADASTRO DO PRODUTO </H1>
        <form
          style={{
            display: "flex",
            width: "100vw",
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={CadastroProduto}
        >
          <input
            type="file"
            multiple
            placeholder="Imagens"
            id="image"
            onChange={(e) => setImage(e.target.value[0])}
          />

          <input
            type="text"
            placeholder="Nome"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Descrição"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Preço"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit">CADASTRAR</button>
        </form>
      </div>
    </>
  );
}

export default CadastroProdutos;
