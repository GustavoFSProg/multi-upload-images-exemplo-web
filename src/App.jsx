import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";
// import './App.css'

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
      <div>
        <Link to="/cadastro-produto">CADASTRO</Link>
        <Link to="/">HOME</Link>
        {produtos.map((items) => {
          return (
            <div key={items.id}>
              <button
                onClick={() => setLocalstorageProfile(items.id, items.name)}
              >
                <p>{items.name}</p>
                <img width="300" src={items.image} />
                <p>Price: R$ {items.price}</p>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
