//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Fall Event Calendar",
    languages: "react, jsx, css, js",
    packages: "bcrypt, Express.js,  if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently, react-bootstrap, js-cookie",
    image: "/img/FallEventCalendar.png",
    description: "Allows you to create events within states on certain dates for others to see. I did the login, signup, and authentication",
    repo: "https://github.com/fpierreRun/Group-3-MVP",
    live: "https://whispering-crag-28124.herokuapp.com/",
  },
  {
    id: 1,
    title: "Rippit",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/Rippit.png",
    description: "Allows you to create Forums, Sub-Forums, Posts, and comments for each post. I did the Handlebars rendering, and most of the backend routes",
    repo: "https://github.com/ProgrammingAStorm/rippit",
    live: "https://ancient-retreat-86124.herokuapp.com ",
  },
  {
    id: 2,
    title: "Encounter Generator",
    languages: "html, css, js,",
    image: "/img/EncounterGen.png",
    packages: "none",
    description: "Allows you to create randomly generated Monsters and creatures for use with D&D. Also has some other useful D&D functions. I did most of the CSS",
    repo: "https://github.com/BenHuf/encounter-gen",
  },
  {
    id: 3,
    title: "README Generator",
    languages: "Markdown, js",
    image: "/img/ImageNotAvailable1.jpg",
    packages: "none",
    description: "Allows you to enter information via the terminal and it generates a README file for whatever project information you entered.",
    repo: "https://github.com/dulrath12/README-generator"
  },
  {
    id: 4,
    title: "Run Buddy",
    languages: "html, css",
    packages: "None",
    image: "/img/RunBuddy.png",
    description: "This is a basic HTML/CSS Website that is used for a fitness company.",
    repo: "https://github.com/dulrath12/run-buddy",
  },
  {
    id: 5,
    title: "React Portfolio",
    languages: "html, css, js",
    packages: "@formspree/react,dotenv,react,react-dom,react-router-dom,react-scripts,web-vitals",
    image: "/img/ReactPortfolio.png",
    description: "A React portolio that displays my information, along with some of my projects, and work that has been done",
    repo: "https://github.com/dulrath12/react-portfolio",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
