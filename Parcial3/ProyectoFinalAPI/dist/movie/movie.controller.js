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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const fb_config_1 = require("../firebase/fb.config");
const platform_express_1 = require("@nestjs/platform-express");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getAllMovies() {
        return this.movieService.findAll();
    }
    async getMovie(id) {
        return this.movieService.findById(id);
    }
    async createMovie(file, movie, req) {
        const imgCast = await (0, fb_config_1.uploadFile)(file);
        movie.imgMovie = imgCast;
        return this.movieService.create(movie, req.user);
    }
    async UpdateMovie(id, movie) {
        return this.movieService.UpdateById(id, movie);
    }
    async DeleteMovie(id, response) {
        response.send({ message: 'pelicula eliminada' });
        return this.movieService.deleteMovie(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Regresa todas las peliculas que se encuentren disponibles"
    }),
    (0, swagger_1.ApiResponse)({ status: 200,
        description: 'La respuesta contiene un arreglo con todas las peliculas en formato objeto',
        schema: {
            type: 'array',
            example: [
                {
                    "_id": "646009932cbf0895bb85ae8d",
                    "title": "prueba5cambiada",
                    "description": "prueba2",
                    "director": "prueba3",
                    "imgMovie": "https://firebasestorage.googleapis.com/v0/b/moviesapi-fe493.appspot.com/o/96697003-4849-471e-beb8-e0a897f13822?alt=media&token=d0a22a54-cfb5-4471-a81b-a77f23f6260b",
                    "releasedate": "prueba fecha",
                    "category": "Adventure",
                    "createdAt": "2023-05-13T22:05:07.465Z",
                    "updatedAt": "2023-05-13T22:32:34.922Z",
                    "__v": 0
                },
                {
                    "_id": "64603a02ebc9e431ba9db58f",
                    "title": "prueba7",
                    "description": "prueba2",
                    "director": "prueba3",
                    "imgMovie": "https://firebasestorage.googleapis.com/v0/b/moviesapi-fe493.appspot.com/o/9fff871d-15c0-4444-a4f6-26508ba0e797?alt=media&token=0401c340-9e28-46ad-adc6-a15f9172a932",
                    "releasedate": "prueba fecha",
                    "category": "Adventure",
                    "user": "64603780f24c24a905052a95",
                    "createdAt": "2023-05-14T01:31:46.031Z",
                    "updatedAt": "2023-05-14T01:31:46.031Z",
                    "__v": 0
                },
            ]
        }
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getAllMovies", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Regresa una pelicula por id"
    }),
    (0, swagger_1.ApiParam)({
        name: 'id'
    }),
    (0, swagger_1.ApiResponse)({ status: 200,
        description: 'La respuesta contiene un objeto con los datos de la pelicula',
        schema: {
            type: 'json',
            example: {
                "_id": "646009932cbf0895bb85ae8d",
                "title": "prueba5cambiada",
                "description": "prueba2",
                "director": "prueba3",
                "imgMovie": "https://firebasestorage.googleapis.com/v0/b/moviesapi-fe493.appspot.com/o/96697003-4849-471e-beb8-e0a897f13822?alt=media&token=d0a22a54-cfb5-4471-a81b-a77f23f6260b",
                "releasedate": "prueba fecha",
                "category": "Adventure",
                "createdAt": "2023-05-13T22:05:07.465Z",
                "updatedAt": "2023-05-14T18:57:27.267Z",
                "__v": 0
            }
        }
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovie", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Agrega una nueva pelicula"
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
                director: { type: 'string' },
                imgMovie: {
                    type: 'string',
                    format: 'binary',
                },
                releasedate: { type: 'string' },
                category: { type: 'string', enum: ['Adventure', 'Horror', 'Action', 'Fantasy'] },
            },
        },
        "required": true
    }),
    (0, swagger_1.ApiResponse)({ status: 201,
        description: 'La respuesta contiene un objeto con los datos de la pelicula que se agregó',
        schema: {
            type: 'json',
            example: {
                "title": "prueba8",
                "description": "prueba2",
                "director": "prueba3",
                "imgMovie": "https://firebasestorage.googleapis.com/v0/b/moviesapi-fe493.appspot.com/o/4ba8d3a7-1fa6-4da3-a015-88b7d83ca38d?alt=media&token=a6abd324-a420-415a-bbcb-d3a9589b1652",
                "releasedate": "prueba fecha",
                "category": "Adventure",
                "user": "64603780f24c24a905052a95",
                "_id": "64603a3bebc9e431ba9db595",
                "createdAt": "2023-05-14T01:32:43.179Z",
                "updatedAt": "2023-05-14T01:32:43.179Z",
                "__v": 0
            }
        }
    }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imgMovie')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_movie_dto_1.CreateMovieDTO, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "createMovie", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Actualiza una pelicula por id"
    }),
    (0, swagger_1.ApiResponse)({ status: 200,
        description: 'La respuesta contiene un objeto con los datos de la pelicula actualizados',
        schema: {
            type: 'json',
            example: {
                "_id": "646009932cbf0895bb85ae8d",
                "title": "prueba5cambiada",
                "description": "prueba2",
                "director": "prueba3",
                "imgMovie": "https://firebasestorage.googleapis.com/v0/b/moviesapi-fe493.appspot.com/o/96697003-4849-471e-beb8-e0a897f13822?alt=media&token=d0a22a54-cfb5-4471-a81b-a77f23f6260b",
                "releasedate": "prueba fecha",
                "category": "Adventure",
                "createdAt": "2023-05-13T22:05:07.465Z",
                "updatedAt": "2023-05-13T22:32:34.922Z",
                "__v": 0
            }
        }
    }),
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_dto_1.UpdateMovieDTO]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "UpdateMovie", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "Elimina una pelicula por id"
    }),
    (0, swagger_1.ApiResponse)({ status: 200,
        description: 'La respuesta contiene un mensaje de confirmación de la acción solicitada',
        schema: {
            type: 'json',
            example: { message: 'pelicula eliminada' }
        }
    }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "DeleteMovie", null);
MovieController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Movies'),
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map