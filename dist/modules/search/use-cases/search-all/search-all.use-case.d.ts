import type { IUseCase } from '../../../../common/types/index.js';
import type { SearchModel } from '../../../search/models/index.js';
import type { z } from 'zod';
export declare class SearchAllUseCase implements IUseCase<string, z.infer<typeof SearchModel>> {
    execute(query: string): Promise<z.infer<typeof SearchModel>>;
}
