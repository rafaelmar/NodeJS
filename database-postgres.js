import { randomUUID } from 'node:crypto';
import sql from './db.js'

export class DatabasePostgres {

    async list(search) {
        let videos
        if (search) {
        videos = await sql`SELECT * FROM videos WHERE title ILIKE ${'%'+ search + '%'}` // aqui estoy buscando por el titulo si existe el parametro search
        } else {
        videos = await sql`SELECT * FROM videos` // en el caso que no exista el parametro search me devuelve TODOS los videos
        }
        return videos
    }

    async create(video) {
        const videoID = randomUUID()

        // tambien puedo hacer destructuring de video para tener las variables disponibles mas facilmente sin tener que acceder a ellas con video.variable

        // const { title, description, duration } = video

        await sql`INSERT INTO videos (id, title, description, duration) 
        VALUES (${videoID}, ${video.title}, ${video.description}, ${video.duration})`
    }

    async update(id ,video) {
        const { title, description, duration } = video

        await sql`
            UPDATE videos 
            SET title = ${title}, description = ${description}, duration = ${duration} 
            WHERE id = ${id}`
    }
    async update(id, video) {
        const { title, description, duration } = video;
    
        // Usa parámetros vinculados para todo, incluido el id
        await sql`
            UPDATE videos 
            SET title = ${title}, description = ${description}, duration = ${duration} 
            WHERE id = ${id}
        `;
    }

    async delete(id) {
        await sql`
        DELETE FROM videos WHERE id = ${id}`
    }
}