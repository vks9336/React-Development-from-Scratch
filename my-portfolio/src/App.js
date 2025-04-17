export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
      <About />
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      <Logo />
      <Links />
    </div>
  );
}

function Logo() {
  return <div className="logo">Vishal Kumar Singh</div>;
}

function Links() {
  const link = ["Home", "About", "Project", "Contact"];
  return (
    <div className="links">
      {link.map((l) => (
        <Link link={l} />
      ))}
    </div>
  );
}

function Link({ link }) {
  return <a href="/">{link}</a>;
}

function Main() {
  return (
    <div className="main">
      <Name />
      <Summary />
      <div className="buttons">
        <Button>View Projects</Button>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
}

function Name() {
  return <div className="name">Hi, I'm Vishal Kumar Singh</div>;
}

function Summary() {
  return (
    <div className="summary">
      Vishal Kumar Singh is a passionate B.Tech student with a strong interest
      in web development and software projects. He has built multiple real-world
      applications using HTML, CSS, JavaScript, and React, including projects
      like Speechify, Weather App, Nutrition Meter, and UsePopcorn. His work
      often involves integrating APIs, real-time data handling, and creating
      user-friendly interfaces. Vishal also explores smart solutions like
      vending machine integrations for document printing, showcasing innovation
      and practical thinking in tech.
    </div>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function About() {
  const frontendSkills = ["React", "Java", "JavaScript", "HTML", "CSS"];
  const backendSkills = [
    "Node.js",
    "python",
    "springBoot",
    "MongoDB",
    "PostgraceSQL",
  ];

  return (
    <div className="about">
      <AboutMe />
      <div className="skills">
        <Skills skill={frontendSkills}>Frontend</Skills>
        <Skills skill={backendSkills}>Backend</Skills>
      </div>
      <div className="education">
        <Education />
        <WorkExperience />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="aboutme">
      <h1 className="name">About Me</h1>
      <p className="summary">
        Passionate developer with experience in developing web applications
        using modern technologies like React, JavaScript, and CSS. Always eager
        to learn and implement innovative solutions to solve real-world
        problems.
      </p>
    </div>
  );
}

function Skills({ skill, children }) {
  return (
    <div>
      <h3 className="skill">{children}</h3>
      <div>
        {skill.map((s) => (
          <Skill skill={s} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return <span className="skill-button">{skill}</span>;
}

function Education() {
  return <div className="eduction-list">Education</div>;
}

function WorkExperience() {
  return <div className="workexperience">WorkExperience</div>;
}
