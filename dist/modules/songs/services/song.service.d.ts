import { type GetSongByIdArgs, type GetSongSuggestionsArgs } from '../../songs/use-cases/index.js';
export declare class SongService {
    private readonly getSongByIdUseCase;
    private readonly getSongByLinkUseCase;
    private readonly getSongLyricsUseCase;
    private readonly createSongStationUseCase;
    private readonly getSongSuggestionsUseCase;
    constructor();
    getSongByIds: (args: GetSongByIdArgs) => Promise<{
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
    }[]>;
    getSongByLink: (token: string) => Promise<{
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
    }[]>;
    getSongLyrics: (songId: string) => Promise<{
        lyrics: string;
        copyright: string;
        snippet: string;
    }>;
    createSongStation: (songIds: string) => Promise<string>;
    getSongSuggestions: (args: GetSongSuggestionsArgs) => Promise<{
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
    }[]>;
}
