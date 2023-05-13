import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/app/utils/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const currentUser = await serverAuth(req, res);

            return res.status(200).json(currentUser);
        } catch (error) {
            console.log(error);
            return res.status(400).end();
        }
    }

    return res.status(405).end();
}
