import './App.css';
import Image from './images/Mohamed Dawood.jpg';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
  {
    skill: 'Node.js',
    level: 'advanced',
    color: '#1ed31e',
  },
  {
    skill: 'C++',
    level: 'advanced',
    color: 'red',
  },
  {
    skill: 'Python',
    level: 'advanced',
    color: 'green',
  },
];
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
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
}
export default App;
