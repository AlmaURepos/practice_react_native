
import './App.css'
import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';


const sampleUser: User = {
  name: 'John Doe',
  email: 'example@gmail.com',
  age: 30
};

const sampleSkills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'expert' },
  { id: 2, name: 'TypeScript', level: 'intermediate' },
  { id: 3, name: 'React', level: 'beginner' }
];

function App() {
  return (
    <div className="App">
      <UserCard user={sampleUser} isActive={true}>
        <SkillList skills={sampleSkills} />
      </UserCard>
    </div>
  )
}

export default App
