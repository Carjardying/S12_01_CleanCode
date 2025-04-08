function sumOfNumber(array) {
	let sumResult = 0;
	array.forEach((element) => {
        if (typeof (element) === "number") {
          sumResult += element;
        }
        else {
            return "Erreur: Vous devez passer un tableau de nombres";
          }
      });
      return sumResult;
}


console.log(sumOfNumber([1, 2, 3, 4])); // Devrait retourner 10
console.log(sumOfNumber([1, 2])); // Devrait retourner 3
console.log(sumOfNumber([0])); // Devrait retourner 0
console.log(sumOfNumber([1, 0])); // Devrait retourner 1


console.log(sumOfNumber([1, "Haha"])); // Devrait retourner 1

// NE FONCTIONNENT PAS
console.log(sumOfNumber()); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(sumOfNumber("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
