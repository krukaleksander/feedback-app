require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid");
import { generateHTML } from "../../helpers/generateHTML";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const emailAdress: string = req.body.email;
  const generatedHTML = generateHTML(emailAdress);
  try {
    const options = {
      apiKey: process.env.API_KEY,
    };
    let transporter = nodemailer.createTransport(sgTransport(options));
    let info = await transporter.sendMail({
      from: "aleksander@korzystnaenergia.pl",
      to: emailAdress,
      subject: "Hello ✔",
      text: "Hello world?",
      html: generatedHTML,
    });
    res.status(202).json({
      statusCode: 202,
      msg: `Email sent successfully to ${emailAdress}`,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      msg: `Error: ${error}`,
    });
  }
}
