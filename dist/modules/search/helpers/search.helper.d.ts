import type { SearchAlbumAPIResponseModel, SearchAlbumModel, SearchAPIResponseModel, SearchModel, SearchPlaylistAPIResponseModel, SearchPlaylistModel } from '../../search/models/index.js';
import type { z } from 'zod';
export declare const createSearchPayload: (search: z.infer<typeof SearchAPIResponseModel>) => z.infer<typeof SearchModel>;
export declare const createSearchPlaylistPayload: (playlist: z.infer<typeof SearchPlaylistAPIResponseModel>) => z.infer<typeof SearchPlaylistModel>;
export declare const createSearchAlbumPayload: (album: z.infer<typeof SearchAlbumAPIResponseModel>) => z.infer<typeof SearchAlbumModel>;
