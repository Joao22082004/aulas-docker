const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Primeira aplicação com Docker</title>
      </head>
      <body>
        <h1>Minha primeira aplicação Node.js com Docker</h1>
        <p>Essa página está sendo executada dentro de um container Docker.</p>

        <h2>Lista de tecnologias estudadas</h2>
        <ul>
          <li>Node.js</li>
          <li>Docker</li>
          <li>Containers</li>
          <li>GitHub</li>
        </ul>
      </body>
    </html>
  `);
});

servidor.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});