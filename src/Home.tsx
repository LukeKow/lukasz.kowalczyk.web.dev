import { Card } from "./components/card/Card";

import me from './assets/images/me.jpeg';
import igIcon from './assets/icons/Instagram.svg';
import linkedInIcon from './assets/icons/LinkedIn.svg';
import gmailIcon from './assets/icons/gmail.svg';
import { TextSection } from "./components/textSection/TextSection";

function App() {
	return (
		<div
			className="py-30"
			style={{
				background: "linear-gradient(90deg, #FFE9C2 0%, #FFE9C2 40%, #ffffff 35%, #ffffff 100%)"
			}}>
			<div className="flex gap-10 justify-center">
				<Card
					igIcon={igIcon}
					gmailIcon={gmailIcon}
					linkedInIcon={linkedInIcon}
					title="Łukasz Kowalczyk"
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
			</div>
		</div>
	);
}

export default App
