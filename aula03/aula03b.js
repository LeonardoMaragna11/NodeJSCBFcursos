const http = require('http');//require('http') chama o protocolo http
const porta = 3000;
const url = require('url')
const host = '127.0.0.1';
const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});//tipo de retorno, nesse caso o retorno é html
    res.write(req.url)
    const parametro =  url.parse(req.url,true).query;
    res.write('<br>'+parametro.nome)
    res.write('<br>'+parametro.curso)
    res.end();
})
servidor.listen(porta, host,()=>{console.log('servidor rodando')});
