import { OpenAPIHono } from '@hono/zod-openapi';
import type { Routes } from './common/types/index.js';
export declare class App {
    private app;
    constructor(routes: Routes[]);
    private initializeRoutes;
    private initializeGlobalMiddlewares;
    private initializeSwaggerUI;
    private initializeRouteFallback;
    private initializeErrorHandler;
    getApp(): OpenAPIHono<import("hono").Env, {}, "/">;
}
