import {connect} from "@/dbConfig/dbConfig";
import Properties from "@/models/propertiesModal"
import { NextResponse } from "next/server";

connect()
// Calls the connect function to establish a connection to the database.

export async function GET(){
    try {
        const properties = await Properties.find({disable: false})
        if (!properties)
            return NextResponse.json({
                message: "Properties not found",
            },{
                status: 404,
            })
        return NextResponse.json(properties)
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}