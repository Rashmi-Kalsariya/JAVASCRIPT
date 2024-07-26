
const navbar = () => {
    return `
     <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="./pages/signup.html">Home</a></li>
                <li><a href="./pages/Dashboard.html">Dashboard</a></li>
                <li><a href="./pages/courses.html">Create Course</a></li>
                <li><a href="./pages/login.html">Login</a></li>
                <li><a href="./pages/signup.html">Signup</a></li>
            </ul>
            <h1 class="logo">COURSE</h1>
        </div>
    </nav>
    `
}

export default navbar