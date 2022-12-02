import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from 'phosphor-react';
import styles from './styles.module.css';
import { OPTIONS_MENU } from '../../Constants/OptionsMenu';

type Menu = {
	title: string;
	url: string;
};

export default function PrevAndNext() {
	const location = useLocation();
	const [prev, setPrev] = useState<Menu | null>(null);
	const [next, setNext] = useState<Menu | null>(null);

	function load() {
		if (!location.pathname.includes('/docs/')) {
			setPrev(null);
			setNext(null);
		}
		const index = OPTIONS_MENU.map(item => item.url).indexOf(location.pathname);
		if (index - 1 < 0) {
			setPrev(null);
		} else {
			setPrev(OPTIONS_MENU[index - 1]);
		}
		if (index + 1 > OPTIONS_MENU.length) {
			setPrev(null);
		} else {
			setNext(OPTIONS_MENU[index + 1]);
		}
	}

	useEffect(() => load(), [location.pathname]);

	if (!OPTIONS_MENU.length) {
		return null;
	}

	return (
		<div className={styles.container}>
			<strong>Outros Componentes</strong>
			<div className={styles.subContainer}>
				{prev && (
					<Link to={prev.url}>
						<CaretLeft /> {prev.title}
					</Link>
				)}
				{next && (
					<Link to={next.url}>
						{next.title}
						<CaretRight />
					</Link>
				)}
			</div>
		</div>
	);
}
