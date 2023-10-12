import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Message from "@/app/models/Message";

export async function POST(request) {
    try {
        const {name, email, subject, message} = await request.json();

        // verify request body
        if(!name || !email || !subject || !message) {
            return NextResponse.json({
                message: 'Todos los campos son obligatorios.',
                status: 400
            }, {
                status: 400
            })
        }
        // connect to db
        await dbConnect();

        // save message to db
        await Message.create({
            name: name, 
            email: email,
            subject: subject,
            message: message
        });

        // enviar correo diciendo que recibimos su comentario
        // invitar a q se suscriba si no lo ha hecho

        return NextResponse.json({
            message: 'Hemos recibido tu mensaje.',
            status: 200
        }, {
            status: 200
        })
    } catch (err) {
        console.log('Error at api/contact:', err);
        return NextResponse.json({
            message: 'No se ha podido enviar tu mensaje. Por favor intenta de nuevo.',
            status: 500
        }, {
            status: 500
        })
    }
}