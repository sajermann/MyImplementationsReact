import { List } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useDarkMode } from '../../Hooks/UseDarkMode';
import { Drawer } from '../Drawer';
import { OptionButton } from '../OptionButton';
import { OPTIONS_MENU } from '../../Constants/OptionsMenu';

import styles from './styles.module.css';

export default function Menu() {
	const { darkMode } = useDarkMode();
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	function goTo(url: string) {
		navigate(url);
	}

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className={styles.buttonMenu}
			>
				<List size={22} />
			</button>
			<Drawer
				oneClickToClose
				openFrom="left"
				percentage={30}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<div
					className={darkMode ? styles.containerDark : styles.containerLight}
				>
					<nav className={styles.nav}>
						<div className={styles.title}>Menu</div>
					</nav>
					<div className={styles.main}>
						{OPTIONS_MENU.map(menu => (
							<OptionButton
								key={generateGuid()}
								className={`${styles.menu} ${
									darkMode ? styles.dark : styles.light
								}`}
								onClick={() => goTo(menu.url)}
							>
								{menu.title}
							</OptionButton>
						))}
					</div>
				</div>
			</Drawer>
		</>
	);
}
