const http = require('http');//require('http') chama o protocolo http
const porta = 3000;//porta que ficara o servidor
const host = '127.0.0.1';//local que ele ficara situado #127.0.0.1 == localhost
const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});//tipo de retorno, nesse caso o retorno é html
    if(req.url=='/'){
        res.write('<h1>Seja Bem vindo</h1>');
    }else if(req.url=='/canal'){
        res.write('<h1>CFB cursos</h1>');
    }else if(req.url=='/curso'){
        res.write('<h1>Conheça os cursos do nosso canal</h1>');
    }else if(req.url =='/curso/node'){
        res.write('<h1>Curso de Node</h1>')
    }
    res.end();
})
servidor.listen(porta, host,()=>{console.log('servidor rodando')});
/*
    //Trabalhando com rotas no servidor

    #cada estrutura condicional é uma rota, 
        no primeiro caso, se for para o servidor raiz.
        no segundo caso, se for para o servidor no dir canal.
        caso não for pra nenhum.

    #
*/