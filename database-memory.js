import { randomUUID } from 'node:crypto';

export class DatabaseMemory {
    #videos = new Map()//llave privada

    // Set viene siendo un array, Map 

    list(search) {
        return Array.from(this.#videos.entries())
        .map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data
            }
        })
        .filter((video) => {
            if (search) {
                return video.title.includes(search)
            }
            return true
        })
    }


    create(video) {
        // UUID - Universally Unique ID
        const videoId = randomUUID()
        this.#videos.set(videoId,video)
    }

    update(id ,video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}