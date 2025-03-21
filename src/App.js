import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Menu from "./components/menu";
import Store from "./components/store";
import Cart from "./components/cart";
import CartEng from "./componentsEng/cartEng";
import HomeEng from "./componentsEng/homeEng";
import LoginEng from "./componentsEng/loginEng";
import MenuEng from "./componentsEng/menuEng";
import StoreEng from "./componentsEng/storeEng";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Eng" element={<HomeEng />}></Route>
          <Route path="/loginEng" element={<LoginEng />}></Route>
          <Route path="/menuEng" element={<MenuEng />}></Route>
          <Route path="/storeEng" element={<StoreEng />}></Route>
          <Route path="/cartEng" element={<CartEng />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
