/*  array = vetor
estrutura unidimensional
agrupa valores de forma linear

a partir do identificador, vc acessa elementos
array js != array java

array js heterogeneo = pode ter numero, string, tudo 
muda de tamanho de forma flexivel

o ideal é ter arrays com tipos de dados homogeneos
*/

const notas = [1.2, 3.4, 5.6, 7.8];
console.log(notas[0], notas[3]); // evitar acessar valores fora do array

notas[4] = 55;
notas[10] = `opa me caguei todo`;
console.log(notas);
notas.push({id: 3}, false, null, 47, `teste`);
console.log(notas);
console.log(notas.length);

console.log(notas.pop());
delete notas[2];
console.log(notas);
console.log(typeof notas);