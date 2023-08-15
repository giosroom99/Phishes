import "./App.css";
import { useState } from "react";
import MyComponent from "./controller";

export function Header() {
  return (
    <div className="row">
      <div className="col-8 mx-auto pt-4">
        <h1 className="fw-bold"> Phishes</h1>
        <p>There are lots of fishes in the ocean, Can you spot the bad one?</p>
        <p className>Let Phishes help you</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <Header />

      <MyComponent />
    </div>
  );
}

export default App;
