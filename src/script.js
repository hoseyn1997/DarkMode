let mainHMTL = document.getElementById("mainHTML");

if (localStorage.getItem("theme") === "dark") mainHMTL.classList.add("dark");
if (localStorage.getItem("theme") === "light")
  mainHMTL.classList.remove("dark");

function enableDarkLight() {
  let darkmodeTrigger = document.getElementById("darkmodeTrigger");
  let lightmodeTrigger = document.getElementById("lightmodeTrigger");
  let darkLightButton = document.getElementById("darkLightButton");

  if (mainHMTL.classList.contains("dark")) {
    mainHMTL.classList.remove("dark");
    darkmodeTrigger.classList.remove("translate-x-52", "text-gray-300");
    lightmodeTrigger.classList.remove("-translate-x-52");
    darkLightButton.classList.add("bg-white");
    darkLightButton.classList.remove("bg-slate-700");
    localStorage.setItem("theme", "light");
  } else {
    mainHMTL.classList.add("dark");
    darkmodeTrigger.classList.add("translate-x-52", "text-gray-300");
    lightmodeTrigger.classList.add("-translate-x-52");
    darkLightButton.classList.remove("bg-white");
    darkLightButton.classList.add("bg-slate-700");
    localStorage.setItem("theme", "dark");
  }
}

function enableTestDarkLight() {
  let mainHTML = document.getElementById("mainHTMLTestPage");
  let stylingButton = document.getElementById("testButtonTrigger");
  if (mainHTML.classList.contains("dark")) {
    mainHTML.classList.remove("dark");
    stylingButton.innerText = "dark";
  } else {
    mainHTML.classList.add("dark");
    stylingButton.innerText = "light";
  }
}
