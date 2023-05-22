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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const movie_schemas_1 = require("./schemas/movie.schemas");
let MovieService = class MovieService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    async findAll() {
        const movies = await this.movieModel.find();
        return movies;
    }
    async create(movie, user) {
        const data = Object.assign(movie, { user: user._id });
        const res = await this.movieModel.create(data);
        return res;
    }
    async findById(id) {
        const isValid = mongoose.isValidObjectId(id);
        if (!isValid) {
            throw new common_1.BadRequestException('Ingresé un id valido ');
        }
        const movie = await this.movieModel.findById(id);
        if (!movie) {
            throw new common_1.NotFoundException('No se encontró la pelicula :(');
        }
        return movie;
    }
    async UpdateById(id, movie) {
        const movieUpdated = await this.movieModel.findByIdAndUpdate(id, movie, {
            new: true,
            runValidators: true
        });
        return movieUpdated;
    }
    async deleteMovie(id) {
        await this.movieModel.deleteOne({
            _id: new mongoose.Types.ObjectId(id)
        });
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(movie_schemas_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map