//************************
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
// Curso: CTS Analise e Desenvolvimento de Sistemas
// Disciplina: Topicos Avançados de SI - I
// Autor: Marco Antonio dos Santos Nascimento - Data: 25/03/2024
// Descrição: Caminhos imc, notas e dolar
//************************

// Definindo a porta
const PORT = 5678;

// Importando os módulos
const http = require('http');
const url = require('url');


// Criando o servidor
const server = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;


    if (path === '/') {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end('End-Point: INDEX (' / ')');
    } else if (path === '/imc') {
        const peso = parseFloat(query.peso);
        const altura = parseFloat(query.altura);


        if (isNaN(peso) || isNaN(altura)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {
            const imc =  peso / (altura * altura) 
            if (imc < 18.5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Abaixo do peso IMC:${imc}`)
            } else if (imc < 24.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Peso normal IMC:${imc}`)
            } else if (imc < 29.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Excesso de peso IMC:${imc}`)
            } else if (imc < 34.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade classe I IMC:${imc}`)
            } else if (imc < 39.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade classe II IMC:${imc}`)
            } else {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`O besidade classe III IMC:${imc}`)
            }
        }
        // Validação para saber qual rota o usuário está acessando
    } else if (path === "/notas") {
        const notaA1 = parseFloat(query.a1);
        const notaA2 = parseFloat(query.a2);
        if (isNaN(notaA1) || isNaN(notaA2)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {
            const media = (notaA1 + notaA2) / 2
            if (media >= 6) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Aprovado media: ${media}`)
            } else if (media == 5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Recuperação media: ${media}`)
            } else if (media < 5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Reprovado media${media}`)
            }

        }
    } else if (path === "/dolar") {

        const valorDolar = parseFloat(query.dolar);
        const valorReais = parseFloat(query.reais);

        if (isNaN(valorDolar) || isNaN(valorReais)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {

            const convertido = valorReais / valorDolar

            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end(`R$${valorReais.toFixed(2)} por U$${valorDolar.toFixed(2)} é igaul u$${convertido.toFixed(2)}convertido`)
        }

    } else {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end('Erro 404')
    }


});





server.listen(PORT, () => {
    console.log(`\[OK] - Servidor iniciado em http://localhost:${PORT} ...`);
});