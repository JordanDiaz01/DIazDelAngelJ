import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schemas';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
    getAllMovies(): Promise<Movie[]>;
    getMovie(id: string): Promise<Movie>;
    createMovie(file: any, movie: CreateMovieDTO, req: any): Promise<Movie>;
    UpdateMovie(id: string, movie: UpdateMovieDTO): Promise<Movie>;
    DeleteMovie(id: string, response: any): Promise<void>;
}
