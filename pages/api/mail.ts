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
  const sendGridOptions = {
    api_user: process.env.API_USER,
    api_key: process.env.API_KEY,
  };
  res.status(250).json({ statusCode: 250, msg: "Email sent successfully" });
}
