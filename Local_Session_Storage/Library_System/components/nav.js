
const nav = () => {
    return ` <div class="nav-wrapper">
        <div class="logo-container">
            <img class="logo"
                src="/Dice/imgs/61f7cd1767553f0004c53e6e.png"
                alt="Logo">
        </div>
        <nav>
            <input class="hidden" type="checkbox" id="menuToggle">
            <label class="menu-btn" for="menuToggle">
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
            </label>
            <div class="nav-container">
                <div class="nav-tabs">
                    <a class="nav-tab" href="./index.html">Home</a>
                    <a class="nav-tab" href="./pages/dash.html">Dashboard</a>
                    <a class="nav-tab" href="./pages/MyBooks.html">MyBooks</a>
                    <a class="nav-tab" href="./pages/BookMarks.html">BookMarks</a>
                </div>
            </div>
        </nav>
    </div>
 `
}

export default nav