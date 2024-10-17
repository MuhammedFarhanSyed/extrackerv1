import './Landing_page.css';

function Navbar(){

    return(
        <nav className="navbar">
        <div className="logo">EXTracker</div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        <div className="auth-buttons">
            <button className="login-btn btns">Login</button>
            <button className="register-btn btns">Register</button>
        </div>
    </nav>
    )
}
export default Navbar;