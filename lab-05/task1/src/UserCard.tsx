import React from 'react';
import type { User } from './types';

interface UserCardProps {
    user: User;
    isActive?: boolean; // optional prop (Ch. 6, p. 99)
    children: React.ReactNode; // any renderable content
}

const UserCard= ({
    user,
    isActive = true, // defaultvalue
    children
    }: UserCardProps) => {
    return (
        <div style={{opacity: isActive ? 1: 0.5, 
            border: '1px solid black',
            padding: '10px',
            marginBottom: '10px'
        }}>
            <h2>{user.name}</h2>
            <p>{user.email}| Age: {user.age}</p>
            {children}
        </div>
    );
};

export default UserCard;