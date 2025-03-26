import { z } from 'zod';
export declare const ArtistMapAPIResponseModel: z.ZodObject<{
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
}>;
export declare const ArtistMapModel: z.ZodObject<{
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
}>;
