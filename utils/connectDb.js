import mongoose from "mongoose";
import {Schema, model, models} from 'mongoose'

// const connectMongo = () => mongoose.connect('mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/?retryWrites=true&w=majority')
// const connectMongo(){
//     mongoose.connect('mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/?retryWrites=true&w=majority')
// }

const ContentSchema = new Schema({
    text: String
})

const Content = models.Content || model('Content', ContentSchema)

export default Content