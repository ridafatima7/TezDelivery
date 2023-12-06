import "./App.css";
import TezDelivery from "./Components/TezDelivery";
import TDSlider from "./Components/TDSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import men_banner from "./Components/Images/men.jpeg";
import women_banner from "./Components/Images/shirt.jpeg";
import kids_banner from "./Components/Images/kids.jpeg";
import TNavbar from "./Components/TNavbar";
import ShopCategory from "./Components/ShopCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <TNavbar /> */}
        <TezDelivery />
        <Routes>
          <Route path="/" element={<TezDelivery />} />
          <Route path="/home" element={<TezDelivery />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
