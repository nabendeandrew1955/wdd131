let day = new Date();
document.getElementById("year").innerHTML = `&copy; ${day.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `lastmodification: ${document.lastModified}`;



 const hamButton = document.querySelector('#menu');
 const navigation = document.querySelector('.navigation');

 hamButton.addEventListener('click', () => {
     navigation.classList.toggle('open');
     hamButton.classList.toggle('open');
 });


 function toggleActive(Element) {

 }

const machines = [
    {
        machineName: "500 KVA Generator",
        kind: "heavy",
        manufactured: "2024, August, 7",
        rank: 11,
        imageUrl:
            "images/generator.webp"

    },
    {
        machineName: "Three Pharse Motor",
        kind: "heavy",
        manufactured: "2025, May, 21",
        rank: 13,
        imageUrl:
            "images/three-pharse-induction-motor.webp"
    },
    {
        machineName: "Industrial Inverter",
        kind: "heavy",
        manufactured: "2015, June, 7",
        rank: 14,
        imageUrl:
            "images/industrial-inverter.webp"
    },
    {
        machineName: "Consulting Services",
        kind: "Services",
        manufactured: "2020, May, 2",
        rank: 2,
        imageUrl:
            "images/consulting.webp"
    },
    {
        machineName: "Electrical Instolation Services",
        kind: "Services",
        manufactured: "2025, November, 19",
        rank: 2,
        imageUrl:
            "images/electrical-technician.webp"
    },
    {
        machineName: "After Sale  Service Maintences",
        kind: "Services",
        manufactured: "2024, January, 10",
        rank: 2,
        imageUrl:
            "images/electronics-technician.webp"
    },
    {
        machineName: "SoftWare Development Services",
        kind: "Services",
        manufactured: "2020, December, 2",
        rank: 2,
        imageUrl:
            "images/work.webp"
    },
    {
        machineName: "Air Conditioners",
        kind: "Light Power",
        manufactured: "2023, November, 12",
        rank: 6,
        imageUrl:
            "images/air-conditioners.webp"
    },
    {
        machineName: "Printers",
        kind: "Light Power",
        manufactured: "2023, March, 10-12",
        rank: 5,
        imageUrl:
            "images/printers.webp"
    },
    {
        machineName: "Projectors",
        kind: "Light Power",
        manufactured: "2025, August, 24-25",
        rank: 4,
        imageUrl:
            "images/projectors.webp"
    },

    {
        machineName: "Computers",
        kind: "Light Power",
        manufactured: "2025, May, 18",
        rank: 3,
        imageUrl:
            "images/Computers.webp"
    },


    // Add more temple objects here...
];

const album = document.querySelector(".machine");
const pageTitle = document.querySelector("main h2");


function displayMachines(filteredMachines) {

    album.innerHTML = "";


    filteredMachines.forEach(machine => {
        const card = document.createElement("figure");

        card.innerHTML = `<h3>${machine.machineName}</h3>
        <p><strong>Kind:</strong> ${machine.kind}</p>
        <p><strong>Manufactured:</strong> ${machine.manufactured}</p>
        <p><strong>Rank:</strong> ${machine.rank.toLocaleString()}</p>
        <img src="${machine.imageUrl}" alt="${machine.machineName} Machine" loading="lazy">`;

        album.appendChild(card);
    });
}


document.querySelectorAll("nab a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.textContent;
        pageTitle.textContent = filter;

        let filteredList = [];

        if (filter === "ALL") {
            filteredList = machines;
        } else if (filter === "Old Equipment") {

            filteredList = machines.filter(t => new Date(t.manufactured).getFullYear() < 2024);
        } else if (filter === "New Equipment") {

            filteredList = machines.filter(t => new Date(t.manufactured).getFullYear() > 2024);
        } else if (filter === "Heavy Equipment") {

            filteredList = machines.filter(t => t.rank > 10);
        } else if (filter === "Light Equipment") {

            filteredList = machines.filter(t => t.rank < 9);
        } else if (filter === "Services") {
            filteredList = machines.filter(t => t.rank == 2);
        }
        displayMachines(filteredList);
    });
});

/*****************************localstorage*********/

const todayDisplay = document.querySelector('.today');
const visitDisplay = document.querySelector('.visits');

// Get the stored value into local store
let numVisits = Number(window.localStorage.getItem('visits-ls'));

// Determine if this is the first visit or display number of visits

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
}
else {
    visitDisplay.textContent = `THIS IS YOUR FIRST VISIT`;
}
// iNCREMENT THE NUMBER OF VISITS
numVisits++;
// Store the new number of visits
localStorage.setItem('visits-ls', numVisits);

