import express from 'express';
import { createServer } from 'http';

import ioInit from './io';

const PORT = process.env.PORT || 3000;

const expressApp = express();
const http = createServer(expressApp as (req: any, res: any) => void);
const io = ioInit(http);

const start = () => {
    http.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
};

export default {
    app: expressApp,
    http,
    io,
    start,
};
