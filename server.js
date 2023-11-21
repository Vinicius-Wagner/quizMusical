import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

server.post('/musicas', (request, reply) => {
    database.create({
        titulo: 'Star Boy',
        artista: 'The Weeknd',
        genero: 'pop'
    });

    console.log(database.list());

    return reply.status(201).send();
})

server.get('/musicas', () => {
    return "oteste";
})

server.get('/', () => {
    return "olá duda";
})

server.listen({

    port:3333,
})