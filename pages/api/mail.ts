require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const emailAdress = req.body.email;
  let transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.API_USER,
      pass: process.env.API_KEY,
    },
  });

  let info = await transporter.sendMail({
    from: "aleksander@korzystnaenergia.pl",
    to: emailAdress,
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);
  res.status(200).json({ statusCode: 200, msg: "Email sent successfully" });
}
