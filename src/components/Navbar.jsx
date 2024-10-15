import "../App.modules.css";

function Navbar(){

    return(
        <nav class="navbar">
        <div class="logo">EXTracker</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        <div class="auth-buttons">
            <button class="login-btn btns">Login</button>
            <button class="register-btn btns">Register</button>
        </div>
    </nav>
    )
}
export default Navbar;