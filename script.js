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

// 2. SelezionO il contenitore dove andranno le card
const container = document.getElementById("team-container");

// 3. Stampa iniziale delle card
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

