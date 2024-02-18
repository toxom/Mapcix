// sidenav.js

class Sidenav {
    constructor() {
        this.sidenavElement = document.createElement('div');
        this.sidenavElement.classList.add('sidenav');
        document.body.appendChild(this.sidenavElement);
    }

    open() {
        this.sidenavElement.style.width = '250px'; // Adjust width as needed
    }

    close() {
        this.sidenavElement.style.width = '0';
    }
}
