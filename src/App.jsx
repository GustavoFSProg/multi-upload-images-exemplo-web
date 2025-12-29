import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";
import Header from "./Components/Header";
// import './App.css'
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: auto;
  width: 80%;
  /* margin-left: 22px; */
  margin-bottom: 200px;
  margin-top: 50px;
  @media screen and (max-width: 800px) {
    /* width: 60%;
    padding-top: 2px; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 3px;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  background: lightgray;
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
  color: darkblue;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    width: 89%;
    /* height: auto; */
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();

  function setLocalstorageProfile(id, nome) {
    localStorage.setItem("MY-PROD", id);
    localStorage.setItem("NAME", nome);

    navigate("/profile");
  }

  async function getProdutos() {
    try {
      const { data } = await api.get("/get-products");

      setProdutos(data);
    } catch (error) {
      return alert(error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProdutos();
  }, []);
  return (
    <>
      <Header />
      <div
        style={{ display: "flex", width: "100vw", justifyContent: "center" }}
      >
        <Container>
          {produtos.map((items) => {
            return (
              <Card key={items.id}>
                <button
                  style={{
                    borderRadius: "15px",
                    height: "auto",
                    // paddingBottom: "120px",

                    border: "1px solid gray",
                  }}
                  onClick={() => setLocalstorageProfile(items.id, items.name)}
                >
                  <h2>{items.name}</h2>
                  <img width="200" src={items.image} />
                  <h3 style={{ color: "blue" }}>Price: R$ {items.price}</h3>
                </button>
              </Card>
            );
          })}
        </Container>
      </div>
    </>
  );
}

export default App;
