import {connect} from "@/dbConfig/dbConfig";
import Properties from "@/models/propertiesModal"
import { NextRequest, NextResponse } from "next/server";

connect()
// Calls the connect function to establish a connection to the database.

export async function PUT(request: NextRequest){
    try {
        const reqBody = await request.json()
        const property = await Properties.findByIdAndUpdate(reqBody._id, reqBody, {new: true})
        if (!property)
            return NextResponse.json({
                message: "property not found",
            },{
                status: 404,
            })
        return NextResponse.json(property)
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}