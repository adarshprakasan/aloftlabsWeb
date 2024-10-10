import React from "react";
import { TbAugmentedReality } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import "../css/solutions.css";

function Solutions() {
  return (
    <div className="featured">
      <div className="mainContainer">
        <div className="featuredCard">
          <TbAugmentedReality className="icons" />
          <h3>Aloft AR Caller Bots</h3>
          <p>
            Introducing our personalized AR calling bot—the solution for saving
            your time and money. Automate the calls to check the status of
            submitted claims and free up your teams valuable time. The bot can
            be customized to meet your specific needs, ensuring it is tailored
            to your business vision. Say goodbye to tedious phone calls and
            hello to a more efficient way of collecting information.
          </p>
        </div>
        <div className="featuredCard">
          <FaMoneyBillTrendUp className="icons" />
          <h3>Auto- PILOT</h3>
          <p>
            We offer cutting-edge RPA solutions to help you streamline your
            Revenue Cycle Management (RCM) processes. Our automated processes
            are tailored to your unique RCM needs, reducing errors, boosting
            efficiency, and increasing productivity. We work with you to
            identify the areas where automation can provide the greatest
            returns. Contact us today to learn how we can help you optimize your
            revenue cycle.
          </p>
        </div>
        <div className="featuredCard">
          <FaBrain className="icons" />
          <h3>Steno</h3>
          <p>
            Our AI-powered transcription software, AI Steno, fully complies with
            HIPAA regulations, ensuring the safety and security of your patient
            data. With our software, you can focus on providing high-quality
            patient care while we take care of the transcriptions. Our AI Steno
            is designed to understand complex medical terminologies, so your
            transcriptions are always error-free.
          </p>
        </div>
        <div className="featuredCard">
          <MdManageAccounts className="icons" />
          <h3>Cognitive Revenue Management</h3>
          <p>Coming Soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
