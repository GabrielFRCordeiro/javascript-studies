export default function createFooter(component) {
    component.innerHTML = `
        <ul>
            <li><a href="https://github.com/GabrielFRCordeiro" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/gabrielfrcordeiro/" target="_blank">LinkedIn</a></li>
        </ul>
    `;
}

function getLink(href) {
    const path = window.location.pathname;
    
    if (path.includes('/pages/')) {
        return `../${href}`;
    }
    return href;
}
