
import type { Skill } from './types';


interface SkillListProps {
    skills: Skill[]; // Array type (Ch. 6, p. 93)
}


const getLevelColor = (level: Skill['level']): string => {
    switch (level) {
        case 'beginner':
            return 'gray';
        case 'intermediate':
            return 'orange';    
        case 'expert':
            return 'green';
        default:
            return 'black';
    }}


const SkillList= ({ skills }: SkillListProps) => {
    return (
        <ul>
            {skills.map((skill)=> (
                <li key={skill.id} style={{color: getLevelColor(skill.level)}}>
                    {skill.name}-{skill.level}
                </li>
            ))}
        </ul>
    )}


export default SkillList;