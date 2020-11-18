import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Bio from "./components/bio/Bio";
import News from "./components/news/News";
import Gallery from "./components/gallery/Gallery";
import Events from "./components/events/Events";
import Reviews from "./components/reviews/Reviews";
import Discography from "./components/discography/Discography";

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Route exact path="/" component={Home} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/news" component={News} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/discography" component={Discography} />
      </div>
    </BrowserRouter>
  );
}

export default App;
