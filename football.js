import data from './football.json' with {type: 'json'}
const api_url = "v3.football.api-sports.io"
const api_key = "0510653e36f95c868bbe3c8317b8c61b"

const squadteam = data.football.squadteam;
const clubs = data.football.clubs;


// const myHeaders = new Headers();
// myHeaders.append("x-apisports-key", "0510653e36f95c868bbe3c8317b8c61b");

// const requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };

// fetch("https://v3.football.api-sports.io/standings", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));


$(document).ready(() => {

    const tableBody = document.getElementById('table-body');
    const tableRow = document.getElementById('table-row');
    const squadData = document.getElementById('fluid-table');
    const squadLogo = document.getElementById('squad-logo');
    const transfersIn = document.getElementById('transfers-in');
    const transfersOut = document.getElementById('transfers-out');
    const matchday = document.getElementById('matchday');
    let selected = clubs.slice(0, 8);

    setInterval(() => {
        if (tableRow) {
            displayClubs(selected, tableRow);
            displayMatchdayFixtures(matchday, clubFixtures());
        }
    }, 20000);

    if (tableRow) {
        displayClubs(selected, tableRow);
        displayMatchdayFixtures(matchday, clubFixtures());
    }
    else if (tableBody) {
        displayClubs(clubs, tableBody)
    }

    else if (squadLogo && squadData) {
        displaySquadTeams(clubs);
        fullSquadByTeam(clubs);
    }

    else if (transfersIn && transfersOut) {
        displaySquadTeams(clubs);
        displayTransfers();
    }



    //all teams in standings
    function displayClubs(data, html) {
        html.innerHTML = data.map((e, i) => {

            return `
                <tr>
                    <td>${i + 1}</td>

                    <td class="team">
                        <img class="image" src="${e.img}" alt="${e.name}">
                        <span>${e.name}</span>
                    </td>

                    <td>${e.points.MP}</td>
                    <td>${e.points.W}</td>
                    <td>${e.points.D}</td>
                    <td>${e.points.L}</td>
                    <td>${e.points.GF}</td>
                    <td>${e.points.GA}</td>
                    <td>${e.points.GD}</td>
                    <td>${e.points.PTS}</td>
                </tr>
                    `;
        }).join("");

    }

    // display of squad logo 
    function displaySquadTeams(clubs) {

        squadLogo.innerHTML = clubs.map((e, i) => {

            return `
                <button class="squad-button active" >
                    <img class="squad-image" src="${e.img}" id=${e.squadName.replace(" ", "_")}>
                </button>
            `
        }).join("");
    }

    // display the teammplayers in big page
    function fullSquadByTeam(clubs) {

        const btn = document.querySelectorAll('.squad-image');

        function displayPlayers(team) {

            if (!team) return;

            squadData.innerHTML = team.players.map((f, k) => `
            <tr>
                <td>${k + 1}</td>
                <td class="row">
                    <p>${f.name}</p>
                </td>
                <td>${f.pos}</td>
                <td>${f.age}</td>
                <td>${f.country}</td>
                <td>${f.rating}</td>
                <td>${f.marketValue}</td>
            </tr>
        `).join("");
        }

        // Default squad
        const defaultTeam = clubs.find(
            (club) => club.squadName === "Barcelona"
        );

        displayPlayers(defaultTeam);

        // Clicking a logo changes the squad
        btn.forEach((b) => {

            b.addEventListener('click', (j) => {

                const currentClub = clubs.find(
                    (d) => d.squadName.replace(" ", "_") === j.currentTarget.id
                );

                displayPlayers(currentClub);
            });

        });
    }

    //Display of transfers
    function displayTransfers() {
        const btn = document.querySelectorAll('.squad-image');

        function showTransfers(team) {
            const transfers = team.currentWindowTransfers;

            const incoming = transfers.filter(
                (transfer) => transfer.type === "Incoming"
            );

            const outgoing = transfers.filter(
                (transfer) => transfer.type === "Outgoing"
            );

            transfersIn.innerHTML = incoming.map((transfer, i) => `
                <tr>
                    <td>${i + 1}</td>
                    <td>${transfer.player}</td>
                    <td>${transfer.type}</td>
                    <td>${transfer.from}</td>
                    <td>${transfer.to}</td>
                    <td>${transfer.fee}</td>
                    <td>${transfer.date}</td>
                    <td>${transfer.season}</td>
                </tr>
            `).join("");

            transfersOut.innerHTML = outgoing.map((transfer, i) => `
                <tr>
                    <td>${i + 1}</td>
                    <td>${transfer.player}</td>
                    <td>${transfer.type}</td>
                    <td>${transfer.from}</td>
                    <td>${transfer.to}</td>
                    <td>${transfer.fee}</td>
                    <td>${transfer.date}</td>
                    <td>${transfer.season}</td>
                </tr>
            `).join("");
        }

        const defaultTeam = clubs.find(
            (club) => club.squadName === "Barcelona"
        );

        showTransfers(defaultTeam);

        btn.forEach((b) => {
            b.addEventListener('click', (j) => {

                const currentClub = clubs.find(
                    (d) => d.squadName.replace(" ", "_") === j.currentTarget.id
                );

                showTransfers(currentClub);
            });
        });
    }

    function randomized() {
        return Math.floor(Math.random() * clubs.length);
    }

    function clubFixtures() {

        let rand1 = randomized();
        let rand2 = randomized();

        while (rand2 === rand1) {
            rand2 = randomized();
        }

        let c1 = clubs[rand1];
        let c2 = clubs[rand2];

        return {
            c1,
            c2
        }
    }

    function displayMatchdayFixtures(html, data) {
        return html.innerHTML = `<div class="matchdiv">
                                    <h3 class="squad-name">${data.c1.squadName}</h3>
                                    <img class="squad-images" src="${data.c1.img}" alt="${data.c1.squadName}">
                                </div>
                                    <p class="vs">vs</p>
                                <div class="matchdiv">
                                    <h3 class="squad-name">${data.c2.squadName}</h3>
                                    <img class="squad-images" src="${data.c2.img}" alt="${data.c2.squadName}">
                                </div>
                            `;

    };

});


