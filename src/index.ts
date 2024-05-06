import mongoose from "mongoose";
import UserModel, { User } from "./models/User";
import ProductModel from "./models/Product";
import RoleModel from "./models/Role";

const connectDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://mongoadmin:secret@localhost:27017/typegoosedb?authSource=admin')
        console.log('database is connected to', db.connect.name)
    } catch (error) {
        console.log(error);
    }
}

connectDB()

const executeQuery = async () => {
    const user = new UserModel({
        firstname: "Pablo",
        lastname: "Doe",
        email: " joedoe@gmail.com ",
        password: "123456",
        roles: [
            '663938251c363b91a5ecea4b',
            '663938251c363b91a5ecea4c'
        ]
    })
    // user.encrypPassword('123')
    await user.save()
    console.log(user)

    // const users = await UserModel.find();
    // const users = await UserModel.find({}, { firstname: 1, _id: 0 })
    // console.log(users)

    // const user = await UserModel.findById("6639156770645b57a66f9402", { lastname: 1, _id: 0 })
    // const user = await UserModel.findById("663938ea66afa2625a0a2ee5").populate('roles', 'name -_id')
    // console.log(user)

    // const user = await UserModel.findOneAndUpdate({ _id: "6639156770645b57a66f9402" }, { firstname: "Ryan", lastname: "Ray" }, { new: true }) // por parametro
    // const user = await UserModel.findByIdAndUpdate("6639156770645b57a66f9402", { firstname: "Ryan", lastname: "Ray" }, { new: true }) // por id
    // console.log(user)

    // const user = await UserModel.findByIdAndDelete("6639156770645b57a66f9402")
    // const user = await UserModel.findOneAndDelete({ _id: "6639156770645b57a66f9402" }) //por parametro solo elimina el primero que coincida
    // const users = await UserModel.deleteMany({ email: "joedoe@gmail.com" }) // elimina todo 
    // console.log(user)

    // const product = await ProductModel.create({
    //     name: "laptop",
    //     price: 30,
    //     url: "product-01",
    //     tags: ["laptop", "gamming", "razer"],
    //     comments: [
    //         {text: "awesome product"},
    //         {text: "product"}
    //     ],
    //     owner: '663915811a1cad6ea3e424ee'
    // })
    // console.log(product)

    // const product = await ProductModel.findById("663936c8207cb0ead42d44cf").populate('owner');
    // console.log(product)

    // const roles = await RoleModel.insertMany([
    //     { name: 'admin' },
    //     { name: 'guest' },
    //     { name: 'user' },
    // ]);
    // console.log(roles)

    // const roles = await RoleModel.find();
    // console.log(roles)

    // const user = await UserModel.findByFistName('Jone')
    // console.log(user)
}

executeQuery()