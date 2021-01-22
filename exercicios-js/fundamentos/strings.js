const frase = "carrarawave pipa bleiners";

console.log(frase.charAt(3));
console.log(frase.charAt(81)); // nao gera erro como em outras linguagens

console.log(frase.charCodeAt(3)); // codigo unicode
console.log(frase.indexOf('r'));

console.log(frase.substring(11));
console.log(frase.substring(0, 11));

console.log("chicken burn ".concat(frase).concat(" salmonela"));
console.log("chicken burn " + frase + " salmonela");

console.log(frase.replace('c', 'k'));

console.log("carrarawave,pipa,bleiners".split(','));
console.log("carrarawave,pipa,bleiners".split('a'));
console.log(frase.split(' '));

console.log('3' + 2); // nesse caso, + da string tem preferencia, concatenacao
console.log('3' - 2); // como - nao faz sentido na string, realiza a operação numerica