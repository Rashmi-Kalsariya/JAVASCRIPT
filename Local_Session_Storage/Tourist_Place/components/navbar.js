
const navbar = () => {
  return `  <div class="wrapper">
  <nav>
    <input type="checkbox" id="show-search">
    <input type="checkbox" id="show-menu">
    <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
    <div class="nav-content">
      <div class="logo"><img src="#" alt=""><a href="#">TRAVELS</a></div>
      <ul class="links">
        <li><a href="#">Home</a></li>

        <li><a href="/JAVASCRIPT/Local_Session_Storage/Tourist_Place/pages/addplaces.html" class="nav-login">Add Places</a></li>

        <li><a href="/JAVASCRIPT/Local_Session_Storage/Tourist_Place/pages/login.html" class="nav-login">Login</a></li>

        <li><a href="/JAVASCRIPT/Local_Session_Storage/Tourist_Place/pages/signup.html">SignUp</a></li>
      </ul>
    </div>
    <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
    <form action="#" class="search-box">
      <input type="text" placeholder="Search Something..." required>
      <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
    </form>
  </nav>
</div>
  `
}
export default navbar