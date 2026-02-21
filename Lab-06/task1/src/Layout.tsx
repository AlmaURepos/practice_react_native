import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav style={navStyle}>
                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
                <NavLink to="/about" style={linkStyle}>About</NavLink>
                <main style={{padding: "20px"}}> <Outlet/></main>
                <footer style={footerStyle}>Student Portal 2026</footer>
            </nav>
        </>
    )
}


const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#222"
}

const linkStyle = ({isActive}:{isActive: boolean}) => ({
    color: isActive ? "#fff" : "#aaa",
    textDecoration: "none",
    fontWeight: "bold"
})


const footerStyle: React.CSSProperties = {
    padding: "10px",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center"
}

export default Layout;