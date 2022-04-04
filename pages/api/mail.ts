// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../interface/IResponse";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  res.status(250).json({ statusCode: 250, msg: "Email sent successfully" });
}
