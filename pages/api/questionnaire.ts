import type { NextApiRequest, NextApiResponse } from "next";
import { Request } from "../../dtos/request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const request = new Request();
  request.email = data.email;
  request.answers = data.answers;
}
