import { TopBar } from "./components/topBar/TopBar";

import igIcon from "./assets/icons/Instagram.svg";
import linkedInIcon from "./assets/icons/LinkedIn.svg";
import gmailIcon from "./assets/icons/gmail.svg";
import me from "./assets/images/me.jpeg";
import { Container } from "./components/shared/container/Container";
import { PointerWithText } from "./components/shared/pointerWithText/PointerWithText";
import { Separator } from "./components/shared/separator/Separator";
import { SkillsListContainer } from "./components/shared/skillsListContainer/SkillsListContainer";
import { Typography } from "./components/shared/typography/Typography";

import "./home.css";

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
  return (
    <>
      <TopBar name="Łukasz Kowalczyk" />
      <div
        id="Home"
        className="mb-5 lg:py-20 flex flex-col lg:items-center bg-blue-700"
      >
        <section className="md:bg-white lg:shadow-md lg:max-w-[50%] flex flex-col lg:flex-row mx-2.5 md:mx-5 gap-10 lg:gap-0">
          <div className="w-full shadow-md md:shadow-none lg:w-[50%] lg:max-w-[350px] lg:flex lg:flex-col lg:justify-center">
            <div className="py-5 px-2.5 md:px-5 flex flex-col items-center justify-center gap-5 bg-white w-full">
              <img src={me} className="w-full max-w-[385px]" />
              <div className="flex flex-col justify-center">
                <Typography
                  text="Łukasz Kowalczyk"
                  fontType="subheader"
                  textColor="blue"
                />
                <Typography
                  text="Web Developer"
                  fontType="body"
                  textColor="blue"
                  textCustomStyle="text-center"
                />
              </div>
            </div>
            <div className="flex py-5 px-5 gap-5 bg-blue-100 w-full justify-center [&>a]:rounded-xs [&>a]:p-[5px] [&>a]:hover:bg-white">
              <a href="https://www.instagram.com/lkow.photo/" target="_blank">
                <img src={igIcon} />
              </a>
              <a
                href="https://www.linkedin.com/in/łukasz-kowalczyk-80ab8610b"
                target="_blank"
              >
                <img src={linkedInIcon} />
              </a>
              <a href="mailto:lukasz.kowalczyk.dev@gmail.com">
                <img src={gmailIcon} />
              </a>
            </div>
            <div className="bg-blue-100 pb-5"></div>
          </div>
          <div className="w-full flex flex-col gap-[30px] py-10 px-2.5 md:px-5  lg:w-[50%] lg:max-w-[350px]">
            <div className="flex flex-col gap-2.5">
              <Typography fontType="header" textColor="blue" text="Cześć" />
              <Typography
                fontType="subheader"
                textColor="blue"
                text="Oto kim jestem i co robię"
              />
            </div>
            <Typography
              fontType="body"
              textColor="blue"
              text="Z wykształcenia jestem programistą z 7 letnim doświadczeniem. Z zainteresowań jestem amatorem fotografii, designu, psychologii i coachingu. Lubię szukać rozwiązań prolemów i ulepszać obecne (rozwiązania, nie problemy ;) )."
            />
          </div>
        </section>
      </div>
      <Container bgColor="none">
        <div>
          <PointerWithText
            fontType="subheader"
            textColor="blue"
            text={"GŁÓWNE UMIEJĘTNOŚCI"}
            pointerColor="darkBlue"
            pointerSize="9px"
          />
        </div>
        <div className="flex md:hidden flex-col">
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
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="darkBlue"
              />
            ))}
          </SkillsListContainer>
          <Typography
            fontType="subheader"
            textColor="blue"
            text="Używane biblioteki"
            textCustomStyle="mt-10"
          />
          <SkillsListContainer>
            {librariesUsed.map((library, index) => (
              <PointerWithText
                key={index}
                text={library}
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="darkBlue"
              />
            ))}
          </SkillsListContainer>
          <Separator color="blue" separatorCustomStyle="my-10" />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-y-5">
          <Typography
            fontType="subheader"
            textColor="blue"
            text="Front-end"
            textCustomStyle="mt-10"
          />
          <Typography
            fontType="subheader"
            textColor="blue"
            text="Używane biblioteki"
            textCustomStyle="mt-10"
          />
          <SkillsListContainer>
            {mainSkills.map((mainSkill, index) => (
              <PointerWithText
                key={index}
                text={mainSkill}
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="darkBlue"
              />
            ))}
          </SkillsListContainer>

          <SkillsListContainer>
            {librariesUsed.map((library, index) => (
              <PointerWithText
                key={index}
                text={library}
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="darkBlue"
              />
            ))}
          </SkillsListContainer>
        </div>
        <Separator
          color="darkBlue"
          separatorCustomStyle="hidden md:block my-10 md:w-[25%]"
        />
      </Container>
      <Container bgColor="none">
        <PointerWithText
          fontType="subheader"
          textColor="blue"
          text={"POBOCZNE UMIEJĘTNOŚCI"}
          pointerColor="custom"
          pointerCustomStyle="bg-blue-400"
          pointerSize="9px"
        />
        <div className="flex md:hidden flex-col">
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
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="custom"
                pointerCustomStyle="bg-blue-400"
              />
            ))}
          </SkillsListContainer>
          <Separator
            color={"custom"}
            separatorCustomStyle="bg-blue-400 my-10"
          />
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
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="custom"
                pointerCustomStyle="bg-blue-200"
              />
            ))}
          </SkillsListContainer>
        </div>
        <div className="md:grid hidden grid-cols-2">
          <Typography
            fontType="subheader"
            textColor="blue"
            text="Back-end"
            textCustomStyle="mt-10"
          />
          <Typography
            fontType="subheader"
            textColor="blue"
            text="Pozostałe doświadczenie"
            textCustomStyle="mt-10"
          />
          <SkillsListContainer>
            {backendSkills.map((skill, index) => (
              <PointerWithText
                key={index}
                text={skill}
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="custom"
                pointerCustomStyle="bg-blue-400"
              />
            ))}
          </SkillsListContainer>

          <SkillsListContainer>
            {otherExperience.map((skill, index) => (
              <PointerWithText
                key={index}
                text={skill}
                pointerSize="5px"
                textColor="blue"
                fontType="body"
                pointerColor="custom"
                pointerCustomStyle="bg-blue-400"
              />
            ))}
          </SkillsListContainer>
        </div>
      </Container>
    </>
  );
}

export default App;
