import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <img
        src={require("./images/chess.jpg")}
        alt="Strategic business partner"
      />
      <h1>Welcome</h1>
      <h3>Cynthia Valdivieso, Managing Member</h3>
      <p>Welcome to our website!</p>
      <p>
        This website exsits to provide clients and potential clients with
        information concerning our firm and our unique, low-pressure approach to
        personal and professional services. We are extremely proud of the
        high-quality services that our firm provides.
      </p>
      <p>
        We value small businesses and their impact in our families, communities
        and national economy. We want to be your partner in success.
      </p>
      <p>
        Please feel free to browse our website to see the services we offer as
        well as the many helpful resources we provide. When you are ready to
        learn more about what we can do for you, we encourage you to{" "}
        <Link to="/contact">contact us</Link>
      </p>
    </div>
  );
};

export default Home;
