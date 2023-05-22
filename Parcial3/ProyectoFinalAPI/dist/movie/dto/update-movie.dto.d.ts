import { User } from "src/auth/schemas/user.schema";
import { Category } from "../schemas/movie.schemas";
export declare class UpdateMovieDTO {
    readonly title: string;
    readonly description: string;
    readonly director: string;
    readonly imgMovie: string;
    readonly releasedate: string;
    readonly category: Category;
    readonly user: User;
}
