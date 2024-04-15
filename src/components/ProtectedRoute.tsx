// pages/api/protected.ts

import { NextApiRequest, NextApiResponse } from "next";
import { isAuth } from "@/path/to/your/auth/middleware";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Call your authentication middleware to verify if the user is authenticated
    await isAuth(req, res);

    // If the user is authenticated, you can proceed with handling the request
    res
      .status(200)
      .json({ message: "You have access to the protected resource" });
  } catch (error) {
    // If the user is not authenticated, the middleware will throw an error
    res.status(401).json({ error: "Unauthorized" });
  }
}
