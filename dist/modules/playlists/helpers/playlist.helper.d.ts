import type { PlaylistAPIResponseModel, PlaylistModel } from '../../playlists/models/index.js';
import type { z } from 'zod';
export declare const createPlaylistPayload: (playlist: z.infer<typeof PlaylistAPIResponseModel>) => z.infer<typeof PlaylistModel>;
