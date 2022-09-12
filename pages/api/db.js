// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {promises as fs} from 'fs';
import path from 'path';


export default async function handler(req, res) {
    const dataDir = path.join(process.cwd(), 'db');

    const data = await fs.readFile(dataDir + '/db.json', "utf8");

    res.status(200).json(data);
  }
  