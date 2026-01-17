import react from 'react';
function ProfileCard() {
    const name = 'Aidos Amangeldi'
    const bio = 'Love React Native'
    const avatarUrl = 'https://avatars.githubusercontent.com/u/70362836?v=4'
    const buttonUrl = 'https://github.com/AlmaURepos/practice_react_native.git'

    const cardStyle={
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }

    const avatarStyle={
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '16px',
    }

    const nameStyle={
        fontSize: '1.5em',
        margin: '0 0 8px 0',
    }

    const bioStyle={
        fontSize: '1em',
        color: '#666',
        margin: '0',
    }

    const buttonStyle={
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007BFF',
    }


    return(
        <div style={cardStyle}>
            <img src={avatarUrl} alt="Avatar" style={avatarStyle} />
            <h2 style={nameStyle}>{name}</h2>
            <p style={bioStyle}>{bio}</p>   
            <button style={buttonStyle} onClick={() => {window.open(buttonUrl, "_blank");}}>Repository</button>
        </div>
    )
}

export default ProfileCard;