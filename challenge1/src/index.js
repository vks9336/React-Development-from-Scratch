import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpg" alt="Vishal Kumar Singh" />;
}

function Intro() {
  return (
    <div>
      <h1>Vishal Kumar Singh</h1>
      <p>
        I am a passionate B.Tech student with a strong interest in web
        development and software engineering. Proficient in JavaScript, React,
        and modern web technologies, I enjoy building interactive and
        user-friendly applications. I have experience working with APIs,
        optimizing performance, and creating intuitive user interfaces. Always
        eager to learn and explore new technologies..
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👊" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="🫥" color="yellow" />
      <Skill skill="JAVA" emoji="💪" color="orangered" />
      <Skill skill="CPP" emoji="👶" color="pink" />
      <Skill skill="SpringBoot" emoji="😭" color="yellowgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
