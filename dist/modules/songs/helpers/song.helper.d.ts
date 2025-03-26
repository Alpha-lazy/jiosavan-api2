import type { LyricsAPIResponseModel, LyricsModel, SongAPIResponseModel, SongModel } from '../../songs/models/index.js';
import type { z } from 'zod';
export declare const createSongPayload: (song: z.infer<typeof SongAPIResponseModel>) => z.infer<typeof SongModel>;
export declare const createSongLyricsPayload: (lyrics: z.infer<typeof LyricsAPIResponseModel>) => z.infer<typeof LyricsModel>;
