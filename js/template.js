// this file will contain the navbar and footer for the site.
function template_header() {
    const header = document.createElement("header");
    header.className = "site-header";

    header.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" style="color: rgb(13, 36, 21); text-decoration: none; margin-left: 10px;">About Me</a>
                <a href="index.html" style="color: rgb(13, 36, 21); text-decoration: none;"><h2 style="margin-bottom: 0px;">Trent Baldwin</h2></a>
                <div class="dropdown" style="margin-bottom: 0px;">
                    <a href="portfolio.html"><button class="dropbtn">Portfolio</button></a>
                    <div class="dropdown-content">
                        <a href="portfolio.html">portfolio</a>
                        <a href="https://linkedin.com/in/trent-baldwin-a4063438a" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    document.body.prepend(header);
}


function template_footer(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="footer">
        <div class="footer-container">
            <a href="https://linkedin.com/in/trent-baldwin-a4063438a" target="_blank">
                LinkedIn
            </a>
        </div>
    </div>`;
    document.body.appendChild(footer);
}
window.addEventListener('DOMContentLoaded', () => {
    template_header();
    template_footer();
});