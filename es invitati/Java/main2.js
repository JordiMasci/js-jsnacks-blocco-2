const nomi = ["pippo", "paperino", "pluto", "topolino"];

const cognomi = ["remo", "mentro", "chiuso", "papi"];

const fintiInvitati = [];

const numeroFintiInvitati = parseInt(
  prompt("Quanti finiti invitati vuoi generare?")
);

for (let i = 0; i < numeroFintiInvitati; i++) {
  const randomNameIndex = Math.floor(Math.random() * nomi.length);

  const randomName = nomi[randomNameIndex];

  const randomSurnameIndex = Math.floor(Math.random() * cognomi.length);

  const randomSurname = cognomi[randomSurnameIndex];

  const fakeGuest = randomName + " " + randomSurname;

  fintiInvitati.push(fakeGuest);
}

console.table(fintiInvitati);
