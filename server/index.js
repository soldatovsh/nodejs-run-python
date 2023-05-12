import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import { promisify } from 'util';
import { exec } from 'child_process';
const execCmd = promisify(exec);

const app = express();

app.use(bodyParser.json());

export const handler = app;

app.all('/api/v1/hello', async (req, res) => {
  try {
    const location = path.resolve('./test.py');
    const result = await execCmd(`python ${location}`);
    const json = JSON.parse(result?.stdout);

    return res.json({ json, stderr: result?.stderr });
  } catch (e) {
    console.error(e);
    return res.json(e);
  }
});
