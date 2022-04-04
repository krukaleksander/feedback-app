require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const emailAdress = req.body.email;

  const options = {
    apiKey: process.env.API_KEY,
  };

  try {
    let transporter = nodemailer.createTransport(sgTransport(options));

    let info = await transporter.sendMail({
      from: "aleksander@korzystnaenergia.pl",
      to: emailAdress,
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
    res.status(200).json({ statusCode: 200, msg: "Email sent successfully" });
  } catch (error) {
    console.log(error);
  }
}
