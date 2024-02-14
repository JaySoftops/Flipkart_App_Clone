// import logo from './logo.svg';
// import './App.css';

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
import AboutSavyyr from "./Savyyr/AboutSavyyr";
import ServiceSavyyr from "./Savyyr/ServiceSavyyr";
import BackgroundComp from "./Savyyr/BackgroundComp";

function App() {
  return (
    // <div className='App'>
    // <ServiceSavyyr />
    // <BackgroundComp />
    // </div>
    <BrowserRouter>
      <Contexts>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homes />} />
          </Routes>
          <SiteDetails />
          <Footer />
        </div>
      </Contexts>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Contexts>
    //     <div className="App">
    //       <Header />
    //       <Navbar />
    //       <Switch>
    //         <Route exact path='/'><Home /></Route>
    //         <Route path='/singleProductDetail'><SingleProductDetail />  </Route>
    //         <Route path=''></Route>
    //         <Route path=''></Route>
    //         <Route path=''></Route>
    //         <Route path=''></Route>
    //         <Route path=''></Route>
    //       </Switch>
    //       <SiteDetails />
    //       <Footer />
    //     </div>
    //   </Contexts>
    // </BrowserRouter>
  );
}

export default App;
