import type { IUseCase } from '../../../../common/types/index.js';
import type { SearchPlaylistModel } from '../../../search/models/index.js';
import type { z } from 'zod';
export interface SearchPlaylistsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchPlaylistsUseCase implements IUseCase<SearchPlaylistsArgs, z.infer<typeof SearchPlaylistModel>> {
    constructor();
    execute({ query, limit, page }: SearchPlaylistsArgs): Promise<z.infer<typeof SearchPlaylistModel>>;
}
