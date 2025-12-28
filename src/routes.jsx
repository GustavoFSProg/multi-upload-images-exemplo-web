import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Pages/Profile";
import CadastroProdutos from "./Pages/CadastroProduto";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cadastro-produto" element={<CadastroProdutos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
