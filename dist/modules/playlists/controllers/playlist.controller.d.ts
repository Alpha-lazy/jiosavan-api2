import { OpenAPIHono } from '@hono/zod-openapi';
import type { Routes } from '../../../common/types/index.js';
export declare class PlaylistController implements Routes {
    controller: OpenAPIHono;
    private playlistService;
    constructor();
    initRoutes(): void;
}
