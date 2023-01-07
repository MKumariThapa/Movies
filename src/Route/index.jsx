import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MoviesContainer from "../Container/Movies";
import TvSeriesContainer from "../Container/TvSeries";
import SearchContainer from "../Container/Search";
import DetailsContainer from "../Container/Details";
import ContactContainer from "../Container/Contact";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
const RouteComponents = () => {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderComponent /> */}
        <Header />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />

          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/series" element={<TvSeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/contact" element={<ContactContainer />} />

          <Route
            path="/details/:movieid/:mediatype"
            element={<DetailsContainer />}
          />
        </Routes>
        {/* <FooterComponent /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RouteComponents;
