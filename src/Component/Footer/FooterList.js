import React from "react";
import "./Footer.css";
const FooterList = (props) => {
  return (
    <div className="footer-list">
      <div>
        <h4>{props.tripAdvisorFooter[1].title}</h4>
        <ul>
          <li>{props.tripAdvisorFooter[1].items[0]}</li>
          <li>{props.tripAdvisorFooter[1].items[1]}</li>
          <li>{props.tripAdvisorFooter[1].items[2]}</li>
          <li>{props.tripAdvisorFooter[1].items[3]}</li>
          <li>{props.tripAdvisorFooter[1].items[4]}</li>
        </ul>
      </div>
      <div>
        <h4>{props.tripAdvisorFooter[2].title}</h4>
        <ul>
          <li>{props.tripAdvisorFooter[2].items[0]}</li>
          <li>{props.tripAdvisorFooter[2].items[1]}</li>
          <li>{props.tripAdvisorFooter[2].items[2]}</li>
          <li>{props.tripAdvisorFooter[2].items[3]}</li>
          <li>{props.tripAdvisorFooter[2].items[4]}</li>
        </ul>
      </div>
      <div>
        <h4>{props.tripAdvisorFooter[3].title}</h4>
        <ul>
          <li>{props.tripAdvisorFooter[3].items[0]}</li>
          <li>{props.tripAdvisorFooter[3].items[1]}</li>
          <li>{props.tripAdvisorFooter[3].items[2]}</li>
          <li>{props.tripAdvisorFooter[3].items[3]}</li>
          <li>{props.tripAdvisorFooter[3].items[4]}</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
