// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Junior Full-Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Dakotah Ulrath"/>
      <p className="content is-italic mt-4">
        My name is Dakotah, I am a recent graduate of the MSU/2U Coding bootcamp. I am looking to start a career and become a better developer.
      </p>
      <p className="content">
        I was introduced into the Coding world by fellow coder. I then decided to take a bootcamp course to further my knowledge and gain a Certificate showing that i know a little something about coding. I am excited to begin this journey into the world of Full-Stack Web Development.
      </p>
    </div>
  );
}

export default About;
