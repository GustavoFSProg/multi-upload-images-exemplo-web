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

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "60px",
          justifyContent: "center",
          alignItems: "center",
          background: "green",
          color: "yellow",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            height: "100px",
            justifyContent: "space-between",
            alignItems: "center",
            color: "yellow",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "yellow",
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
            to="/"
          >
            HOME
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "yellow",
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
            to="/update-image-produto"
          >
            ATUALIZAR IMAGEM
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "yellow",
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
            to="/cadastro-produto"
          >
            CADASTRO
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
