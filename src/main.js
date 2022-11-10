function createGames(player1, hour, player2) {
  return `
    <li>
      <img src="/icones/icon-${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="/icones/icon-${player2}.svg" alt="bandeira do ${player2}">
    </li>`;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>`;
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGames("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "Segunda",
    createGames("england", "10:00", "iran") +
      createGames("senegal", "13:00", "netherlands") +
      createGames("united-states", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGames("argentina", "07:00", "saudi-arabia") +
      createGames("denmark", "10:00", "tunisia") +
      createGames("mexico", "13:00", "poland") +
      createGames("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGames("morocco", "07:00", "croatia") +
      createGames("germany", "10:00", "japan") +
      createGames("spain", "13:00", "costa-rica") +
      createGames("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGames("switzerland", "07:00", "cameroon") +
      createGames("uruguay", "10:00", "south-korea") +
      createGames("portugal", "13:00", "ghana") +
      createGames("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGames("wales", "07:00", "iran") +
      createGames("qatar", "10:00", "senegal") +
      createGames("netherlands", "13:00", "ecuador") +
      createGames("england", "16:00", "united-states")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGames("tunisia", "07:00", "australia") +
      createGames("poland", "10:00", "saudi-arabia") +
      createGames("france", "13:00", "denmark") +
      createGames("argentina", "16:00", "mexico")
  );
