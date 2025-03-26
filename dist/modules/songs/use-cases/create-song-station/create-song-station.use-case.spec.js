import { CreateSongStationUseCase } from '../../../songs/use-cases/index.js';
import { beforeAll, describe, expect, it } from 'vitest';
describe('CreateSongStation', () => {
    let createSongStation;
    beforeAll(() => {
        createSongStation = new CreateSongStationUseCase();
    });
    it('should create a song station', async () => {
        const station = await createSongStation.execute('3IoDK8qI');
        expect(station).toBeDefined();
    });
});
