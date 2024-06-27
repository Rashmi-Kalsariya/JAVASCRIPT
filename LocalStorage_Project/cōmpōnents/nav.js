
const nav = (login = "login", signup = "signup") => {
  return `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
<img src="https://assets.faballey.com/images/indya/logo.png?v=14.6" alt="Logo" height="50px" width="90px">
    <a class="navbar-brand" href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./pages/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/LocalStorage_Project/pages/product.html" target="_blank">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/LocalStorage_Project/pages/addproduct.html" tabindex="-1" target="_blank">AddProducts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/LocalStorage_Project/pages/cart.html" tabindex="-1" target="_blank">cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/LocalStorage_Project/pages/login.html" tabindex="-1" target="_blank">${login}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/LocalStorage_Project/pages/signup.html" tabindex="-1" target="_blank">${signup}</a>
        </li>
      </ul>
      <form class="d-flex" id="Searching">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`
}

export default nav