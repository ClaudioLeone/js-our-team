// MILESTONE 0:
// [X] Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// [X] Stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// [X] Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// [X] Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// [X] Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

const teamArray = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photoDir: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photoDir: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photoDir: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photoDir: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photoDir: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photoDir: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(teamArray);

const list = document.querySelector(".row");
let listElem = "";

for (let i = 0; i < teamArray.length; i++) {
  const currMember = teamArray[i];
  listElem += `
        <div class="col">
            <div class="card">
                <div class="card-body flex flex-dir-col">
                
                <h5 class="card-title mb-0">
                    ${currMember.name}
                    <hr>
                </h5>

                <h6 class="card-subtitle mb-3 text-muted"><i>${currMember.role}</i></h6>

                <img class="mb-3" src="img/${currMember.photoDir}" alt="${currMember.photoDir}">

                <a href="#" class="card-link">Vedi dettagli</a>
                </div>
            </div>
        </div>
    `;
}

list.innerHTML += listElem;
