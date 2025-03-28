import type { IUseCase } from '../../../../common/types/index.js';
import type { ArtistAlbumModel } from '../../../artists/models/index.js';
import type { z } from 'zod';
export interface GetArtistAlbumsArgs {
    artistId: string;
    page: number;
    sortBy: 'popularity' | 'latest' | 'alphabetical';
    sortOrder: 'asc' | 'desc';
}
export declare class GetArtistAlbumsUseCase implements IUseCase<GetArtistAlbumsArgs, z.infer<typeof ArtistAlbumModel>> {
    constructor();
    execute({ artistId, page, sortOrder, sortBy }: GetArtistAlbumsArgs): Promise<{
        total: number;
        albums: {
            description: string;
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
            explicitContent: boolean;
            playCount: number | null;
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
            }[] | null;
        }[];
    }>;
}
