import path from 'path';
import express from 'express';

import { ChunkExtractor } from '@loadable/server';
import { renderAndExtractContext } from './renderAndExtractContext';


const app = express();
const PORT = 3000;

// static path where files such as images and js will be served from
app.use('/', express.static('build/client'));

// =================== WARNING ===================
// ATTENTION this will expose ALL server files
// =================== WARNING ===================
app.use('/server', express.static('build/server'));

app.get('/', (req, res, next) => {
  const clientExtractor = new ChunkExtractor({
    statsFile: path.resolve('build/client', 'loadable-stats.json'),
    entrypoints: ['clientAppEntrypoint'],
  });

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.write('<!DOCTYPE html>');
  res.write('<html>');

  const { markup, linkTags, styleTags, scriptTags } = renderAndExtractContext({
    chunkExtractor: clientExtractor,
  });

  res.write(`<head>${linkTags}${styleTags}</head><body>`);
  res.write(`<div id="root">${markup}</div>`);

  res.write(scriptTags);
  res.write('</body></html>');
  res.send();

  next();
});

app.listen(PORT, () => {
  console.info(`[${new Date().toISOString()}]`, `App1 is running: 🌎 http://localhost:${PORT}`);
});

export default app;