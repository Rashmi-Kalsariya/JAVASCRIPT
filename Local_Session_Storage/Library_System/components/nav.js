
const nav = () => {
    return ` <div class="nav-wrapper">
        <div class="logo-container">
            <img class="logo"
                src="https://www.withsocrates.com/wp-content/uploads/2023/01/library-logo1.png"
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
                    <a class="nav-tab" href="/JAVASCRIPT/Local_Session_Storage/Library_System/index.html">Home</a>
                    <a class="nav-tab" href="/JAVASCRIPT/Local_Session_Storage/Library_System/pages/dash.html">Dashboard</a>
                    <a class="nav-tab" href="/JAVASCRIPT/Local_Session_Storage/Library_System/pages/BookMarks.html">MyBooks</a>
                    <a class="nav-tab" href="/JAVASCRIPT/Local_Session_Storage/Library_System/pages/MyBooks.html">BookMarks</a>
                </div>
            </div>
        </nav>
    </div>
 `
}

export default nav