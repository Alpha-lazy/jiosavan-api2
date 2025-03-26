import { Endpoints } from '../../../../common/constants/index.js';
import { useFetch } from '../../../../common/helpers/index.js';
import { createSongLyricsPayload } from '../../../songs/helpers/index.js';
import { HTTPException } from 'hono/http-exception';
export class GetSongLyricsUseCase {
    constructor() { }
    async execute(songId) {
        const { data } = await useFetch({
            endpoint: Endpoints.songs.lyrics,
            params: {
                lyrics_id: songId
            }
        });
        if (!data.lyrics)
            throw new HTTPException(404, { message: 'lyrics not found' });
        return createSongLyricsPayload(data);
    }
}
