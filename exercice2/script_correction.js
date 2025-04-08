function verifAge(age, rapportAge) {
  if (age < 18) {
    return "Catégorie : Jeune";
  } else if (age >= 18 && age < 60) {
    return "Catégorie : Adulte";
  } else {
    return "Catégorie : Senior";
  }
  return rapportAge;
}

function verifAbonnement(estAbonne, rapport) {
  if (estAbonne == true) {
    rapport += "Statut : Abonné\\n";
  } else {
    rapport += "Statut : Non abonné\\n";
  }
  return rapport;
}

function afficherRapport(nom, age, ville, profession) {
  return `rapport utilisateur 
    Nom : ${nom}
    Age : ${age}
    Ville : ${ville}
    Profession : ${profession}`;
}
//tout passer en anglais

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  let rapport = afficherRapport(nom, age, ville, profession);
  let abo = verifAbonnement(estAbonne, rapport);
  let rapportAge = verifAge(age, rapport);
  return `${rapport}
    ${abo}
    ${rapportAge}`;
}
console.log(genererRapportUtilisateur("Ada", 33, "Lyon", "Dev", true));
