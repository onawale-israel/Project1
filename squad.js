

// import data from "./LaLiga_Roster_Cleaned.json" with { type: "json" };


// // ===============================
// // GET HTML ELEMENTS
// // ===============================

// const logoContainer = document.getElementById("squad-logo");
// const playerBody = document.getElementById("player-body");
// const teamTitle = document.getElementById("text2");


// // ===============================
// // LA LIGA TEAMS
// // ===============================

// const teams = [
//     {
//         name: "Barcelona",
//         logo: "images4/barcelona.png"
//     },

//     {
//         name: "Real Madrid",
//         logo: "images4/real-madrid.png"
//     },

//     {
//         name: "Atlético Madrid",
//         logo: "images4/atletico-madrid.png"
//     },

//     {
//         name: "Athletic Club",
//         logo: "images4/athletic-club.png"
//     },

//     {
//         name: "Real Betis",
//         logo: "images4/real-betis.png"
//     },

//     {
//         name: "Villarreal",
//         logo: "images4/villarreal.png"
//     },

//     {
//         name: "Real Sociedad",
//         logo: "images4/real-sociedad.png"
//     },

//     {
//         name: "Sevilla",
//         logo: "images4/sevilla.png"
//     },

//     {
//         name: "Valencia",
//         logo: "images4/valencia.png"
//     },

//     {
//         name: "Celta Vigo",
//         logo: "images4/celta-vigo.png"
//     },

//     {
//         name: "Getafe",
//         logo: "images4/getafe.png"
//     },

//     {
//         name: "Osasuna",
//         logo: "images4/osasuna.png"
//     },

//     {
//         name: "Mallorca",
//         logo: "images4/mallorca.png"
//     },

//     {
//         name: "Girona",
//         logo: "images4/girona.png"
//     },

//     {
//         name: "Rayo Vallecano",
//         logo: "images4/rayo-vallecano.png"
//     },

//     {
//         name: "Espanyol",
//         logo: "images4/espanyol.png"
//     },

//     {
//         name: "Alavés",
//         logo: "images4/alaves.png"
//     },

//     {
//         name: "Levante",
//         logo: "images4/levante.png"
//     },

//     {
//         name: "Elche",
//         logo: "images4/elche.png"
//     },

//     {
//         name: "Real Oviedo",
//         logo: "images4/real-oviedo.png"
//     }
// ];


// // ===============================
// // CREATE TEAM LOGOS
// // ===============================

// teams.forEach((team) => {

//     const logo = document.createElement("img");

//     logo.src = team.logo;

//     logo.alt = team.name;

//     logo.title = team.name;

//     logo.classList.add("team-logo");

//     logo.dataset.team = team.name;

//     logoContainer.appendChild(logo);


//     // When logo is clicked
//     logo.addEventListener("click", () => {

//         displayTeam(team.name);

//         // Remove selected class from all logos
//         document.querySelectorAll(".team-logo").forEach((item) => {
//             item.classList.remove("selected-team");
//         });

//         // Highlight clicked logo
//         logo.classList.add("selected-team");

//     });

// });


// // ===============================
// // DISPLAY TEAM
// // ===============================

// function displayTeam(teamName) {

//     // Change heading
//     teamTitle.textContent = `${teamName} Squad`;


//     // Find players belonging to selected team
//     const selectedPlayers = data.filter((player) => {

//         return player.squad.trim() === teamName;

//     });


//     console.log(teamName);
//     console.log(selectedPlayers);


//     // Clear old players
//     playerBody.innerHTML = "";


//     // If no players found
//     if (selectedPlayers.length === 0) {

//         playerBody.innerHTML = `
//             <tr>
//                 <td colspan="7">
//                     No players found for ${teamName}
//                 </td>
//             </tr>
//         `;

//         return;
//     }


//     // Create player rows
//     selectedPlayers.forEach((player, index) => {

//         const row = document.createElement("tr");

//         row.innerHTML = `

//             <td>${index + 1}.</td>

//             <td>
//                 <div class="table">
//                     <div class="player-avatar">
//                         ${getInitials(player.player)}
//                     </div>

//                     <p>${player.player}</p>
//                 </div>
//             </td>

//             <td>${player.pos}</td>

//             <td>${player.age}</td>

//             <td class="nation">
//                 ${cleanNation(player.nation)}
//             </td>

//             <td>—</td>

//             <td>—</td>

//         `;

//         playerBody.appendChild(row);

//     });

// }


// // ===============================
// // GET PLAYER INITIALS
// // ===============================

// function getInitials(name) {

//     const words = name.trim().split(" ");

//     if (words.length === 1) {
//         return words[0].substring(0, 2).toUpperCase();
//     }

//     return (
//         words[0][0] +
//         words[words.length - 1][0]
//     ).toUpperCase();

// }


// // ===============================
// // CLEAN NATION
// // ===============================

// function cleanNation(nation) {

//     if (!nation) {
//         return "—";
//     }

//     // Example:
//     // "es ESP" → "ESP"

//     const parts = nation.trim().split(" ");

//     return parts[parts.length - 1];

// }


// // ===============================
// // SHOW BARCELONA FIRST
// // ===============================

// displayTeam("Barcelona");

// // Highlight Barcelona
// const firstLogo = document.querySelector(".team-logo");

// if (firstLogo) {
//     firstLogo.classList.add("selected-team");
// }