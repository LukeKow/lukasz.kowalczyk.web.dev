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
import { Container } from "./components/shared/container/Container";
import { PointerWithText } from "./components/shared/pointerWithText/PointerWithText";
import { Typography } from "./components/shared/typography/Typography";
import { Separator } from "./components/shared/separator/Separator";

const mainSkills = ["React", "CSS", "Typescript", "VUE", "Javascript"];
const librariesUsed = [
  "axios",
  "Tailwind",
  "material UI",
  "emotion.js",
  "formik",
  "react router",
  "redux",
  "storybook",
  "yup",
  "mobx",
  "React Testing Library",
  "cypress",
];
const backendSkills = ["C#", ".NET Core", "Entity Framework", "Node"];
const otherExperience = ["Flutter", "React Native", "Angular", "Node"];

function App() {
  const sections = useSections();

  return (
    <SectionsContext value={sections}>
      <TopBar name="Łukasz Kowalczyk" />
      <div id="Home" className="lg:py-30 lg:h-screen lg:block flex flex-col">
        <section className="flex flex-col mx-7.5 lg:mx-0 lg:flex-row gap-10 justify-center">
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
          <Container bgColor="white">
            <TextSection
              header="Cześć"
              subheader="Oto kim jestem i co robię"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Container>
        </section>
      </div>
      <Container bgColor="white">
        <PointerWithText
          tType="subheader"
          tColor="blue"
          text={"MAIN SKILLS"}
          pointerColor="blue"
        />
        <Typography
          tType="subheader"
          tColor="blue"
          text="Front-end"
          cssClass="mt-10"
        />
        <div className="pl-5 mt-5">
          {mainSkills.map((mainSkill, index) => (
            <PointerWithText
              key={index}
              text={mainSkill}
              pointerSize="10px"
              tColor="blue"
              tType="body"
              pointerColor="darkBlue"
            />
          ))}
        </div>
        <Typography
          tType="subheader"
          tColor="blue"
          text="Libraries used"
          cssClass="mt-10"
        />
        <div className="pl-5 mt-5">
          {librariesUsed.map((library, index) => (
            <PointerWithText
              key={index}
              text={library}
              pointerSize="10px"
              tColor="blue"
              tType="body"
              pointerColor="darkBlue"
            />
          ))}
        </div>
      </Container>
      <Separator color="blue" />
      <Container bgColor="white">
        <PointerWithText
          tType="subheader"
          tColor="blue"
          text={"SIDE SKILLS"}
          pointerColor="blue"
        />
        <Typography
          tType="subheader"
          tColor="blue"
          text="Back-end"
          cssClass="mt-10"
        />
        <div className="pl-5 mt-5">
          {backendSkills.map((skill, index) => (
            <PointerWithText
              key={index}
              text={skill}
              pointerSize="10px"
              tColor="blue"
              tType="body"
              pointerColor="darkBlue"
            />
          ))}
        </div>
      </Container>
    </SectionsContext>
  );
}

export default App;
