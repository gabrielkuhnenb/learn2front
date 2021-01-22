const nome = "pipa";
const concatenacao = 'hello ' + nome + '!';

//para template, tem que usar símbolo da crase, considera quebras de linha, tabs, etc
const template = ` 

    hello
        ${nome}!
            .
                .
                    .`;

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

//função, vai ser explicado depois
const up = texto => texto.toUpperCase();

console.log(`ei... ${up('pipanelson!!!')}`);
console.log(`${up(template)}`);