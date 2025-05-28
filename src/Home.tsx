import { Card } from "./components/card/Card";

import { TextSection } from "./components/textSection/TextSection";
import { TopBar } from "./components/topBar/TopBar";

import me from './assets/images/me.jpeg';
import igIcon from './assets/icons/Instagram.svg';
import linkedInIcon from './assets/icons/LinkedIn.svg';
import gmailIcon from './assets/icons/gmail.svg';
import './home.css';
import { useRef } from "react";

function App() {
	const homeRef = useRef(null);
	const procjectsRef = useRef(null);
	const resumeRef = useRef(null);

	return (
		<div>
			<TopBar name="Łukasz Kowalczyk" menuItems={[
				{
					text: 'Projects',
					ref: procjectsRef
				},
				{
					text: 'Resume',
					ref: resumeRef
				},
				{
					text: 'Home',
					ref: homeRef
				}]}
			/>
			<div
				ref={homeRef}
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
			<section ref={procjectsRef} className="h-100 w-full bg-orange-700">
				<h2 className="text-3xl text-white">
					PROJECTS
				</h2>
			</section>
			<section ref={resumeRef} className="h-100 w-full bg-orange-300">
				<h2 className="text-3xl text-white">
					RESUME
				</h2>
			</section>
		</div>
	);
}

export default App
