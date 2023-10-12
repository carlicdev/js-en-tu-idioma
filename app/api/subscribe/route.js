import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Subscriber from "@/app/models/Subscriber";
import sendWelcomeEmail from "@/app/lib/sendWelcomeEmail";

export async function POST(request) {
    try {
        const { email } = await request.json();

        // connect
        await dbConnect();

        // // check if not registered
        const alreadySubscribed = await Subscriber.findOne({email})

        if (alreadySubscribed) {
            return NextResponse.json({
                message: 'El email que proporcionaste ya está registrado en el sistema. Por favor, utiliza otro correo electrónico.',
                status: 409
            }, {
                status: 409
            })
        }

        // //register
        await Subscriber.create({email: email});

        // enviar correo de bienvenida
        await sendWelcomeEmail(email)

        return NextResponse.json({
            message: 'Gracias por suscribirte. Por favor revisa tu bandeja de entrada.',
            status: 200
        }, {
            status: 200
        })

    } catch(err) {
        console.log('An error subscribing new user', err);
        return NextResponse.json({
            message: 'No hemos podido registrarte a nuestra base de datos. Por favor intenta de nuevo.',
            status: 500
        }, {
            status: 500
        })
    }
}