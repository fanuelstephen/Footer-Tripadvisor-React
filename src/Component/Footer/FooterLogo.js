import React from "react";

import FooterSocialMedia from "./FooterSocialMedia";

const FooterLogo = (props) => {
  return (
    <div className="footer-logo">
      <p class="logo-title">{props.tripAdvisorFooter[0].title}</p>
      <div class="social-media">
        <FooterSocialMedia />
      </div>
      <p class="phone-no">{props.tripAdvisorFooter[0].phone}</p>
      <p class="email">{props.tripAdvisorFooter[0].email}</p>
    </div>
  );
};

export default FooterLogo;
