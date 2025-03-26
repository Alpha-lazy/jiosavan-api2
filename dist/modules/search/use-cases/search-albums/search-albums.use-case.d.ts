import type { IUseCase } from '../../../../common/types/index.js';
import type { SearchAlbumModel } from '../../../search/models/index.js';
import type { z } from 'zod';
export interface SearchAlbumsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchAlbumsUseCase implements IUseCase<SearchAlbumsArgs, z.infer<typeof SearchAlbumModel>> {
    constructor();
    execute({ query, limit, page }: SearchAlbumsArgs): Promise<z.infer<typeof SearchAlbumModel>>;
}
