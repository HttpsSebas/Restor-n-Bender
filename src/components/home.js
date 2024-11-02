import React from "react";
import Nav from "./nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home">
        <h1 className="name">Restorán Bender</h1>
      </div>
    </div>
  );
}

export default Home;
