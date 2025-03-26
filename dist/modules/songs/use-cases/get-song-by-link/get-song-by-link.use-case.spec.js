import { SongModel } from '../../../songs/models/index.js';
import { GetSongByLinkUseCase } from '../../../songs/use-cases/index.js';
import { HTTPException } from 'hono/http-exception';
import { beforeAll, describe, expect, it } from 'vitest';
describe('GetSongByLink', () => {
    let getSongByLink;
    beforeAll(() => {
        getSongByLink = new GetSongByLinkUseCase();
    });
    it('should return a song by link', async () => {
        const song = await getSongByLink.execute('OgwhbhtDRwM');
        expect(() => SongModel.parse(song[0])).not.toThrow();
    });
    it('should throw 404 error when song is not found', async () => {
        await expect(getSongByLink.execute('invalid-link')).rejects.toThrow(HTTPException);
    });
});
