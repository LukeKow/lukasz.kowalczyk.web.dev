import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { Typography } from "../shared/typography/Typography";
import { TopBar } from "../topBar/TopBar";
import { Card } from "./components/card/Card";

import type { CardProps } from "./components/card/CardTypes";

import car from "../../assets/images/car.jpg";
import documentsFlow from "../../assets/images/documents-flow.jpg";
import hospitalPacients from "../../assets/images/hospital-patients.jpg";
import mentalHealth from "../../assets/images/mental-health.jpg";

const projects: CardProps[] = [
  {
    projectTitle: "Platforma do sprzedaży samochodów",
    projectDesc:
      "Projekt rozwijany dla klienta z Niemiec. W skład programowynch finkcjonalności wchodziły m.in.: pobieranie i wyświetlanie danych, wyszukiwanie, filtrowanie przy użyciu szeregu różnych filtrów i sortowanie danych.",
    color: "pink",
    role: "React fron-end developer",
    imgSrc: car,
  },
  {
    projectTitle: "Projekt wspierający obieg dokumentów",
    projectDesc:
      "Projekt prowadzony dla jednoski rządowej w UK, umożliwiający przegląd, recenzowanie, akceptowanie bądź odrzucenie dokumentu, tworzenie, usuwanie i przechowywanie/archiwizację.",
    color: "bnw",
    role: "Full stack developer with React, .NET & SharePoint",
    imgSrc: documentsFlow,
  },
  {
    projectTitle: "Project wspierający dobrostan",
    projectDesc:
      "Aplikacja webowa wspierająca użytkowników w dbaniu o zdrowie psychiczne i emocjonalne poprzez dostęp do nagrań wideo, podkastów, a także poprzez kontakt ze specjalistami z różnych dziedzin przy użyciu czatu lub wideo rozmowy.",
    color: "blue",
    role: "React front-end developer",
    imgSrc: mentalHealth,
  },
  {
    projectTitle: "Aplikacja wspierająca pacjentów",
    projectDesc:
      "Aplikacja mobilna pisana dla jednego z Amerykańskich szpitali. Celem projektu było wsparcie pacjentów w przygotowaniu się do operacji, a także w powrocie do zdrowia po operacji.",
    color: "pink",
    role: "Front-end React developer & Mobile React Native developer",
    imgSrc: hospitalPacients,
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
            text="PROJECTS"
            fontType="subheader"
            textColor="blue"
          />
          <Typography
            textColor="blue"
            fontType="body"
            text="Niektóre projekty, w których brałem udział:"
          />
        </div>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </>
  );
};
