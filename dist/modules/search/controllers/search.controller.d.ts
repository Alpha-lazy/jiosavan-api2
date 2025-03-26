import { OpenAPIHono } from '@hono/zod-openapi';
import type { Routes } from '../../../common/types/index.js';
export declare class SearchController implements Routes {
    controller: OpenAPIHono;
    private searchService;
    constructor();
    initRoutes(): void;
}
