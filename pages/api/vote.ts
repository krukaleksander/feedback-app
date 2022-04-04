import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const emailAdress: string | string[] = req.query.email;
  const vote: string | string[] = req.query.vote;
  res.status(200).json({ statusCode: 200, msg: "Thanks for your vote!" });
  console.log(`User: ${emailAdress} gave us: ${vote}`);
}
