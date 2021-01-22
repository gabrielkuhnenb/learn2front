/* par de chaves é a maneira literal de declarar um objeto vazio
    pode ir declarando atributos e métodos de maneira dinamica

    objeto = coleção chave-valor

    pode ter objetos aninhados
*/
const produto1 = {};
produto1.nome = `celular pipa johnsons`;
produto1.preco = 1000.00;
produto1[`desconto para challengers`] = 0.5; // evitar atributos com espaços

console.log(produto1);

//isso nao é json!!
const produto2 = {
    nome: `tenis da nike`,
    preco: 100.00,
    //pode ter objetos aninhados
    caracteristicas: {
        cor: `branco`,
        tamanho: 44
    }
}

//json é assim, um formato textual de objeto
'{"nome": "tenis da nike", "preco": 100.00 (...)}'

console.log(produto2);