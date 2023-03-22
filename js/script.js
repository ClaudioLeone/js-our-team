// MILESTONE 0:
// [X] Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// [X] Stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// [X] Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// [] Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// [] Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

const teamArray = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'	    
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamArray);

const list = document.querySelector(".membersList");
let listElem = "";

for (let i = 0; i < teamArray.length; i++) {
    const currMember = teamArray[i];
    listElem += `
        <li style="border: 1px solid black">
            ${currMember.name} &nbsp; ${currMember.role} &nbsp; ${currMember.photo}
        </li>
    `;
}

list.innerHTML += listElem