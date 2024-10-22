import './App.css';
import Image from './images/Mohamed Dawood.jpg';
function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={Image} alt="mohamed dawood" />;
}

function Intro() {
  return (
    <>
      <h1>Mohamed Dawood</h1>
      <p>
        Passionate software engineer driven by a love for coding, focused on
        growth, success, and innovation. Always learning and adapting to excel.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="👨‍🦳" color="yellow" />
      <Skill skill="C++" emoji="💪" color="red" />
      <Skill skill="Html&Css" emoji="👨‍🦰" color="orange" />
      <Skill skill="Node.js" emoji="💪" color="green" />
      <Skill skill="Svelte" emoji="👶" color="gray" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}
export default App;
