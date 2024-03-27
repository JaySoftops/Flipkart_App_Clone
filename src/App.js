import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Homes from "./Component/Home";
import SiteDetails from "./Component/SiteDetails";
import Footer from "./Component/Footer";
import { Contexts } from "./Context/Contexts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProductDetail from "./Component/SingleProductDetail";
import Demo from "./Component/Demo";

function App() {
  return (
    <BrowserRouter>
      <Contexts>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/Jaiss"/>
          </Routes>
          <SiteDetails />
          <Footer />
        </div>
      </Contexts>
    </BrowserRouter>
  );
}

export default App;
