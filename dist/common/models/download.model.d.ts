import { z } from 'zod';
export declare const DownloadLinkModel: z.ZodObject<{
    quality: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    quality: string;
}, {
    url: string;
    quality: string;
}>;
