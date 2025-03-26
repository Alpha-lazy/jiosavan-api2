import type { IUseCase } from '../../../../common/types/index.js';
import type { LyricsModel } from '../../../songs/models/index.js';
import type { z } from 'zod';
export declare class GetSongLyricsUseCase implements IUseCase<string, z.infer<typeof LyricsModel>> {
    constructor();
    execute(songId: string): Promise<{
        lyrics: string;
        copyright: string;
        snippet: string;
    }>;
}
