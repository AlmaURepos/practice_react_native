export interface User{
    name: string;
    email: string;
    age: number;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'expert';

export interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}