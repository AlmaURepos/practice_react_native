import React, { useState } from 'react';
import UserProfile from './UserProfile';

function UserApp() {
    const [userId, setUserId] = useState(1);

    const handleRefresh = () => {
        setUserId(prevId => prevId + 1);
    }


    return(
        <div>
            <h1>User data fetching</h1>
            <button onClick={()=>setUserId(1)}>User1</button>
            <button onClick={()=>setUserId(2)}>User2</button>
            <button onClick={()=>setUserId(3)}>User3</button>
            <button onClick={handleRefresh}>Refresh</button>
            <UserProfile userId={userId}/>
            
            
        </div>
    )
}

export default UserApp;