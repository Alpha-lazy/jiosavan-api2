import type { AlbumAPIResponseModel, AlbumModel } from '../../albums/models/index.js';
import type { z } from 'zod';
export declare const createAlbumPayload: (album: z.infer<typeof AlbumAPIResponseModel>) => z.infer<typeof AlbumModel>;
