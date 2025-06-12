// let m = czat.querySelectorAll("span.xzsf02u");
func = () => {
  let czat = document.getElementById("czat");
  let fullChat = {};
  let spans = czat.querySelectorAll(
    "span.xzsf02u, span.x14ctfv, .xjpr12u.xr9ek0c.x2b8uid",
  );
  let dates = czat.querySelectorAll(".xjpr12u.xr9ek0c.x2b8uid");
  console.log(dates);
  let lastDate = "";
  spans.forEach((s) => {
    if (s.innerText !== "Marika Szymańska") {
      console.log(s.classList);
      if (s.classList.contains("xjpr12u xr9ek0c x2b8uid")) {
        lastDate = s.innerText;
        fullChat.lastDate = [];
      }
      if (
        s.classList.contains("xzsf02u") &&
        !s.classList.contains("x1plvlek")
      ) {
        if (!fullChat[lastDate].includes("Marika: " + s.innerText)) {
          fullChat[lastDate].push("Marika: " + s.innerText);
        }
      } else if (s.classList.contains("x14ctfv")) {
        if (!fullChat[lastDate].includes("Ja: " + s.innerText)) {
          fullChat[lastDate].push("Ja: ", s.innerText);
        }
      }
    }
  });
  czat.scrollBy(0, window.innerHeight);
  czat = document.getElementById("czat");
  spans = czat.querySelectorAll("span.xzsf02u, span.x14ctfv");
  return fullChat;
};
