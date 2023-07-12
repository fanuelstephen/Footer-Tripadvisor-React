import React from "react";
import "./App.css";
import FooterList from "./Component/Footer/FooterList";
import FooterLogo from "./Component/Footer/FooterLogo";

function App() {
  const tripAdvisorFooter = [
    {
      title: "Trip Advisor",
      phone: "(+255)711 876 756",
      email: "admin@tripadvisor.com",
    },
    {
      title: "Company",
      items: ["Career", "About us", "Blog", "Press info", "Features"],
    },
    {
      title: "Traveller",
      items: [
        "Why Travellers",
        "How it Works",
        "Why choose us",
        "Customer story",
        "Review",
      ],
    },
    {
      title: "Terms",
      items: [
        "Privarcy Policy",
        "Trems & Condition",
        "Copyright Policy",
        "Security",
        "Fees & charge",
      ],
    },
    {
      discription: "Copyright &copy; 2023 by steee. All Right Reserved",
    },
    {
      title: [
        "logo-instagram",
        "logo-twitter",
        "logo-facebook",
        "logo-linkedin",
      ],
    },
  ];
  return (
    <div className="App">
      <footer>
        <div className="footer-content">
          <FooterLogo tripAdvisorFooter={tripAdvisorFooter} />
          <FooterList tripAdvisorFooter={tripAdvisorFooter} />
        </div>
        <div className="end">
          <p>{tripAdvisorFooter[4].discription}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
