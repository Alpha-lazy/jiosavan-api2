import { z } from 'zod';
export declare const SearchAPIResponseModel: z.ZodObject<{
    albums: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                music: z.ZodString;
                ctr: z.ZodNumber;
                year: z.ZodString;
                is_movie: z.ZodString;
                language: z.ZodString;
                song_pids: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            }, {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            }>;
            explicit_content: z.ZodString;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            mini_obj: boolean;
        }, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            mini_obj: boolean;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            mini_obj: boolean;
        }[];
        position: number;
    }, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            mini_obj: boolean;
        }[];
        position: number;
    }>;
    songs: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                album: z.ZodString;
                ctr: z.ZodNumber;
                score: z.ZodOptional<z.ZodString>;
                vcode: z.ZodString;
                vlink: z.ZodOptional<z.ZodString>;
                primary_artists: z.ZodString;
                singers: z.ZodString;
                video_available: z.ZodBoolean;
                triller_available: z.ZodBoolean;
                language: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            }, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            }>;
            explicit_content: z.ZodString;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            mini_obj: boolean;
        }, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            mini_obj: boolean;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            mini_obj: boolean;
        }[];
        position: number;
    }, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            mini_obj: boolean;
        }[];
        position: number;
    }>;
    playlists: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                firstname: z.ZodString;
                artist_name: z.ZodArray<z.ZodString, "many">;
                entity_type: z.ZodString;
                entity_sub_type: z.ZodString;
                video_available: z.ZodBoolean;
                is_dolby_content: z.ZodBoolean;
                sub_types: z.ZodAny;
                images: z.ZodAny;
                lastname: z.ZodString;
                language: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            }, {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            }>;
            explicit_content: z.ZodString;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            mini_obj: boolean;
        }, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            mini_obj: boolean;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            mini_obj: boolean;
        }[];
        position: number;
    }, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            mini_obj: boolean;
        }[];
        position: number;
    }>;
    artists: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            image: z.ZodString;
            extra: z.ZodString;
            type: z.ZodString;
            mini_obj: z.ZodBoolean;
            isRadioPresent: z.ZodBoolean;
            ctr: z.ZodNumber;
            entity: z.ZodNumber;
            description: z.ZodString;
            position: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    }, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    }>;
    topquery: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                album: z.ZodString;
                ctr: z.ZodNumber;
                score: z.ZodOptional<z.ZodString>;
                vcode: z.ZodString;
                vlink: z.ZodString;
                primary_artists: z.ZodString;
                singers: z.ZodString;
                video_available: z.ZodBoolean;
                triller_available: z.ZodBoolean;
                language: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            }, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            }>;
            explicit_content: z.ZodOptional<z.ZodString>;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }, {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    }, {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    }>;
}, "strip", z.ZodTypeAny, {
    artists: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    };
    songs: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            mini_obj: boolean;
        }[];
        position: number;
    };
    albums: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            mini_obj: boolean;
        }[];
        position: number;
    };
    playlists: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            mini_obj: boolean;
        }[];
        position: number;
    };
    topquery: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    };
}, {
    artists: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    };
    songs: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            mini_obj: boolean;
        }[];
        position: number;
    };
    albums: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            mini_obj: boolean;
        }[];
        position: number;
    };
    playlists: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            mini_obj: boolean;
        }[];
        position: number;
    };
    topquery: {
        data: {
            description: string;
            title: string;
            type: string;
            id: string;
            image: string;
            perma_url: string;
            subtitle: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    };
}>;
export declare const SearchModel: z.ZodObject<{
    albums: z.ZodObject<{
        results: z.ZodType<{
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
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        position: number;
        results?: any;
    }>;
    songs: z.ZodObject<{
        results: z.ZodType<{
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
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        position: number;
        results?: any;
    }>;
    artists: z.ZodObject<{
        results: z.ZodType<{
            description: string;
            title: string;
            type: string;
            id: string;
            image: {
                url: string;
                quality: string;
            }[];
            position: number;
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        position: number;
        results?: any;
    }>;
    playlists: z.ZodObject<{
        results: z.ZodType<{
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
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        position: number;
        results?: any;
    }>;
    topQuery: z.ZodObject<{
        results: z.ZodType<{
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
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    }, {
        position: number;
        results?: any;
    }>;
}, "strip", z.ZodTypeAny, {
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
}, {
    artists: {
        position: number;
        results?: any;
    };
    songs: {
        position: number;
        results?: any;
    };
    albums: {
        position: number;
        results?: any;
    };
    playlists: {
        position: number;
        results?: any;
    };
    topQuery: {
        position: number;
        results?: any;
    };
}>;
