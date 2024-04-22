import React from "react";
import "./Homepage.scss";
import bg from "../../components/Assets/bg.png";
import Searchbar from "../../components/searchbar/Searchbar";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">
            "Discover Your Dream Home with  Real Estate"
          </h1>
          <p>
            "Welcome to our premier real estate listings, where dreams meet
            reality. Discover your perfect home among our curated selection of
            properties, meticulously designed to cater to every lifestyle and
            preference. From charming urban lofts to sprawling suburban estates,
            we offer a diverse range of options to suit your needs.
          </p>
          <Searchbar/>
          <div className="boxes">
          <div className="box">
          <h1>16+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="box">
          <h1>200</h1>
            <h2>Awards Gained</h2>
          </div>
          <div className="box">
          <h1>1200+</h1>
            <h2>Property Ready</h2>
          </div>
            
          </div>
        </div>
      </div>

      <div className="imgcontainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
