"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviestub = void 0;
const movie_schemas_1 = require("../schemas/movie.schemas");
const moviestub = () => {
    return {
        "title": "prueba5cambiada",
        "description": "prueba2",
        "director": "prueba3",
        "imgMovie": "https://firebasestorage.googleapis.com/v0/b/moviesapi-fe493.appspot.com/o/96697003-4849-471e-beb8-e0a897f13822?alt=media&token=d0a22a54-cfb5-4471-a81b-a77f23f6260b",
        "releasedate": "prueba fecha",
        "category": movie_schemas_1.Category.ADVENTURE,
        "user": user
    };
};
exports.moviestub = moviestub;
const user = {};
//# sourceMappingURL=movie.stub.js.map