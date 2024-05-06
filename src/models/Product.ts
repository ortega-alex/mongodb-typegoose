import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { Comment } from "./Comment";
// import { nanoid } from "nanoid";
import { User } from './User';

class Product {

    @prop({ required: true, trim: true })
    name: string;

    // @prop({ required: true, default: () => nanoid() })
    // sku: string;

    @prop({ default: 0 })
    price: number;

    @prop({ lowercase: true })
    url: string;

    @prop({ type: () => [String] })
    tags: string[];

    @prop({ type: () => [Comment] })
    comments: Comment[]

    @prop({ ref: () => User })
    owner: Ref<User>
}

const ProductModel = getModelForClass(Product)
export default ProductModel;
