export function removeCss(ID_BUTTON: string) {
	setTimeout(() => document.querySelector(`#${ID_BUTTON}`)?.remove(), 1000);
}
