import React from "react";
import "../css/details.css";
import gif from "../assets/asset 2.gif";

function DetailSection() {
  return (
    <div className="features">
      <div className="mainContainer">
        <div className="featuresContent">
          <div className="featuresLeft">
            <img src={gif} alt="" />
          </div>
          <div className="featuresRight">
            <h3>Key Stages of the Medical Billing Cycle</h3>
            <div className="littleUl"></div>
            <div className="featurePoints">
              <div className="featurePoint">
                <div className="featurePointContent">
                  <h3>Patient Registration and Insurance Verification: </h3>
                  <p>
                    The process begins with collecting patient information and
                    verifying insurance coverage to ensure the services provided
                    are covered.
                  </p>
                </div>
              </div>
              <div className="featurePoint">
                <div className="featurePointContent">
                  <h3>Medical Coding and Claim Generation: </h3>
                  <p>
                    Diagnoses and treatments are converted into standardized
                    codes, and claims are generated based on these codes for
                    submission to the insurance company
                  </p>
                </div>
              </div>
              <div className="featurePoint">
                <div className="featurePointContent">
                  <h3> Claim Submission and Payment Posting:</h3>
                  <p>
                    Claims are submitted to the insurer for processing, and
                    payments received from the insurance company are posted to
                    the patients account.
                  </p>
                </div>
              </div>
              <div className="featurePoint">
                <div className="featurePointContent">
                  <h3>Patient Billing: </h3>
                  <p>
                    Any remaining balance after insurance payment is billed to
                    the patient, including co-pays and deductibles, completing
                    the cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
