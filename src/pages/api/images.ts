import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { name },
  } = req;
  const imagePath = path.join(process.cwd(), "public/images", name as string);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Image not found");
    } else {
      res.setHeader("Content-Type", "image/jpeg");
      res.write(data);
      res.end();
    }
  });
}
