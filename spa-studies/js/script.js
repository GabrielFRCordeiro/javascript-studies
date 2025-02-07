/*
  history.pushState() => updates URL without reloading the page
  - first argument: state object (can be used to store information about the page)
  - second argument: page title (not widely supported)
  - third argument: new URL

  window.onpopstate => event triggered by user browsing history
*/

function showPage(page) {
    const content = document.querySelector("#content");

    if (page === 'home') {
        content.innerHTML = `<p>Welcome to my portifolio website!</p>`;
        history.pushState({ page: 'home' }, 'Home', '/home');
    } else if (page === 'portifolio') {
        content.innerHTML = `<ul>
            <li>
                <h2>TrailerFlix</h2>
                <ul>
                    <li>React</li>
                    <li>SASS</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                </ul>
            </li>
            <li>
                <h2>Fresh Photo</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>MySQL</li>
                </ul>
            </li>
            <li>
                <h2>É Pra Já! Mercado</h2>
                <ul>
                    <li>React</li>
                </ul>
            </li>
        </ul>`;
        history.pushState({ page: 'portifolio' }, 'Portifolio', '/portifolio');
    } else if (page === 'about-me') {
        content.innerHTML = `<h1>School</h1>
        <p>Math olympics</p>

        <h1>Link School</h1>
        <p>Communication, team work and time management</p>

        <h1>Senac</h1>
        <h2>FreshPhoto</h2>
        <ul>
            <li>Front-End with HTML, CSS and JavaScript</li>
            <li>Back-End with Python and Flask</li>
            <li>Database with MySQL</li>
            <li>Project Management with Scrum and KanBan</li>
            <li>Version Control with GitHub</li>
        </ul>`;
        history.pushState({ page: 'about-me' }, 'About Me', '/about-me');
    }
}

window.onpopstate = function(event) {
    if (event.state) {
        showPage(event.state.page);
    }
};

window.onload = function() {
    showPage('home');
};
