import Home from './page/home.js';
import About from './page/about.js';

const routes = {
	'/': Home,
	'/about': About,
};

const $app = document.querySelector('.App');

const renderComponent = (url: string) => {
	const Component = routes[url];
	if (Component) $app.innerHTML = Component.template();
	else $app.innerHTML = '404 Not Found';
};

renderComponent(window.location.pathname);

const navigate = (url: string) => {
	history.pushState(null, null, url);
	$app.innerHTML = routes[url].template();
};

window.addEventListener('click', e => {
	const path = (e.target as HTMLElement).dataset.navi;
	navigate(path);
});

window.addEventListener('popstate', () => {
	navigate(window.location.pathname);
});
