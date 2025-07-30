const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// 2. Seleziono il contenitore dove andranno stampate le card
const container = document.getElementById("team-container");

// 3. Stampo le card iniziali
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  container.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 text-center">
        <img src="${member.img}" class="card-img-top" alt="${member.name}">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.role}</p>
          <p class="card-text"><small>${member.email}</small></p>
        </div>
      </div>
    </div>
  `;
}

// 4. Aggiungo un nuovo membro al submit del form
const form = document.getElementById("add-member-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // blocca il comportamento di invio classico

  // prendo i valori dai campi input
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;

  // creo un nuovo oggetto membro
  const newMember = {
    name: "Ugo Fantozzi",
    role: "ragioniere subalterno",
    email: "mariepina@maledetti.com" ,
    img: "img/1642750313-fantozzi.jpg" // immagine fissa per semplicità
  };

  // aggiungo all’array
  teamMembers.push(newMember);

  // stampo la nuova card nella pagina
  container.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 text-center">
        <img src="${newMember.img}" class="card-img-top" alt="${newMember.name}">
        <div class="card-body">
          <h5 class="card-title">${newMember.name}</h5>
          <p class="card-text">${newMember.role}</p>
          <p class="card-text"><small>${newMember.email}</small></p>
        </div>
      </div>
    </div>
  `;

  // svuoto i campi del form
  form.reset();
});