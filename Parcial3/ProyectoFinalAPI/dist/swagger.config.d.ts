declare const options: {
    explorer: boolean;
    customCss: string;
};
declare const config: Omit<import("@nestjs/swagger").OpenAPIObject, "paths">;
export { config, options };
