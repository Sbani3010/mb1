import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h4 className="text-center">Contact</h4>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div
            className="alert"
            role="alert"
            onClick={() => (window.location.href = "tel:+27647728816")}
          >
            <span>
              <i className="fa fa-phone"></i>
            </span>{" "}
            0647728816
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="alert"
            role="alert"
            onClick={() => window.open("https://wa.me/7647728816", "_blank")}
          >
            <span>
              <i className="fa-brands fa-whatsapp"></i>
            </span>{" "}
            0647728816
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="alert"
            role="alert"
            onClick={() =>
              (window.location.href = "mailto:duduzilemlaba172@gmail.com")
            }
          >
            <span>
              <i className="fa fa-envelope"></i>
            </span>{" "}
            firebasedev20@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
