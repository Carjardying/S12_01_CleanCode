

function sumOfNumber(arrayToSum) {
  let sumResult = 0;

  if (arrayToSum instanceof Array) {
    arrayToSum.forEach((element) => {
      if (typeof (element) === "number") {
        sumResult += element;
      }
    });
  } else {
    return "Erreur: Vous devez passer un tableau de nombres";
  }

  return sumResult;
}

// autre MEILLEURE  MAis pas très claire

// function sumOfNumber(array) {
//     try {
//         let sum = 0;
//         array.forEach(element => {
//             if (typeof(element) === "number") {
//                 sum += element;
//             }
//         });
//         return sum;
//     }
//     catch (error) {
//         return "Erreur: Vous devez passer un tableau de nombres";
//     }
// }

console.log(sumOfNumber([1, 2, 3, 4])); // Devrait retourner 10
console.log(sumOfNumber([1, 2])); // Devrait retourner 3
console.log(sumOfNumber([0])); // Devrait retourner 0
console.log(sumOfNumber([1, 0])) // Devrait retourner 1


console.log(sumOfNumber([1, "Haha"])); // Devrait retourner 1
console.log(sumOfNumber()); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(sumOfNumber("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"

