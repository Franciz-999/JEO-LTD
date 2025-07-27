const header = document.createElement("header");
header.innerHTML = `
    <h1>Beverage Distribution Company</h1>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

document.body.prepend(header);

const footer = document.createElement("footer");
footer.innerHTML = `
    <p>&copy; 2023 Beverage Distribution Company. All rights reserved.</p>
`;

document.body.appendChild(footer);