function createGames(player1, hour, player2) {
  return `
    <li>
      <img src="./icones/icon-${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./icones/icon-${player2}.svg" alt="bandeira do ${player2}">
    </li>`;
}

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>`;
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./icones/logo-titulo.svg" alt="logo titulo">
  </header>
  <main id="cards">
    ${createCard("20/11", "Domingo", createGames("qatar", "13:00", "ecuador"))}
    ${createCard(
      "21/11",
      "Segunda",
      createGames("england", "10:00", "iran") +
        createGames("senegal", "13:00", "netherlands") +
        createGames("united-states", "16:00", "wales")
    )}
    ${createCard(
      "22/11",
      "Terça",
      createGames("argentina", "07:00", "saudi-arabia") +
        createGames("mexico", "13:00", "poland") +
        createGames("denmark", "10:00", "tunisia") +
        createGames("france", "16:00", "australia")
    )}
  </main>`;
