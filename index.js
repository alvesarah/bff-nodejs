// Import fastify
const fastify = require('fastify');

// Habilitar o logger pra ver as requisições chegando
const app = fastify({
  logger: true,
});

app.get('/', (req, reply) => {
  console.log(req)
  return reply.send({
    hello: 'world'
  })
});

app.listen({port: 3000}, () => {
  console.log('Running!')
});