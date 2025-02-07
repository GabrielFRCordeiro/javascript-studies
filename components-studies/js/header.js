export default function createHeader(component) {
    component.innerHTML = `
        <nav class="navigation">
            <a href="${getLink('index.html')}">Home</a>
            <a href="${getLink('pages/portifolio.html')}">Portifolio</a>
            <a href="${getLink('pages/about-me.html')}">About Me</a>
        </nav>
    `;
}

function getLink(href) {
    const path = window.location.pathname;
    
    if (path.includes('/pages/')) {
        return `../${href}`;
    }
    return href;
}
