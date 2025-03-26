import { SongModel } from '../../../songs/models/index.js';
import { GetSongByIdUseCase } from '../../../songs/use-cases/index.js';
import { HTTPException } from 'hono/http-exception';
import { beforeAll, describe, expect, it } from 'vitest';
describe('GetSongById', () => {
    let getSongById;
    beforeAll(() => {
        getSongById = new GetSongByIdUseCase();
    });
    it('should return a song by id', async () => {
        const song = await getSongById.execute({ songIds: '3IoDK8qI' });
        expect(() => SongModel.parse(song[0])).not.toThrow();
    });
    it('should return multiple songs by ids', async () => {
        const song = await getSongById.execute({ songIds: '3IoDK8qI,K1P4T0jI' });
        expect(() => SongModel.parse(song[0])).not.toThrow();
    });
    it('should throw 404 error when song is not found', async () => {
        await expect(getSongById.execute({ songIds: 'invalid-id' })).rejects.toThrow(HTTPException);
    });
    it('should return a song by id and include lyrics', async () => {
        const song = await getSongById.execute({ songIds: 'K1P4T0jI', includeLyrics: true });
        expect(() => SongModel.parse(song[0])).not.toThrow();
    });
});
