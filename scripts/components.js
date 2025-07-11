class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="index.html">
                <img src="" alt="">
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="members.html">Members</a></li>
                    <li><a href="research.html">Research</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <span>&copy</span>myname, 2025
        </footer>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);