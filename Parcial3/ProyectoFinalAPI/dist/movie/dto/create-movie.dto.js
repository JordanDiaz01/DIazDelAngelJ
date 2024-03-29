"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieDTO = void 0;
const class_validator_1 = require("class-validator");
const movie_schemas_1 = require("../schemas/movie.schemas");
const user_schema_1 = require("../../auth/schemas/user.schema");
const swagger_1 = require("@nestjs/swagger");
class CreateMovieDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDTO.prototype, "director", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMovieDTO.prototype, "imgMovie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovieDTO.prototype, "releasedate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(movie_schemas_1.Category, { message: "ingrese una categoria valida (Adventure,Horror,Action,Fantasy)" }),
    __metadata("design:type", String)
], CreateMovieDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)({ message: 'no debes pasar el userid' }),
    __metadata("design:type", user_schema_1.User)
], CreateMovieDTO.prototype, "user", void 0);
exports.CreateMovieDTO = CreateMovieDTO;
//# sourceMappingURL=create-movie.dto.js.map