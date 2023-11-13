import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <p>Logged in User is {loggedInUser}</p>
    </div>
  );
};

export default About;
