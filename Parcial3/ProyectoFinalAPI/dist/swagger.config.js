"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.config = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_themes_1 = require("swagger-themes");
const theme = new swagger_themes_1.SwaggerTheme('v3');
const options = {
    explorer: true,
    customCss: theme.getBuffer('dark')
};
exports.options = options;
const config = new swagger_1.DocumentBuilder()
    .addBearerAuth()
    .setTitle('Movies API')
    .setDescription('En esta api puedes hacer un abc de peliculas con imagenes!')
    .setVersion('1.0')
    .addTag('Movies')
    .build();
exports.config = config;
//# sourceMappingURL=swagger.config.js.map