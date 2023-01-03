import React from "react";
import { Bounce, Slide } from "react-reveal";
const Header = () => {
  return (
    <div className="header mt-3 mb-3">
      <div className="header_container p-2 h-100 d-flex justify-content-between align-items-center">
        <div className="section_a w-50">
          <div className="boxes">
            <Bounce delay={100}>
              <div className="box"></div>
            </Bounce>
            <Bounce delay={250}>
              <div className="box"></div>
            </Bounce>
          </div>
          <div className="content pt-3 pb-3">
            <Slide delay={450} left>
              <h3 className="text-capitalize">
                welcome to{" "}
                <span className="text-warning">Mabhoyi Foundation</span>
              </h3>
            </Slide>
          </div>
        </div>
        <div className="section_b w-50 h-100 d-flex justify-content-center align-items-center">
          <img
            src="/Screenshot_20221227_202705-removebg.png"
            className="img-fluid"
            alt="header image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
