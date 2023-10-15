import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const landingPageDataWithTheme = {
    ...JsonData,
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageDataWithTheme.Header} />
      <Features data={landingPageDataWithTheme.Features} />
      <About data={landingPageDataWithTheme.About} />
      <Services data={landingPageDataWithTheme.Services} />
      <Gallery data={landingPageDataWithTheme.Gallery} />
      <Testimonials data={landingPageDataWithTheme.Testimonials} />
      <Team data={landingPageDataWithTheme.Team} />
      <Contact data={landingPageDataWithTheme.Contact} />
    </div>
  );
};

export default App;
