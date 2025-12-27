import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Pages/Profile";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
