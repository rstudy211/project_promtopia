// import { connectToDB } from "@utils/database"
// import {Prompts} from "@models/prompt"
// export const GET = async (req,{params})=>{
//     try {
//        await connectToDB()
//         console.log(params)
//         const prompts = await Prompts.find({creator: params.id}).populate("creator");
        
//         return new Response(JSON.stringify(prompts),{status:200})
//     } catch (error) {
//         console.log(error)
//         return new Response("Failed to fetch propmts created by users",{status:500})
//     }
// } 

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 