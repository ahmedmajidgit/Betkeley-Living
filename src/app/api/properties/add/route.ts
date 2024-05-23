import {connect} from "@/dbConfig/dbConfig";
import Properties from "@/models/propertiesModal"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";


connect()
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest){
    // Defines an asynchronous POST request handler.
        try {
            const reqBody = await request.json()
            const {propertyname} = reqBody
    // Parses the request body to extract username, email, and password.
    
    //Checks if a user with the provided email already exists. 
            // const user = await User.findOne({email})
    
    //If yes, returns a 400 response.
            // if(user){
            //     return NextResponse.json({error: "User already exists"}, {status: 400})
            // }
    
    //hash password using bcryptjs.
            // const salt = await bcryptjs.genSalt(10)
            // const hashedPassword = await bcryptjs.hash(password, salt)
    
            const newProperty = new User({
                propertyname,
                // email,
                // password: hashedPassword
            })
    
    // Saves the new user to the database.
            const savedProperty = await newProperty.save()
    
    
            return NextResponse.json({
                message: "Property created successfully",
                success: true,
                savedProperty
            })
    
    
        } catch (error: any) {
            return NextResponse.json({error: error.message}, {status: 500})
    
        }
    }