import { type GetArtistAlbumsArgs, type GetArtistByIdArgs, type GetArtistByLinkArgs, type GetArtistSongsArgs } from '../../artists/use-cases/index.js';
export declare class ArtistService {
    private readonly getArtistByIdUseCase;
    private readonly getArtistByLinkUseCase;
    private readonly getArtistSongsUseCase;
    private readonly getArtistAlbumsUseCase;
    constructor();
    getArtistById: (args: GetArtistByIdArgs) => Promise<{
        url: string;
        type: string;
        id: string;
        name: string;
        image: {
            url: string;
            quality: string;
        }[];
        isVerified: boolean | null;
        dominantLanguage: string | null;
        dominantType: string | null;
        topAlbums: {
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
        }[] | null;
        topSongs: {
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
        singles: {
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
        similarArtists: {
            url: string;
            type: string;
            id: string;
            name: string;
            image: {
                url: string;
                quality: string;
            }[];
            dominantType: string;
            similarArtists: {
                id: string;
                name: string;
            }[] | null;
            languages: Record<string, string> | null;
            wiki: string;
            twitter: string;
            dob: string;
            aka: string;
            fb: string;
            bio: string | null;
            isRadioPresent: boolean;
        }[] | null;
        wiki: string | null;
        twitter: string | null;
        dob: string | null;
        fb: string | null;
        bio: {
            text: string | null;
            title: string | null;
            sequence: number | null;
        }[] | null;
        isRadioPresent: boolean | null;
        availableLanguages: string[];
        followerCount: number | null;
        fanCount: string | null;
    }>;
    getArtistByLink: (args: GetArtistByLinkArgs) => Promise<{
        url: string;
        type: string;
        id: string;
        name: string;
        image: {
            url: string;
            quality: string;
        }[];
        isVerified: boolean | null;
        dominantLanguage: string | null;
        dominantType: string | null;
        topAlbums: {
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
        }[] | null;
        topSongs: {
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
        singles: {
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
        similarArtists: {
            url: string;
            type: string;
            id: string;
            name: string;
            image: {
                url: string;
                quality: string;
            }[];
            dominantType: string;
            similarArtists: {
                id: string;
                name: string;
            }[] | null;
            languages: Record<string, string> | null;
            wiki: string;
            twitter: string;
            dob: string;
            aka: string;
            fb: string;
            bio: string | null;
            isRadioPresent: boolean;
        }[] | null;
        wiki: string | null;
        twitter: string | null;
        dob: string | null;
        fb: string | null;
        bio: {
            text: string | null;
            title: string | null;
            sequence: number | null;
        }[] | null;
        isRadioPresent: boolean | null;
        availableLanguages: string[];
        followerCount: number | null;
        fanCount: string | null;
    }>;
    getArtistSongs: (args: GetArtistSongsArgs) => Promise<{
        total: number;
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
    }>;
    getArtistAlbums: (args: GetArtistAlbumsArgs) => Promise<{
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
