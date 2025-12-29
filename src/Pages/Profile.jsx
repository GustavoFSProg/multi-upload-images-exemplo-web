/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import api from "../api";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

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

function Profile() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");

  async function GetProductId() {
    try {
      const id = localStorage.getItem("MY-PROD");
      const nome = localStorage.getItem("NAME");

      setName(nome);

      console.log(id);

      const { data } = await api.get(`/get-product-images/${id}`);

      setImages(data);

      console.log(data);
    } catch (error) {
      return alert(error);
    }
  }

  useEffect(() => {
    GetProductId();
  }, []);
  return (
    <>
      <Header />
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
        <H1>PÁGINA DO PRODUTO </H1>
        <h1>{name}</h1>
        {images.map((items) => {
          return (
            <div key={items.id}>
              <img width="220" src={items.images} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
