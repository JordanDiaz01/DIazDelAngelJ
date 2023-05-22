"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_config_1 = require("./swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_config_1.config);
    swagger_1.SwaggerModule.setup('api-docs', app, document, swagger_config_1.options);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map