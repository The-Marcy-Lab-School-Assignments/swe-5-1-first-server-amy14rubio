const http = require('node:http');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const { searchParams } = new URL(req.url, 'http://localhost:8080');
  const quantity = parseInt(searchParams.get('quantity'));

  console.log(method, url, new Date().toISOString());

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello!! :P');
    return;
  }

  if (method === 'GET' && url === '/api/joke') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ setup: 'Do you know how to make a joke?', punchline: "yesn't" }));
    return;
  }

  if (
    (method === 'GET' && url === `/api/rollDie`) ||
    (method === 'GET' &&
      Number.isNaN(quantity) &&
      url == `/api/rollDie?quantity=${searchParams.get('quantity')}`)
  ) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ rolls: [Math.floor(Math.random() * 6) + 1] }));
    return;
  }

  if (method === 'GET' && url === `/api/rollDie?quantity=${quantity}`) {
    const rollsArr = new Array(quantity).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ rolls: rollsArr }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});
