
// alert("Berechnung:");
const button = document.getElementById("berechnenBtn");
const distanzFeld = document.getElementById("distanz");
const ausgabe = document.getElementById("ausgabe");
const personenAutoFeld = document.getElementById("personenAuto");
const xArray = [ ];
const yArray = [ ];

// CO2-Faktor Auto (kg pro km)
const faktorAuto = 0.104;
const faktorBus = 0.031;
const faktorFahrrad = 0.021;
const faktorFuss = 0.000;
const faktorFlugzeug = 0.380;

const meme = document.getElementById("memeBild");
const autoBox = document.getElementById("Auto");
const autoOptionen = document.getElementById("autoOptionen");

// Auto-Optionen ein/ausblenden
autoBox.addEventListener("change", () => {
  if (autoBox.checked) {
    autoOptionen.style.display = "block";
  } else {
    autoOptionen.style.display = "none";
  }
});

// Reaktion auf Button-Klick
button.addEventListener("click", () => {

  document.getElementById("co2Auto").textContent = "-";
  document.getElementById("co2Bus").textContent = "-";
  document.getElementById("co2Fahrrad").textContent = "-";
  document.getElementById("co2Fuss").textContent = "-";
  document.getElementById("co2Flugzeug").textContent = "-";

  xArray.length = 0;
  yArray.length = 0;
  xArray.length = 0;
  yArray.length = 0;

  // Distanz holen
  const distanz = Number(distanzFeld.value);

  // Ausgabe leeren
  ausgabe.innerHTML= ""; 
        
  if (document.getElementById("Auto").checked) {
    const personenAuto = Number(personenAutoFeld.value);

    if (personenAuto === 0) {
      alert("Diese Website unterstützt noch kein teleportiertes Fahren - kommen Sie 2036 wieder!");
        return;
      }
    
    if (personenAuto > 7) {
      alert("Bruder dein Auto ist voll!?");
          return;
    }

    const co2Auto = (distanz * faktorAuto) / personenAuto;
    document.getElementById("co2Auto").textContent =
      co2Auto.toFixed(2);
      xArray.push("🚗 Auto"); 
      yArray.push(co2Auto);
    }

  if (document.getElementById("Bus").checked) {
    const co2Bus = distanz * faktorBus;
    document.getElementById("co2Bus").textContent =
      co2Bus.toFixed(2);
      xArray.push("🚌 Bus"); 
      yArray.push(co2Bus);
    }

  if (document.getElementById("Fahrrad").checked) {
    const co2Fahrrad = distanz * faktorFahrrad;
    document.getElementById("co2Fahrrad").textContent =
      co2Fahrrad.toFixed(2);
      xArray.push("🚲 Fahrrad"); 
      yArray.push(co2Fahrrad);
    }

  if (document.getElementById("zuFuss").checked) {
    const co2Fuss = distanz * faktorFuss;
    document.getElementById("co2Fuss").textContent =
      co2Fuss.toFixed(2);
      xArray.push("🚶 zu Fuß"); 
      yArray.push(co2Fuss);
    }

  if (document.getElementById("Flugzeug").checked) {
    const co2Flugzeug = distanz * faktorFlugzeug;
    document.getElementById("co2Flugzeug").textContent =
      co2Flugzeug.toFixed(2);
      xArray.push("✈️ Flugzeug"); 
      yArray.push(co2Flugzeug);
    }
          
  const data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "v",
    marker: { color: "rgb(0,130,60)" }  
  }];

  // Diagramm annzeigen
  const layout = {
    title: "Vergleich der Verkehrsmittel",
    yaxis: { title: "kg CO₂" }
  };
  
  if (xArray.length > 0) {
    Plotly.newPlot("myPlot", data, layout);
    document.getElementById("myPlot").style.display = "block";
  }; 

  // Meme anzeigen (Popup)
  if (document.getElementById("Flugzeug").checked) {
    meme.style.display = "block";
    meme.style.transform = "translateX(-50%) scale(1)";
    
    // Nach 3 Sekunden wieder ausblenden
    setTimeout(() => {
      meme.style.transform = "translateX(-50%) scale(0)";
    }, 3000);

  } else {
    meme.style.display = "none";
  }


});












