import type { IUseCase } from '../../../../common/types/index.js';
export declare class CreateSongStationUseCase implements IUseCase<string, string> {
    constructor();
    execute(songId: string): Promise<string>;
}
