const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 6.5;
const avaliacao2 = 8.3;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(4)); // numero de casas decimais

console.log(media.toString());
console.log(media.toString(2)); // muda a base
console.log(typeof media);
console.log(typeof Number);

// alguns cuidados

console.log(7 / 0); // em outras linguagens daria problema, aqui da infinito

// nao tem problema usar strings nas divisoes
console.log("10" / 2);
console.log('10' / 2);

console.log("pipa nelas" * 2); // not a number
console.log((0.1 + 0.7).toFixed(2));

console.log((10.377).toFixed(2));