import type { IUseCase } from '../../../../common/types/index.js';
import type { SearchSongModel } from '../../../search/models/index.js';
import type { z } from 'zod';
export interface SearchSongsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchSongsUseCase implements IUseCase<SearchSongsArgs, z.infer<typeof SearchSongModel>> {
    constructor();
    execute({ query, limit, page }: SearchSongsArgs): Promise<z.infer<typeof SearchSongModel>>;
}
