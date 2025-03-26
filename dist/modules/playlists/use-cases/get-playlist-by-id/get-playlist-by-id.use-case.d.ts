import type { IUseCase } from '../../../../common/types/index.js';
import type { PlaylistModel } from '../../../playlists/models/index.js';
import type { z } from 'zod';
export interface GetPlaylistByIdArgs {
    id: string;
    limit: number;
    page: number;
}
export declare class GetPlaylistByIdUseCase implements IUseCase<GetPlaylistByIdArgs, z.infer<typeof PlaylistModel>> {
    constructor();
    execute({ id, limit, page }: GetPlaylistByIdArgs): Promise<{
        songCount: number | null;
        songs: {
            url: string;
            type: string;
            id: string;
            name: string;
            image: {
                url: string;
                quality: string;
            }[];
            copyright: string | null;
            language: string;
            year: string | null;
            album: {
                url: string | null;
                id: string | null;
                name: string | null;
            };
            label: string | null;
            duration: number | null;
            artists: {
                all: {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }[];
                primary: {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }[];
                featured: {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }[];
            };
            releaseDate: string | null;
            explicitContent: boolean;
            playCount: number | null;
            hasLyrics: boolean;
            lyricsId: string | null;
            downloadUrl: {
                url: string;
                quality: string;
            }[];
            lyrics?: {
                lyrics: string;
                copyright: string;
                snippet: string;
            } | undefined;
        }[];
        description: string | null;
        url: string;
        type: string;
        id: string;
        name: string;
        image: {
            url: string;
            quality: string;
        }[];
        language: string;
        year: number | null;
        artists: {
            url: string;
            type: string;
            id: string;
            name: string;
            role: string;
            image: {
                url: string;
                quality: string;
            }[];
        }[] | null;
        explicitContent: boolean;
        playCount: number | null;
    }>;
}
