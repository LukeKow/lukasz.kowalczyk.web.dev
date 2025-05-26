import { useState } from "react";
import { Card } from "./components/card/Card";

import me from './assets/images/me.jpeg';
import igIcon from './assets/icons/Instagram.svg';
import linkedInIcon from './assets/icons/LinkedIn.svg';
import gmailIcon from './assets/icons/gmail.svg';

function App() {
	return (
		<Card
			igIcon={igIcon}
			gmailIcon={gmailIcon}
			linkedInIcon={linkedInIcon}
			title="Łukasz Kowalczyk"
			handlePrimaryAction={() => { }}
			handleSecondaryAction={() => { }}
			igLink="www.instagram.pl"
			linkedInLink="www.linkedin.pl"
			mailAddress="lukasz.kowalczyk.dev@gmail.com"
			imgSrc={me}
		/>
	);
}

export default App
