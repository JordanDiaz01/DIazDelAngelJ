import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";
export declare enum Category {
    ADVENTURE = "Adventure",
    HORROR = "Horror",
    ACTION = "Action",
    FANTASY = "Fantasy"
}
export declare class Movie {
    title: string;
    description: string;
    director: string;
    imgMovie: string;
    releasedate: string;
    category: Category;
    user: User;
}
export declare const MovieSchema: mongoose.Schema<Movie, mongoose.Model<Movie, any, any, any, mongoose.Document<unknown, any, Movie> & Omit<Movie & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Movie, mongoose.Document<unknown, {}, mongoose.FlatRecord<Movie>> & Omit<mongoose.FlatRecord<Movie> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
