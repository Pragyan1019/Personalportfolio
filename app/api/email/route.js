
import nodemailer from 'nodemailer';


import { NextResponse } from 'next/server';
export async function POST(req) {
     const { name,email,message }=await req.json();

//creating a email transporter
const transporter =nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
});
//create a route to send mail

   
    const mailOptions={
            from:process.env.EMAIL,
            to:process.env.EMAIL,
            subject: `New Contact Form Message from ${name}`,
            text: `Message\n
               Name: ${name}\n
               Email: ${email}\n\n
               Message:\n${message}`,
                replyTo: email
 }
    try {
        await transporter.sendMail(mailOptions)
   return NextResponse.json({ message: "Mail sent successfully" })

  }catch(err){
    console.error("Failed to send email:", err);
 return NextResponse.json({ error: "Failed to send the mail" }, { status: 500 });  }
}

