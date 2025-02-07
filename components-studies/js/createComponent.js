import createHeader from './header.js';
import createFooter from './footer.js';

const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

createComponent(header);
createComponent(footer);

function createComponent(component) {
    switch (component.id) {
        case 'header':
            createHeader(component);
            break;
        
        case 'footer':
            createFooter(component);
            break;
    
        default:
            break;
    }
}

function getLink(href) {
    const path = window.location.pathname;
    
    if (path.includes('/pages/')) {
        return `../${href}`;
    }
    return href;
}
