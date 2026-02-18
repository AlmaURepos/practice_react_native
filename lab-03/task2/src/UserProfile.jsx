import React, {useState, useEffect} from 'react';


function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchUser = async () => {
            try{
                setLoading(true);
                setError(null);

                const responce = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                    signal: abortController.signal});

                if (!responce.ok) {
                    throw new Error(`HTTP error! status: ${responce.status}`);
                }

                const data = await responce.json();
                setUser(data);
                setLoading(false);}
            catch (err) {
                if (err.name === 'AbortError') {
                    
                    setError(err.message);
                    setLoading(false);
                }
            }
        }

        fetchUser();

        return () => {
            abortController.abort();
        }
    }, [userId]);


    if (loading) {
        return <div>Loading...</div>;
    }  
    if (error) {
        return <div>Error: {error}</div>;
    }
    if(!user) {
        return <div>No user data</div>;
    }


    return(
        <div>
            <h2>Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Websites: {user.website}</p>
        </div>
    )
}

export default UserProfile;