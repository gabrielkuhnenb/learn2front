let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(isAtivo);
console.log(!isAtivo);
console.log(!!isAtivo);

isAtivo = 0;
console.log(isAtivo);
console.log(!isAtivo);
console.log(!!isAtivo);

/* resolvem para verdadeiro
    inteiros, excluindo o 0;
    um espaço ou texto;
    array mesmo vazio;
    objeto literal;
    infinity;
    resultado da atribuição true;
*/

/* resolvem para falso
    o numero 0
    uma string vazia
    NaN not a number
    null
    undefined
    resultado da atribuição false
*/

console.log((`` || null || 0 || 'pipa'));
console.log(!!(`` || null || 0 || 'pipa')); // usar !! faz com que a operação seja resolvida no contexto de verdadeiros ou falsos

let nome = `carraranelson`;
console.log(nome || "desconhecido");

nome = ``;
console.log(nome || "desconhecido"); // jeito comum de atribuir um valor padrão para variáveis
