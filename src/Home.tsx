import { Card } from "./components/card/Card";

import { TextSection } from "./components/textSection/TextSection";
import { TopBar } from "./components/topBar/TopBar";

import me from './assets/images/me.jpeg';
import igIcon from './assets/icons/Instagram.svg';
import linkedInIcon from './assets/icons/LinkedIn.svg';
import gmailIcon from './assets/icons/gmail.svg';
import './home.css';

function App() {
	return (
		<div>
			<TopBar name="Łukasz Kowalczyk" />
			<div
				id="home"
				className="lg:py-30 lg:h-screen lg:block flex flex-col"
			>
				<section id="card-section" className="flex flex-col mx-5 lg:mx-0 lg:flex-row gap-10 justify-center">
					<Card
						igIcon={igIcon}
						gmailIcon={gmailIcon}
						linkedInIcon={linkedInIcon}
						name="Łukasz Kowalczyk"
						title="Web developer"
						handlePrimaryAction={() => { }}
						handleSecondaryAction={() => { }}
						igLink="https://www.instagram.com/lkow.photo/"
						linkedInLink="www.linkedin.pl"
						mailAddress="lukasz.kowalczyk.dev@gmail.com"
						imgSrc={me}
					/>
					<TextSection
						header="Hello"
						subheader="Here's who I am & what I do"
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>
				</section>
			</div>
		</div>
	);
}

export default App
