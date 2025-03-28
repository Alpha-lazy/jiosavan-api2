import type { IUseCase } from '../../../../common/types/index.js';
import type { SearchArtistModel } from '../../../search/models/index.js';
import type { z } from 'zod';
export interface SearchArtistsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchArtistsUseCase implements IUseCase<SearchArtistsArgs, z.infer<typeof SearchArtistModel>> {
    constructor();
    execute({ query, limit, page }: SearchArtistsArgs): Promise<z.infer<typeof SearchArtistModel>>;
}
