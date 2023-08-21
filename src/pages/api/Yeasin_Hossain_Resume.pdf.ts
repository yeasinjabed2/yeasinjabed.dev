import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const docPath = path.join(
    process.cwd(),
    "public/docs/Yeasin Hossain - jabed50000@gmail.com - +880 17952 99303.pdf"
  );

  fs.readFile(docPath, (err, data) => {
    if (err) {
      res.status(404).send("Docs not found");
    } else {
      res.setHeader("Content-Type", "application/pdf");
      res.write(data);
      res.end();
    }
  });
}
