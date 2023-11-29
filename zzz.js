//Traccia1
/*
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  saluta: function() {
console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni`);
  }
};
persona.saluta(); 
*/

//Traccia2
/*
let agenda = {
  contatti: [
    { nome: "Mario", telefono: "3896396365" },
    { nome: "Giovanni", telefono: "3896396360" },
    { nome: "Paolo", telefono: "3896396265" },
  ],
};
while (true) {
  let scelta = prompt(
    "Cosa vuoi fare? \n\n1. Mostra tutti i contatti \n\n2. Mostra un sinolo contatto \n\n3. Elimina un contatto \n\n4. Aggiungi un nuovo contatto \n\n 5. Modifica un contatto"
  );

  switch (scelta) {
    case "1":
      mostraContatti();
      break;

    case "2":
      let nomeRichiesto = prompt("Inserisci il nome del contatto da cercare");
      mostraUnSoloContatto(nomeRichiesto);
      break;

    case "3":
      let nomeDaEliminare = prompt(
        "Inserisci il nome del contatto da eliminare"
      );
      EliminaContatto(nomeDaEliminare);
      break;

    case "4":
      let nome = prompt("Inserisci il nome del contatto");
      let telefono = prompt("Inserisci il telefono del contatto");
      aggiungiContatto(nome, telefono);
      break;

    case "5":
      let nomeDaModificare = prompt(
        "Inserisci il nome del contatto da modificare");
      let nuovoTelefono = prompt("Inserisci il nuovo numero di telefono del contatto");
      modificaContatto(nomeDaModificare, nuovoTelefono);
      break;

    default:
      break;
  }
}

function mostraContatti() {
  let contatti = agenda.contatti;
  let output = "";
  for (let i = 0; i < contatti.length; i++) {
    output += `Nome: ${contatti[i].nome} - Telefono: ${contatti[i].telefono}\n`;
  }
  alert(output);
}

function mostraUnSoloContatto(nome) {
  let contatti = agenda.contatti;
  let contattoCercato = contatti.find((contatto) => contatto.nome === nome);
  if (contattoCercato) {
    alert(
      `Nome: ${contattoCercato.nome} - Telefono: ${contattoCercato.telefono}`
    );
  } else {
    alert("Contatto non trovato");
  }
}

function EliminaContatto(nome) {
  let contatti = agenda.contatti;
  for (let i = 0; i < contatti.length; i++) {
    if (contatti[i].nome === nome) {
      agenda.contatti.splice(i, 1);
      alert(`Contatto ${nome} eliminato con successo`);
      return;
    }
  }
  alert("Contatto non trovato");
}

function aggiungiContatto(nome, telefono) {
  agenda.contatti.push({ nome: nome, telefono: telefono });
  alert(`Contatto ${nome} aggiunto con successo`);
}

function modificaContatto(nome, telefono) {
  let contatti = agenda.contatti;
  for (let i = 0; i < contatti.length; i++) {
    if (contatti[i].nome === nome) {
      contatti[i].telefono = telefono;
      return;
    }
  }
  alert("Contatto non trovato");
}


*/
function cambiaColore() {
  let elementi = document.getElementsByClassName("ciao");
  for (let i = 0; i < elementi.length; i++) {
    let colore = "#" + Math.floor(Math.random() * 16777215).toString(16);
    elementi[i].style.color = colore;
  }
}

function grasetto() {
  let paragrafi = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafi.length; i++) {
    if (paragrafi[i].style.fontWeight === "900") {
      paragrafi[i].style.fontWeight = "100";
    } else {
      paragrafi[i].style.fontWeight = "900";
    }
  }
}

function sparizione() {
  let paragrafi = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafi.length; i++) {
    if (paragrafi[i].style.display === "none") {
      paragrafi[i].style.display = "block";
    } else {
      paragrafi[i].style.display = "none";
    }
  }
}

document.getElementById("submit").addEventListener("click", function () {
  let titolo = document.getElementById("input").value;
  let textarea = document.getElementById("textarea").value;

  if (titolo.trim() !== "" && textarea.trim() !== "") {
    InserisciValore();
  } else {
    alert("Inserisci un titolo e un testo");
  }
});

InserisciValore = function () {
  let nuovoDiv = document.createElement("div");
  nuovoDiv.style.cssText =
    "  width: 50vw;position: relative; top: 100px; ; height: 254px; margin: 0 auto; ;color: white; border-radius: 28px; z-index: 1;display:flex;align-items:center;justify-content:center;font-family:didot;font-size:20px; margin-bottom:50px;background: linear-gradient(#2121211f, #2121211c) padding-box,padding-box,linear-gradient(125deg, transparent 35%,#a70101c5, #000000) border-box ;animation: gradient 5s ease infinite;  background-size: 200% 100%; box-sizing: border-box; border: 2px solid transparent;padding: 32px 0px;font-size: 19px;font-family: inherit;color: white;display: flex;flex-direction: column;gap: 20px;box-sizing: border-box;border-radius: 16px;background-size: 200% 100%;animation: gradient 5s ease infinite;margin-top: 50px; border: 1px solid rgb(0, 0, 0 ); ";
  let titolo = document.getElementById("input").value;
  let textarea = document.getElementById("textarea").value;
  let date = new Date();
  let formattedDate = "Publicato il: " + date.toLocaleDateString();
  nuovoDiv.innerHTML = titolo + "<br>" + textarea + "<br>" + formattedDate;
  document.body.appendChild(nuovoDiv);
};
