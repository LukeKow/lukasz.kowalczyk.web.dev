import { BottomBar } from "./components/bottomBar/BottomBar";
import { Container } from "./components/shared/container/Container";
import { PointerWithText } from "./components/shared/pointerWithText/PointerWithText";
import { Separator } from "./components/shared/separator/Separator";
import { SkillsListContainer } from "./components/shared/skillsListContainer/SkillsListContainer";
import { Typography } from "./components/shared/typography/Typography";

import { GithubIcon } from "./components/shared/icons/GitHubIcon";
import { InstagramIcon } from "./components/shared/icons/InstagramIcon";
import { LinkedInIcon } from "./components/shared/icons/LinkedInIcon";
import { SendMessageIcon } from "./components/shared/icons/SendMessageIcon";

import me from "./assets/images/me_2.jpg";

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
const otherExperience = ["Flutter", "React Native", "Angular"];

function App() {
  return (
    <>
      <BottomBar color="white" />
      <div
        id="Home"
        className="pb-10 pt-5 lg:py-20 flex flex-col lg:items-center bg-blue-700"
      >
        <section className="md:bg-white lg:shadow-md lg:max-w-[50%] flex flex-col lg:flex-row md:mx-5 gap-10 lg:gap-0">
          <div className="w-full shadow-md md:shadow-none px-2.5 lg:w-[50%] lg:max-w-[350px] lg:flex lg:flex-col lg:justify-center">
            <div className="py-5 px-2.5 md:px-5 flex flex-col items-center justify-center gap-5 bg-white w-full">
              <img src={me} className="w-full max-w-[385px]" />
              <div className="flex flex-col justify-center">
                <Typography text="Łukasz Kowalczyk" fontType="subheader" />
                <Typography
                  text="Web Developer"
                  fontType="body"
                  textCustomStyle="text-center"
                />
              </div>
            </div>
            <div className="flex py-5 px-5 gap-5 bg-blue-100 w-full justify-center [&>a]:rounded-xs [&>a]:p-[5px]">
              <a
                href="https://www.instagram.com/lkow.photo/"
                target="_blank"
                className="hover:shadow-md"
              >
                <InstagramIcon color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/łukasz-kowalczyk-80ab8610b"
                target="_blank"
                className="hover:shadow-md"
              >
                <LinkedInIcon color="white" />
              </a>
              <a
                href="mailto:lukasz.kowalczyk.dev@gmail.com?subject=Chcemy Cię zatrudnić!&body=Zaimponował nam Twój profil programisty, a ponieważ szukamy tak wyjątkowych osób jak Ty, chcemy złożyć Ci ofertę współpracy. ;-)"
                className="hover:shadow-md"
              >
                <SendMessageIcon width="25" height="25" color="white" />
              </a>
              <a
                href="https://github.com/LukeKow"
                target="_blank"
                className="hover:shadow-md"
              >
                <GithubIcon width="25" height="25" color="white" />
              </a>
            </div>
          </div>
          <div className="w-full bg-white flex flex-col gap-[30px] py-10 px-5 md:px-5  lg:w-[50%] lg:max-w-[350px]">
            <div className="flex flex-col gap-2.5">
              <Typography fontType="header" text="Cześć" />
              <Typography
                fontType="subheader"
                text="Oto kim jestem i co robię"
              />
            </div>
            <Typography
              fontType="body"
              text="Z wykształcenia jestem programistą z 7 letnim doświadczeniem. Z zainteresowań amatorem fotografii, designu, psychologii i coachingu. Lubię szukać rozwiązań prolemów i ulepszać obecne (rozwiązania, nie problemy ;) )."
            />
          </div>
        </section>
      </div>
      <Container bgColor="none">
        <div>
          <PointerWithText
            fontType="subheader"
            text={"GŁÓWNE UMIEJĘTNOŚCI"}
            pointerColor="blue"
            pointerSize="9px"
          />
        </div>
        <div className="flex md:hidden flex-col">
          <Typography fontType="subheader" text="Front-end" />
          <SkillsListContainer>
            {mainSkills.map((mainSkill, index) => (
              <PointerWithText
                key={index}
                text={mainSkill}
                pointerSize="5px"
                fontType="body"
                pointerColor="blue"
              />
            ))}
          </SkillsListContainer>
          <Typography fontType="subheader" text="Używane biblioteki" />
          <SkillsListContainer>
            {librariesUsed.map((library, index) => (
              <PointerWithText
                key={index}
                text={library}
                pointerSize="5px"
                fontType="body"
                pointerColor="blue"
              />
            ))}
          </SkillsListContainer>
          <Separator color="blue" separatorCustomStyle="my-10" />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-y-5">
          <Typography
            fontType="subheader"
            text="Front-end"
            textCustomStyle="mt-10"
          />
          <Typography
            fontType="subheader"
            text="Używane biblioteki"
            textCustomStyle="mt-10"
          />
          <SkillsListContainer>
            {mainSkills.map((mainSkill, index) => (
              <PointerWithText
                key={index}
                text={mainSkill}
                pointerSize="5px"
                fontType="body"
                pointerColor="blue"
              />
            ))}
          </SkillsListContainer>

          <SkillsListContainer>
            {librariesUsed.map((library, index) => (
              <PointerWithText
                key={index}
                text={library}
                pointerSize="5px"
                fontType="body"
                pointerColor="blue"
              />
            ))}
          </SkillsListContainer>
        </div>
        <Separator
          color="blue"
          separatorCustomStyle="hidden md:block my-10 md:w-[25%]"
        />
      </Container>
      <Container bgColor="none" className="mb-[80px] md:mb-0 shadow-md">
        <PointerWithText
          fontType="subheader"
          text={"POZOSTAŁE UMIEJĘTNOŚCI"}
          pointerColor="custom"
          pointerCustomStyle="bg-blue-400"
          pointerSize="9px"
        />
        <div className="flex md:hidden flex-col">
          <Typography
            fontType="subheader"
            text="Back-end"
            textCustomStyle="mt-10"
          />
          <SkillsListContainer>
            {backendSkills.map((skill, index) => (
              <PointerWithText
                key={index}
                text={skill}
                pointerSize="5px"
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
            text="Back-end"
            textCustomStyle="mt-10"
          />
          <Typography
            fontType="subheader"
            text="Pozostałe doświadczenie"
            textCustomStyle="mt-10"
          />
          <SkillsListContainer>
            {backendSkills.map((skill, index) => (
              <PointerWithText
                key={index}
                text={skill}
                pointerSize="5px"
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
