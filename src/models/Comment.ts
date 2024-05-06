import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true, _id: false }}) // define como quiero que se comporte este schema
export class Comment { // subclase o subdocumento
    @prop()
    text: string
}

