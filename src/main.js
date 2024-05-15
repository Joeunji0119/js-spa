function renderContent(router) {
	const contentElement = document.querySelector('main');
	const pageNotFoundHTML = '<h1>Page Not Found</h1>';

	fetch(`src/page/${router}.html`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Page not found');
			}
			return response.text();
		})
		.then(html => {
			contentElement.innerHTML = html;
		})
		.catch(error => {
			contentElement.innerHTML = pageNotFoundHTML;
		});
}

function handleRouteChange() {
	let path = window.location.hash.substr(1) || 'main';
	renderContent(path);
}

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('DOMContentLoaded', handleRouteChange);
