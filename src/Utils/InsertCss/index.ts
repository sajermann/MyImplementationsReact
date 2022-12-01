export function insertCss(ID_BUTTON: string, ID: string) {
	const element = document.createElement('style');
	element.id = ID_BUTTON;
	element.innerHTML = `
	@keyframes forLight_${ID} {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
	`;
	const head = document.querySelector('head');
	if (head) {
		head.appendChild(element);
	}
}
