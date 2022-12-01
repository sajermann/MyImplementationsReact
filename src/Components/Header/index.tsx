import { useTranslation } from '../../Hooks/UseTranslation';
import { SelectLanguage } from '../SelectLanguage';
import { ToggleDarkMode } from '../ToggleDarkMode';

export function Header() {
	const { translate } = useTranslation();
	return (
		<header className="bg-slate-900 flex justify-between items-center p-4	text-white">
			<h1>{translate('MY_IMPLEMENTATIONS_IN_REACT')}</h1>
			<ToggleDarkMode />
			<SelectLanguage />
		</header>
	);
}
