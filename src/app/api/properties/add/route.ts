import {connect} from "@/dbConfig/dbConfig";
import Properties from "@/models/propertiesModal"
import { NextRequest, NextResponse } from "next/server";

connect()
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const newProperty = new Properties(reqBody)
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