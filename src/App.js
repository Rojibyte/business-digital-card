import React from "react";
import "./index.css";
import Banner from "./components/Image";
import Title from "./components/Title";
import Buttons from "./components/Button";
import About from "./components/About";
import Interest from "./components/Interests";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        <header className="bannerContainer">
          <Banner />
        </header>
        <main>
          <Title
            name="Rogelio Deguito"
            title="Frontend Developer"
            website="rsdeguito.website"
          />
          <Buttons />
          <About />
          <Interest />
          <Social />
        </main>
      </div>
    </div>
  );
}

export default App;
