import Content from '@/utils/connectDb'
import mongoose from 'mongoose';

export default async function addContent(req, res){
    console.log('connecting');
    await mongoose.connect('mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/?retryWrites=true&w=majority')
    console.log('connected');


    console.log('creating');
    const content = await Content.create(req.body)
    console.log('created');
    res.json({content})



}