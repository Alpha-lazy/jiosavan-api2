import { OpenAPIHono } from '@hono/zod-openapi';
import type { Routes } from '../../../common/types/index.js';
import type { hc } from 'hono/client';
export declare class SongController implements Routes {
    controller: OpenAPIHono;
    static songClient: typeof hc;
    private songService;
    constructor();
    initRoutes(): void;
}
