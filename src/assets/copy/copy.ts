const fun: FunContextTheme = {
  copy: {
    jobTitle: "Pangular hunter",
    aboutMe: `Od 7 lat poluję na Pangulary. Przez lata czajenia się w krzakach zdobyłem niemałe doświadczenie i mnóstwo unikatowych dropów (nooo w krzakach były...). Chociaż straciłem lewego kciuka i prawą stopę świetnie sobie radzę, mam wyjątkowe skillzy i nieprzerwanie expię. Ostatnio wbiłem nowy level i już nie tracę całego HP po zjedzeniu oscypka od amerykanina z nad Bałtyku, wurszty ze słoika dają mi +5 do odporności na nieświeży oddech Pangulara, a suchary +10 do wytrzymałości.`,
  },
  theme: {
    mainPointer: "text-orange-600",
    sidePointer: "text-orange-400",
    otherPointer: "text-orange-200",
    separatorMain: "bg-orange-600",
    separatorSide: "bg-orange-400",
    bg: "bg-orange-100",
    bgHome: "bg-orange-600",
    text: "text-orange-900",
  },
};

const standard: FunContextTheme = {
  copy: {
    jobTitle: "Web Developer",
    aboutMe:
      "Obecnie rozwijam tę stronkę ;) Im więcej w niej robię tym więcej widzę do dodania/poprawienia. Jestem programistą z 7 letnim doświadczeniem. Pracowałem w zespołach polskich oraz mieszanych współpracując z kolegami i koleżankami ze Szwajcarii, USA, UK czy Kanady. Do tej pory pracowałem głównie w React, ale używałem również VUE, Angulara, .NET i Node.js, a wolnych chwilach lubię poprogramować we Flutterze. Interesuję się designem (design tej strony jest w całości zrobiony przeze mnie), fotografią, psychologią, rozwojem osobistym i coachingiem. Uważam siebie za osobę kreatywną z poczuciem humoru. Lubię szukać rozwiązań problemów i ulepszać obecne (rozwiązania, nie problemy ;) ).",
  },
  theme: {
    mainPointer: "text-blue-700",
    sidePointer: "text-blue-400",
    otherPointer: "text-blue-200",
    separatorMain: "bg-blue-700",
    separatorSide: "bg-blue-400",
    bg: "bg-blue-100",
    bgHome: "bg-blue-700",
    text: "tex-blue-900",
  },
};

export const getCopy = (havingFun: boolean) => (havingFun ? fun : standard);

type FunContextTheme = {
  copy: Copy;
  theme: Theme;
};

type Copy = {
  jobTitle: string;
  aboutMe: string;
};

type Theme = {
  mainPointer: React.HTMLAttributes<HTMLElement>["className"];
  sidePointer: React.HTMLAttributes<HTMLElement>["className"];
  otherPointer: React.HTMLAttributes<HTMLElement>["className"];
  separatorMain: React.HTMLAttributes<HTMLElement>["className"];
  separatorSide: React.HTMLAttributes<HTMLElement>["className"];
  bg: React.HTMLAttributes<HTMLElement>["className"];
  bgHome: React.HTMLAttributes<HTMLElement>["className"];
  text: React.HTMLAttributes<HTMLElement>["className"];
};
