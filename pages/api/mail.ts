import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";
import { generateHTML } from "../../helpers/generateHTML";
import { sendMessageToUser } from "../../helpers/sendMessageToUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const emailAdress: string = req.body.email;
  try {
    await sendMessageToUser(emailAdress, generateHTML(emailAdress));
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
