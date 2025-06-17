import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { Typography } from "../shared/typography/Typography";
import { TopBar } from "../topBar/TopBar";
import { Card } from "./components/card/Card";

import car from "../../assets/images/car.jpg";
import documentsFlow from "../../assets/images/documents-flow.jpg";
import hospitalPacients from "../../assets/images/hospital-patients.jpg";
import mentalHealth from "../../assets/images/mental-health.jpg";
import type { ProjectDetailsProps } from "./components/Project/ProjectDetailsTypes";

const projects: ProjectDetailsProps[] = [
  {
    title: "Platforma do sprzedaży samochodów",
    description:
      "Projekt rozwijany dla klienta z Niemiec. W skład programowynch funkcjonalności wchodziły m.in.: pobieranie i wyświetlanie danych, wyszukiwanie, filtrowanie przy użyciu szeregu różnych filtrów i sortowanie danych.",
    theme: "pink",
    role: "React front-end developer",
    imgSrc: car,
    tools: ["axios", "storybook", "emotion.js"],
    whatIWasDoing:
      "Pisałem nowe komponenty i wprowadzałem zmiany w już istniejących w oparciu o dostarczony design. Naprawiałem błędy, przeprowadzałem code review",
  },
  {
    title: "Projekt wspierający obieg dokumentów",
    description:
      "Projekt prowadzony dla jednoski rządowej w UK, umożliwiający przegląd, recenzowanie, akceptowanie bądź odrzucenie dokumentu, tworzenie, usuwanie i przechowywanie/archiwizację.",
    theme: "bnw",
    role: "Full stack developer with React, .NET & SharePoint",
    imgSrc: documentsFlow,
    tools: ["Entity Framework", "jest", "axios"],
    whatIWasDoing:
      "Zajmowałem się głównie utrzymaniem istniejących rozwiązań i naprawą błędów. Pisałem również nowe webparty w React dla Sharepointa.",
  },
  {
    title: "Project wspierający dobrostan",
    description:
      "Aplikacja webowa wspierająca użytkowników w dbaniu o zdrowie psychiczne i emocjonalne poprzez dostęp do nagrań wideo, podkastów, a także poprzez kontakt ze specjalistami z różnych dziedzin przy użyciu czatu lub wideo rozmowy.",
    theme: "blue",
    role: "React front-end developer",
    imgSrc: mentalHealth,
    tools: ["axios", "React testing library"],
    whatIWasDoing:
      "Pisałem nowe komponenty w oparciu o design, przeprowadzałem code review oraz pisałem testy jednostkowe.",
  },
  {
    title: "Aplikacja wspierająca pacjentów",
    description:
      "Aplikacja mobilna pisana dla jednego z Amerykańskich szpitali. Celem projektu było wsparcie pacjentów w przygotowaniu się do operacji, a także w powrocie do zdrowia po operacji.",
    theme: "pink",
    role: "React front-end developer & Mobile React Native developer",
    imgSrc: hospitalPacients,
    tools: ["React testing library", "Storybook", "React", "React Native"],
    whatIWasDoing:
      "Pisałem nowe komponenty w oparciu o design, przeprowadzałem code review oraz pisałem testy jednostkowe. Uczyłem się nowych technologii i wdrażałem w mobilną część projektu.",
  },
];

export const Projects = () => {
  return (
    <>
      <TopBar name="Łukasz Kowalczyk" />
      <div className="flex flex-col gap-10 items-center pb-20">
        <div className="px-5 flex flex-col gap-2.5 w-full max-w-[706px] mx-auto">
          <PointerWithText
            pointerColor="blue"
            text="PROJEKTY"
            fontType="subheader"
            textColor="blue"
          />
          <Typography
            textColor="blue"
            fontType="body"
            text="Niektóre projekty, w których brałem udział:"
          />
        </div>
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};
