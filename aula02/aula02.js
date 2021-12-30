const http = require('http');//varivel servidor

http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{
        'Content-Type':'text/plain'
    });//Parte do cabeçalho parametros(n_erro,)
    resposta.write('CFB cursos\nCurso de Node.js');//Mostra na tela
    resposta.end();//declara o fim da chamada
}).listen(1337);//porta do servidor