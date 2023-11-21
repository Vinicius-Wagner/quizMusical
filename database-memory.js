import { randomUUID } from "node:crypto";

export class DatabaseMemory{
    #musicas = new Map();

    create(musica) {
        const musicaId = randomUUID();

        this.#musicas.set(musicaId, musica);
    };

    update(musicaId) {
        this.#musicas.set(musicaId, musica);
    };

    delete(musicaId) {
        this.#musicas.delete(musicaId);
    };

    list() {
        return this.#musicas.values();
    };
}