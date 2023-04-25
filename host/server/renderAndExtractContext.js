import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { FederatedChunkExtractor } from '@mf/loadable-adapters';

import App from '../app/index.js';

const APP_HOST = 'http://localhost:3002';
const publicHost = `${APP_HOST}/static`;

const federatedChunkExtractor = new FederatedChunkExtractor({
  name: 'app2',
  publicHost,
  federationStats: `${publicHost}/federation-stats.json`,
});

export function renderAndExtractContext({ chunkExtractor }){
  const styleSheet = new ServerStyleSheet();

  const markup = renderToString(styleSheet.collectStyles(chunkExtractor.collectChunks(<App />)));

  federatedChunkExtractor.collectMfChunks(chunkExtractor);

  const mfStyleTags = federatedChunkExtractor.getStyleTags();
  const mfScriptTags = federatedChunkExtractor.getScriptTags({}, { loadMode: 'defer' });

  const linkTags = chunkExtractor.getLinkTags();

  const styleTags = `${mfStyleTags}${chunkExtractor.getStyleTags()}${styleSheet.getStyleTags()}`;
  const scriptTags = `${mfScriptTags}${chunkExtractor.getScriptTags()}`;

  styleSheet.seal();

  return {
    markup,
    linkTags,
    styleTags,
    scriptTags,
  };
}