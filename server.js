import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

// Route Parameter

// const db = new DatabaseMemory()

const db = new DatabasePostgres()

// Request Body

server.post('/videos', async (req, res) => {
    const { title, description, duration } = req.body
    
    await db.create({
        title,
        description,
        duration,
    })
    return res.status(201).send()
})

server.get('/videos', async (req, res) => {
    const search = req.query.search
    const videos = await db.list(search)
    return videos
})
server.put('/videos/:id', async (req, res) => {
    const videoId = req.params.id
    const { title, description, duration } = req.body

    await db.update(videoId, {
        title,
        description,
        duration,
    })

    return res.status(204).send()
    })
server.delete('/videos/:id', async (req, res) => {
    const videoId = req.params.id
    await db.delete(videoId)
    return res.status(204).send()
})


server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
});