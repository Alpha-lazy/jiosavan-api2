import { Endpoints } from '../../../../common/constants/index.js';
import { useFetch } from '../../../../common/helpers/index.js';
import { createSongPayload } from '../../../songs/helpers/index.js';
import { GetSongLyricsUseCase } from '../../../songs/use-cases/index.js';
import { HTTPException } from 'hono/http-exception';
export class GetSongByIdUseCase {
    getSongLyricsUseCase;
    constructor() {
        this.getSongLyricsUseCase = new GetSongLyricsUseCase();
    }
    async execute({ songIds, includeLyrics }) {
        const { data } = await useFetch({
            endpoint: Endpoints.songs.id,
            params: {
                pids: songIds
            }
        });
        if (!data.songs?.length)
            throw new HTTPException(404, { message: 'song not found' });
        const songs = data.songs.map((song) => createSongPayload(song));
        if (includeLyrics) {
            await Promise.all(songs.map(async (song) => {
                song.lyrics = await this.getSongLyricsUseCase.execute(song.id);
            }));
        }
        return songs;
    }
}
