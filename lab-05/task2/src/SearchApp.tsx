import type {User} from '../../task1/src/types';
import { useState } from 'react';

const INITIAL_DATA: User[] = [
{ name: "Alice", email: "alice@mail.com", age: 25 },
{ name: "Bob", email: "bob@mail.com", age: 30 },
{ name: "Charlie", email: "charlie@mail.com", age: 35 },
{ name: "David", email: "david@gmail.com", age: 28 },
{ name: "Eve", email: "eve@mail.ru", age: 22 },
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [SearchTerm, setSearchTerm] = useState<string>("");


    const handleSeacrh = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const term = event.target.value;
        setSearchTerm(term);
        setFilteredUsers(
            users.filter((user) => user.name.toLowerCase().includes(term.toLowerCase()))
        );
    };


    const handleClear = (
        event: React.MouseEvent<HTMLButtonElement>): void => {
        setSearchTerm("");
        setFilteredUsers(users);
    };
    

    return(
        <div>
            <input type="text" value={SearchTerm} onChange={handleSeacrh} placeholder="Search by name"/>
            <button onClick={handleClear}>Clear</button>
            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>{user.name} - {user.email} - {user.age}</li>
                ))}
            </ul>
        </div>
    );
};


export default SearchApp;