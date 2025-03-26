import { type SearchAlbumsArgs, type SearchArtistsArgs, type SearchPlaylistsArgs, type SearchSongsArgs } from '../../search/use-cases/index.js';
export declare class SearchService {
    private readonly searchAllUseCase;
    private readonly searchSongsUseCase;
    private readonly searchAlbumsUseCase;
    private readonly searchArtistsUseCase;
    private readonly searchPlaylistsUseCase;
    constructor();
    searchAll: (query: string) => Promise<{
        artists: {
            position: number;
            results: {
                description: string;
                title: string;
                type: string;
                id: string;
                image: {
                    url: string;
                    quality: string;
                }[];
                position: number;
            }[];
        };
        songs: {
            position: number;
            results: {
                description: string;
                url: string;
                title: string;
                type: string;
                id: string;
                image: {
                    url: string;
                    quality: string;
                }[];
                language: string;
                album: string;
                singers: string;
                primaryArtists: string;
            }[];
        };
        albums: {
            position: number;
            results: {
                description: string;
                url: string;
                title: string;
                type: string;
                id: string;
                image: {
                    url: string;
                    quality: string;
                }[];
                language: string;
                year: string;
                artist: string;
                songIds: string;
            }[];
        };
        playlists: {
            position: number;
            results: {
                description: string;
                url: string;
                title: string;
                type: string;
                id: string;
                image: {
                    url: string;
                    quality: string;
                }[];
                language: string;
            }[];
        };
        topQuery: {
            position: number;
            results: {
                description: string;
                url: string;
                title: string;
                type: string;
                id: string;
                image: {
                    url: string;
                    quality: string;
                }[];
                language: string;
                album: string;
                singers: string;
                primaryArtists: string;
            }[];
        };
    }>;
    searchSongs: (args: SearchSongsArgs) => Promise<{
        total: number;
        results: {
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
        start: number;
    }>;
    searchAlbums: (args: SearchAlbumsArgs) => Promise<{
        total: number;
        results: {
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
        }[];
        start: number;
    }>;
    searchArtists: (args: SearchArtistsArgs) => Promise<{
        total: number;
        results: {
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
        start: number;
    }>;
    searchPlaylists: (args: SearchPlaylistsArgs) => Promise<{
        total: number;
        results: {
            url: string;
            type: string;
            id: string;
            name: string;
            image: {
                url: string;
                quality: string;
            }[];
            language: string;
            explicitContent: boolean;
            songCount: number | null;
        }[];
        start: number;
    }>;
}
