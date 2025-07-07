const standard: FunContextTheme = {
  copy: {
    jobTitle: "Web Developer",
    aboutMe:
      "<span><p>Obecnie rozwijam tę stronkę i szukam pracy. Im więcej nad nią pracuję tym więcej widzę do dodania czy poprawienia - nie wiem czy kiedyś nadejdzie dzień kiedy stwierdzę, że skończyłem XD</p></br><p>Jestem programistą z siedmio letnim doświadczeniem. Pracowałem w zespołach polskich oraz mieszanych współpracując z kolegami i koleżankami między innymi ze Szwajcarii, USA, UK czy Kanady. Do tej pory pracowałem głównie w React, ale używałem również VUE, Angulara, .NET, React Native i Node.js. Kiedy programowałem z użyciem Javyscript niemal zawsze używaliśmy w projekcie Typescripta. Bardzo chciałbym zapomnieć te, w których nie używaliśmy TS’a... Jakiś czas temu bardzo spodobał mi się Flutter i w wolnych chwilach klepię trochę kodu właśnie we Flutterze.</p></br><p>Interesuję się designem (design tej strony jest w całości zrobiony przeze mnie) - wciągają mnie designerskie niuanse: to jak wszystko ma swój cel, sens i wpływ na użytkownika. Dodatkowo programowanie tego co sam zaprojektowałem daje mi jeszcze więcej frajdy. Chociaż muszę szczerze przyznać, że w trakcie rozwoju projektu trudno jest przypilnować aby jedno i drugie było ze sobą zsynchronizowane - czasami palce po prostu klepią kod, a design czeka na zaktualizowanie... XD</p></br><p>Jestem osobą kreatywną i lubię tworzyć - robię zdjęcia i czasem nawet jakieś wrzucę na Instagrama. Kiedyś miałem się za skostniałego introwertyka ale od jakiegoś czasu brakuje mi interakcji z ludźmi. Zauważyłem, że dużo lepiej pracuje mi się gdy mam częstszy kontakt z zespołem twarzą w twarz.</p></br><p>Jak wspomniałem na początku stronka jest w trakcie rozwoju i mam świadomość pewnych braków (w kodzie i w designie) co obiecuję w miarę upływu czasu uzupełniać.</p></br><p>Aaa, oczywiście serdecznie zapraszam do kontaktu jeśli akurat szukasz developera... ;)</span>",
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

const fun: FunContextTheme = {
  copy: {
    jobTitle: "Pangular hunter",
    aboutMe:
      "<span><p>Obecnie rozwijam tę stronkę i szukam pracy. Im więcej nad nią pracuję tym więcej widzę do dodania czy poprawienia - nie wiem czy kiedyś nadejdzie dzień kiedy stwierdzę, że skończyłem XD</p></br><p>Jestem programistą z siedmio letnim doświadczeniem. Pracowałem w zespołach polskich oraz mieszanych współpracując z kolegami i koleżankami między innymi ze Szwajcarii, USA, UK czy Kanady. Do tej pory pracowałem głównie w React, ale używałem również VUE, Angulara, .NET, React Native i Node.js. Kiedy programowałem z użyciem Javyscript niemal zawsze używaliśmy w projekcie Typescripta. Bardzo chciałbym zapomnieć te, w których nie używaliśmy TS’a... Jakiś czas temu bardzo spodobał mi się Flutter i w wolnych chwilach klepię trochę kodu właśnie we Flutterze.</p></br><p>Interesuję się designem (design tej strony jest w całości zrobiony przeze mnie) - wciągają mnie designerskie niuanse: to jak wszystko ma swój cel, sens i wpływ na użytkownika. Dodatkowo programowanie tego co sam zaprojektowałem daje mi jeszcze więcej frajdy. Chociaż muszę szczerze przyznać, że w trakcie rozwoju projektu trudno jest przypilnować aby jedno i drugie było ze sobą zsynchronizowane - czasami palce po prostu klepią kod, a design czeka na zaktualizowanie... XD</p></br><p>Jestem osobą kreatywną i lubię tworzyć - robię zdjęcia i czasem nawet jakieś wrzucę na Instagrama. Kiedyś miałem się za skostniałego introwertyka ale od jakiegoś czasu brakuje mi interakcji z ludźmi. Zauważyłem, że dużo lepiej pracuje mi się gdy mam częstszy kontakt z zespołem twarzą w twarz.</p></br><p>Jak wspomniałem na początku stronka jest w trakcie rozwoju i mam świadomość pewnych braków (w kodzie i w designie) co obiecuję w miarę upływu czasu uzupełniać ;)</p></br><p> Aaa, oczywiście serdecznie zapraszam do kontaktu jeśli akurat szukasz developera... ;)</span>",
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
