import React from "react";
import homejson from "./utils/home.json";
import { Slide } from "react-reveal";
const HomePage = () => {
  let x = 300;
  function increment() {
    x = x + 60;
    return x;
  }
  return (
    <div className="homepage mt-3" id="home">
      <h3 className="text-center">Mabhoyi Foundation </h3>

      <div className="row align-items-center">
        {homejson.map((abt) => (
          <div className="col-sm-4">
            <Slide left delay={increment()}>
              <div className="alert alert-primary" role="alert">
                <h5 className="alert-heading text-capitalize">
                  {abt.name}{" "}
                  <span>
                    <i className={abt.icon + " " + abt?.color}></i>
                  </span>
                </h5>
                <p>{abt.details}</p>
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
