import { OpenAPIHono } from '@hono/zod-openapi';
import type { Routes } from '../../../common/types/index.js';
export declare class ArtistController implements Routes {
    controller: OpenAPIHono;
    private artistService;
    constructor();
    initRoutes(): void;
}
