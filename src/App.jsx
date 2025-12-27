import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import api from "./api";
// import './App.css'

function App() {
  const [produtos, setProdutos] = useState([]);

  function setLocalstorageProfile(id) {
    localStorage.setItem("MY-PROD", id);
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
        {produtos.map((items) => {
          return (
            <button onClick={() => setLocalstorageProfile(items.id)}>
              <div key={items.id}>
                <p>{items.name}</p>
                <img width="300" src={items.image} />
                <p>Price: R$ {items.price}</p>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
