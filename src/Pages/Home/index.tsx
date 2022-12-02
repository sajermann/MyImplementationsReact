/* eslint-disable react/no-unescaped-entities */

import { CodeBlock } from '../../Components/CodeBlock';
import Section from '../../Components/Section';

export default function Home() {
	return (
		<main data-content="content-main">
			<Section heading="Introdução">
				<span>
					Criei esse projeto visando manter um portfólio para salvar e
					demonstrar algumas de minhas implementações mais simples, um local que
					eu possa facilmente localizar a implementação e copiar o código, além
					de poder demonstrar um pouco do meu trabalho.
				</span>
				<span>
					Aqui ficará apenas implementações mais simples como por exemplo
					buttons e inputs.
				</span>
			</Section>
			<Section heading="Dúvidas">
				<span>
					Caso tenha alguma dúvida ou queira compartilhar alguma opinião sugiro
					abrir uma discussão dentro do github através desse{' '}
					<a
						href="https://github.com/sajermann/NPM-SajermannUiReact/discussions"
						target="_blank"
						rel="noopener noreferrer"
					>
						link
					</a>
					.
				</span>
			</Section>
		</main>
	);
}
