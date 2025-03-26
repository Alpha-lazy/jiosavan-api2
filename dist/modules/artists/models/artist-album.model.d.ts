import { z } from 'zod';
export declare const ArtistAlbumAPIResponseModel: z.ZodObject<{
    artistId: z.ZodString;
    name: z.ZodString;
    subtitle: z.ZodString;
    image: z.ZodString;
    follower_count: z.ZodString;
    type: z.ZodString;
    isVerified: z.ZodBoolean;
    dominantLanguage: z.ZodString;
    dominantType: z.ZodString;
    topAlbums: z.ZodObject<{
        albums: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            header_desc: z.ZodString;
            type: z.ZodString;
            perma_url: z.ZodString;
            image: z.ZodString;
            language: z.ZodString;
            year: z.ZodString;
            play_count: z.ZodString;
            explicit_content: z.ZodString;
            list_count: z.ZodString;
            list_type: z.ZodString;
            list: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                subtitle: z.ZodString;
                header_desc: z.ZodString;
                type: z.ZodString;
                perma_url: z.ZodString;
                image: z.ZodString;
                language: z.ZodString;
                year: z.ZodString;
                play_count: z.ZodString;
                explicit_content: z.ZodString;
                list_count: z.ZodString;
                list_type: z.ZodString;
                list: z.ZodString;
                more_info: z.ZodObject<{
                    music: z.ZodString;
                    album_id: z.ZodString;
                    album: z.ZodString;
                    label: z.ZodString;
                    origin: z.ZodString;
                    is_dolby_content: z.ZodBoolean;
                    '320kbps': z.ZodString;
                    encrypted_media_url: z.ZodString;
                    encrypted_cache_url: z.ZodString;
                    album_url: z.ZodString;
                    duration: z.ZodString;
                    rights: z.ZodObject<{
                        code: z.ZodString;
                        cacheable: z.ZodString;
                        delete_cached_object: z.ZodString;
                        reason: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    }, {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    }>;
                    cache_state: z.ZodString;
                    has_lyrics: z.ZodString;
                    lyrics_snippet: z.ZodString;
                    starred: z.ZodString;
                    copyright_text: z.ZodString;
                    artistMap: z.ZodObject<{
                        primary_artists: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            role: z.ZodString;
                            type: z.ZodString;
                            image: z.ZodString;
                            perma_url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }, {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }>, "many">;
                        featured_artists: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            role: z.ZodString;
                            type: z.ZodString;
                            image: z.ZodString;
                            perma_url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }, {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }>, "many">;
                        artists: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            role: z.ZodString;
                            type: z.ZodString;
                            image: z.ZodString;
                            perma_url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }, {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    }, {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    }>;
                    release_date: z.ZodString;
                    label_url: z.ZodString;
                    vcode: z.ZodString;
                    vlink: z.ZodString;
                    triller_available: z.ZodBoolean;
                    request_jiotune_flag: z.ZodBoolean;
                    webp: z.ZodString;
                    lyrics_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                }, {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }, {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }>, "many">;
            more_info: z.ZodObject<{
                artistMap: z.ZodObject<{
                    primary_artists: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        name: z.ZodString;
                        role: z.ZodString;
                        type: z.ZodString;
                        image: z.ZodString;
                        perma_url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }, {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }>, "many">;
                    featured_artists: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        name: z.ZodString;
                        role: z.ZodString;
                        type: z.ZodString;
                        image: z.ZodString;
                        perma_url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }, {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }>, "many">;
                    artists: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        name: z.ZodString;
                        role: z.ZodString;
                        type: z.ZodString;
                        image: z.ZodString;
                        perma_url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }, {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                }, {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                }>;
                song_count: z.ZodString;
                copyright_text: z.ZodString;
                is_dolby_content: z.ZodBoolean;
                label_url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            }, {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            header_desc: string;
            language: string;
            year: string;
            play_count: string;
            explicit_content: string;
            list_count: string;
            list_type: string;
            list: {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }[];
            more_info: {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            };
        }, {
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            header_desc: string;
            language: string;
            year: string;
            play_count: string;
            explicit_content: string;
            list_count: string;
            list_type: string;
            list: {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }[];
            more_info: {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            };
        }>, "many">;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        albums: {
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            header_desc: string;
            language: string;
            year: string;
            play_count: string;
            explicit_content: string;
            list_count: string;
            list_type: string;
            list: {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }[];
            more_info: {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            };
        }[];
        total: number;
    }, {
        albums: {
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            header_desc: string;
            language: string;
            year: string;
            play_count: string;
            explicit_content: string;
            list_count: string;
            list_type: string;
            list: {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }[];
            more_info: {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            };
        }[];
        total: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    image: string;
    subtitle: string;
    artistId: string;
    follower_count: string;
    isVerified: boolean;
    dominantLanguage: string;
    dominantType: string;
    topAlbums: {
        albums: {
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            header_desc: string;
            language: string;
            year: string;
            play_count: string;
            explicit_content: string;
            list_count: string;
            list_type: string;
            list: {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }[];
            more_info: {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            };
        }[];
        total: number;
    };
}, {
    type: string;
    name: string;
    image: string;
    subtitle: string;
    artistId: string;
    follower_count: string;
    isVerified: boolean;
    dominantLanguage: string;
    dominantType: string;
    topAlbums: {
        albums: {
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            header_desc: string;
            language: string;
            year: string;
            play_count: string;
            explicit_content: string;
            list_count: string;
            list_type: string;
            list: {
                title: string;
                type: string;
                id: string;
                image: string;
                perma_url: string;
                subtitle: string;
                header_desc: string;
                language: string;
                year: string;
                play_count: string;
                explicit_content: string;
                list_count: string;
                list_type: string;
                list: string;
                more_info: {
                    webp: string;
                    music: string;
                    album_id: string;
                    album: string;
                    label: string;
                    origin: string;
                    is_dolby_content: boolean;
                    '320kbps': string;
                    encrypted_media_url: string;
                    encrypted_cache_url: string;
                    album_url: string;
                    duration: string;
                    rights: {
                        code: string;
                        cacheable: string;
                        delete_cached_object: string;
                        reason: string;
                    };
                    cache_state: string;
                    has_lyrics: string;
                    lyrics_snippet: string;
                    starred: string;
                    copyright_text: string;
                    artistMap: {
                        primary_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        featured_artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                        artists: {
                            type: string;
                            id: string;
                            name: string;
                            role: string;
                            image: string;
                            perma_url: string;
                        }[];
                    };
                    release_date: string;
                    label_url: string;
                    vcode: string;
                    vlink: string;
                    triller_available: boolean;
                    request_jiotune_flag: boolean;
                    lyrics_id: string;
                };
            }[];
            more_info: {
                is_dolby_content: boolean;
                copyright_text: string;
                artistMap: {
                    primary_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    featured_artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                    artists: {
                        type: string;
                        id: string;
                        name: string;
                        role: string;
                        image: string;
                        perma_url: string;
                    }[];
                };
                label_url: string;
                song_count: string;
            };
        }[];
        total: number;
    };
}>;
export declare const ArtistAlbumModel: z.ZodObject<{
    total: z.ZodNumber;
    albums: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        year: z.ZodNullable<z.ZodNumber>;
        type: z.ZodString;
        playCount: z.ZodNullable<z.ZodNumber>;
        language: z.ZodString;
        explicitContent: z.ZodBoolean;
        artists: z.ZodObject<{
            primary: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                role: z.ZodString;
                type: z.ZodString;
                image: z.ZodArray<z.ZodObject<{
                    quality: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    quality: string;
                }, {
                    url: string;
                    quality: string;
                }>, "many">;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }, {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }>, "many">;
            featured: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                role: z.ZodString;
                type: z.ZodString;
                image: z.ZodArray<z.ZodObject<{
                    quality: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    quality: string;
                }, {
                    url: string;
                    quality: string;
                }>, "many">;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }, {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }>, "many">;
            all: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                role: z.ZodString;
                type: z.ZodString;
                image: z.ZodArray<z.ZodObject<{
                    quality: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    quality: string;
                }, {
                    url: string;
                    quality: string;
                }>, "many">;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }, {
                url: string;
                type: string;
                id: string;
                name: string;
                role: string;
                image: {
                    url: string;
                    quality: string;
                }[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
        songCount: z.ZodNullable<z.ZodNumber>;
        url: z.ZodString;
        image: z.ZodArray<z.ZodObject<{
            quality: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            quality: string;
        }, {
            url: string;
            quality: string;
        }>, "many">;
        songs: z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            type: z.ZodString;
            year: z.ZodNullable<z.ZodString>;
            releaseDate: z.ZodNullable<z.ZodString>;
            duration: z.ZodNullable<z.ZodNumber>;
            label: z.ZodNullable<z.ZodString>;
            explicitContent: z.ZodBoolean;
            playCount: z.ZodNullable<z.ZodNumber>;
            language: z.ZodString;
            hasLyrics: z.ZodBoolean;
            lyricsId: z.ZodNullable<z.ZodString>;
            lyrics: z.ZodOptional<z.ZodObject<{
                lyrics: z.ZodString;
                copyright: z.ZodString;
                snippet: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                lyrics: string;
                copyright: string;
                snippet: string;
            }, {
                lyrics: string;
                copyright: string;
                snippet: string;
            }>>;
            url: z.ZodString;
            copyright: z.ZodNullable<z.ZodString>;
            album: z.ZodObject<{
                id: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                url: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                url: string | null;
                id: string | null;
                name: string | null;
            }, {
                url: string | null;
                id: string | null;
                name: string | null;
            }>;
            artists: z.ZodObject<{
                primary: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodArray<z.ZodObject<{
                        quality: z.ZodString;
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        quality: string;
                    }, {
                        url: string;
                        quality: string;
                    }>, "many">;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }, {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }>, "many">;
                featured: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodArray<z.ZodObject<{
                        quality: z.ZodString;
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        quality: string;
                    }, {
                        url: string;
                        quality: string;
                    }>, "many">;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }, {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }>, "many">;
                all: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodArray<z.ZodObject<{
                        quality: z.ZodString;
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        quality: string;
                    }, {
                        url: string;
                        quality: string;
                    }>, "many">;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }, {
                    url: string;
                    type: string;
                    id: string;
                    name: string;
                    role: string;
                    image: {
                        url: string;
                        quality: string;
                    }[];
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>;
            image: z.ZodArray<z.ZodObject<{
                quality: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                quality: string;
            }, {
                url: string;
                quality: string;
            }>, "many">;
            downloadUrl: z.ZodArray<z.ZodObject<{
                quality: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                quality: string;
            }, {
                url: string;
                quality: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
    total: number;
}, {
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
    total: number;
}>;
