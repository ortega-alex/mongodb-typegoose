import { Ref, ReturnModelType, getModelForClass, post, pre, prop } from "@typegoose/typegoose";
import { Role } from "./Role";
import bcrypt from 'bcryptjs'

@pre<User>('save', async function () { // hooks(midlewares) -> se ejecutan antes que se ejecute dicha funcion
    this.firstname = this.firstname + ' algo';
    this.password = await bcrypt.hash(this.password, 10) // podria serbir para incriptar un password antes de guardar
    console.log(this.firstname, this.password)
})
@post<User>('save', function () { // para despues que se ejecute dicha funcion
    console.log('user saved')
})
export class User {

    @prop({ required: true }) // mongoose
    firstname: string; // typescript

    @prop({ required: true })
    lastname: string;

    @prop({ required: true, trim: true })
    email: string;

    @prop({ required: true, minlength: 6 })
    password: string;

    @prop({ ref: () => Role })
    roles: Ref<Role>[]

    static async findByFistName(this: ReturnModelType<typeof User>, firstname: string) { // no hace falta instancial la clase
        return this.find({ firstname })
    }

    encrypPassword(password: string) { // no static, se tienen que istanciar la clase
        return '123xyz' + password
    }
}

const UserModel = getModelForClass(User);
export default UserModel;