import { OpenAPIHono } from '@hono/zod-openapi';
import type { Routes } from '../../../common/types/index.js';
export declare class AlbumController implements Routes {
    controller: OpenAPIHono;
    private albumService;
    constructor();
    initRoutes(): void;
}
