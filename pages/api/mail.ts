require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid");
import { compile } from "handlebars";
import mjml2html from "mjml";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const emailAdress: string = req.body.email;

  const template = compile(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica" align="center">ELP Bootcamp</mj-text>

        <mj-divider border-color="#F45E43"></mj-divider>

        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Rate our bootcamp</mj-text>

        <mj-text align="center" font-size="16px" color="#F45E43">
          <a href="http://localhost:3000/api/vote/?email=${emailAdress}&vote=1" color="#F45E43">1</a>
          <a href="http://localhost:3000/api/vote/?email=${emailAdress}&vote=2" color="#F45E43">2</a>
          <a href="http://localhost:3000/api/vote/?email=${emailAdress}&vote=3" color="#F45E43">3</a>
          <a href="http://localhost:3000/api/vote/?email=${emailAdress}&vote=4" color="#F45E43">4</a>
          <a href="http://localhost:3000/api/vote/?email=${emailAdress}&vote=5" color="#F45E43">5</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`);
  const mjml = template(emailAdress);
  const html = mjml2html(mjml);
  console.log(html);
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
      html: html.html,
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
