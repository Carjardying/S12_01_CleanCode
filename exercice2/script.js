function afficherInfosUsers(nom, age, ville, profession) {
    return `Infos Utilisateur: 
    Nom : ${nom}
    Age : ${age} ans
    Ville : ${ville}
    Profession : ${profession}`;
}
function estMajeure(age) {
    if (age < 18) {
        return "Catégorie : Jeune";
    } else if (age >= 18 && age < 60) {
        return "Catégorie : Adulte";
    } else {
        return "Catégorie : Senior";
    }
}

function statutAbonnement(estAbonne) {
    if (estAbonne == true) {
        return "Statut : Abonné";
    } else {
        return "Statut : Non abonné";
    }
}

/**** Fonction principale ***/

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {   
    let infosUser = afficherInfosUsers(nom, age, ville, profession);
    let verif_abonnement = statutAbonnement(estAbonne);
    let verificationAge = estMajeure(age);

    return `${infosUser}
    ${verif_abonnement}
    ${verificationAge}`;
  }

  /**** APPEL FONCTION ****/
  console.log(genererRapportUtilisateur("Ada", 33, "Lyon", "Dev", true));