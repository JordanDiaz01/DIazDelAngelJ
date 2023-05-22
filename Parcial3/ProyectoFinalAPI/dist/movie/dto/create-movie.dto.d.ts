import { Category } from "../schemas/movie.schemas";
import { User } from "src/auth/schemas/user.schema";
export declare class CreateMovieDTO {
    readonly title: string;
    readonly description: string;
    readonly director: string;
    imgMovie: string;
    readonly releasedate: string;
    readonly category: Category;
    readonly user: User;
}
