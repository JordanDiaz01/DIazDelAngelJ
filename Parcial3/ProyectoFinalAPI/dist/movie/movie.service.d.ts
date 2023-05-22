import * as mongoose from 'mongoose';
import { Movie } from './schemas/movie.schemas';
import { User } from 'src/auth/schemas/user.schema';
export declare class MovieService {
    private movieModel;
    constructor(movieModel: mongoose.Model<Movie>);
    findAll(): Promise<Movie[]>;
    create(movie: Movie, user: User): Promise<Movie>;
    findById(id: string): Promise<Movie>;
    UpdateById(id: string, movie: Movie): Promise<Movie>;
    deleteMovie(id: string): Promise<void>;
}
