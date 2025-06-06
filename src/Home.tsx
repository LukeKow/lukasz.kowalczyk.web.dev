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
import { SkillsListContainer } from "./components/shared/skillsListContainer/SkillsListContainer";

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
      <div
        id="Home"
        className="mb-5 lg:py-30 lg:h-screen lg:block flex flex-col"
      >
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
          fontType="subheader"
          textColor="blue"
          text={"MAIN SKILLS"}
          pointerColor="darkBlue"
        />
        <Typography
          fontType="subheader"
          textColor="blue"
          text="Front-end"
          textCustomStyle="mt-10"
        />
        <SkillsListContainer>
          {mainSkills.map((mainSkill, index) => (
            <PointerWithText
              key={index}
              text={mainSkill}
              pointerSize="10px"
              textColor="blue"
              fontType="body"
              pointerColor="darkBlue"
            />
          ))}
        </SkillsListContainer>
        <Typography
          fontType="subheader"
          textColor="blue"
          text="Libraries used"
          textCustomStyle="mt-10"
        />
        <SkillsListContainer>
          {librariesUsed.map((library, index) => (
            <PointerWithText
              key={index}
              text={library}
              pointerSize="10px"
              textColor="blue"
              fontType="body"
              pointerColor="darkBlue"
            />
          ))}
        </SkillsListContainer>
        <Separator color="blue" separatorCustomStyle="my-10" />
      </Container>
      <Container bgColor="white">
        <PointerWithText
          fontType="subheader"
          textColor="blue"
          text={"SIDE SKILLS"}
          pointerColor="custom"
          pointerCustomStyle="bg-blue-400"
          textCustomStyle=""
        />
        <Typography
          fontType="subheader"
          textColor="blue"
          text="Back-end"
          textCustomStyle="mt-10"
        />
        <SkillsListContainer>
          {backendSkills.map((skill, index) => (
            <PointerWithText
              key={index}
              text={skill}
              pointerSize="10px"
              textColor="blue"
              fontType="body"
              pointerColor="custom"
              pointerCustomStyle="bg-blue-400"
            />
          ))}
        </SkillsListContainer>
        <Separator color={"custom"} separatorCustomStyle="bg-blue-400 my-10" />
      </Container>
      <Container bgColor="white">
        <PointerWithText
          fontType="subheader"
          textColor="blue"
          text={"OTHER EXPERIENCE"}
          pointerColor="custom"
          pointerCustomStyle="bg-blue-200"
          textCustomStyle=""
        />
        <SkillsListContainer>
          {otherExperience.map((skill, index) => (
            <PointerWithText
              key={index}
              text={skill}
              pointerSize="10px"
              textColor="blue"
              fontType="body"
              pointerColor="custom"
              pointerCustomStyle="bg-blue-200"
            />
          ))}
        </SkillsListContainer>
      </Container>
    </SectionsContext>
  );
}

export default App;
