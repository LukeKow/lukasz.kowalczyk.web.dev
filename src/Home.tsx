import { Card } from "./components/card/Card";
import { TextSection } from "./components/textSection/TextSection";
import { TopBar } from "./components/topBar/TopBar";

import { useSections } from "./shared/hooks/useSections";
import { SectionsContext } from "./shared/contexts/sectionContext";

import me from "./assets/images/me.jpeg";
import igIcon from "./assets/icons/Instagram.svg";
import linkedInIcon from "./assets/icons/LinkedIn.svg";
import gmailIcon from "./assets/icons/gmail.svg";
import "./home.css";

function App() {
  const sections = useSections();

  return (
    <SectionsContext value={sections}>
      <div>
        <TopBar name="Łukasz Kowalczyk" />
        <div
          ref={sections[0].ref}
          id={sections[0].text}
          className="lg:py-30 lg:h-screen lg:block flex flex-col"
        >
          <section
            id={sections[0].text}
            className="flex flex-col mx-7.5 lg:mx-0 lg:flex-row gap-10 justify-center"
          >
            <Card
              igIcon={igIcon}
              gmailIcon={gmailIcon}
              linkedInIcon={linkedInIcon}
              name="Łukasz Kowalczyk"
              title="Web developer"
              handlePrimaryAction={() => {}}
              handleSecondaryAction={() => {}}
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
        <section
          id={sections[1].text}
          ref={sections[1].ref}
          className="h-100 w-full bg-orange-700"
        >
          <h2 className="text-3xl text-white">{sections[1].text}</h2>
        </section>
        <section
          id={sections[2].text}
          ref={sections[2].ref}
          className="h-100 w-full bg-orange-300"
        >
          <h2 className="text-3xl text-white">{sections[2].text}</h2>
        </section>
      </div>
    </SectionsContext>
  );
}

export default App;
