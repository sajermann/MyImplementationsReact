import { Link } from 'react-router-dom';
import { useTranslation } from '../../Hooks/UseTranslation';
import Menu from '../Menu';
import { SelectLanguage } from '../SelectLanguage';
import { ToggleDarkMode } from '../ToggleDarkMode';
import styles from './styles.module.css';

export function Header() {
	const { translate } = useTranslation();

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<Menu />
				<Link to="/" className={styles.link}>
					<h1 className={styles.title}>
						{translate('MY_IMPLEMENTATIONS_IN_REACT')}
					</h1>
				</Link>
				<div className="flex items-center justify-center gap-2">
					<ToggleDarkMode />
					<SelectLanguage />
				</div>
			</div>
		</nav>
	);
}
