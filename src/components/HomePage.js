import React from "react";
import CalculateBill from "./CalculateBill";

function HomePage() {
  return (
    <div>
        <div className="logo">
            <img src="images/logo.svg" alt="logo"/>
        </div>
          <CalculateBill></CalculateBill>
    </div>
  );
}

export default HomePage;
