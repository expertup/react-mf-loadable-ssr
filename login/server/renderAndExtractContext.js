import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import Login_register from '../app/index.js';

export function renderAndExtractContext({ chunkExtractor }){
  const styleSheet = new ServerStyleSheet();

  const markup = renderToString(styleSheet.collectStyles(chunkExtractor.collectChunks(<Login_register />)));

  const linkTags = chunkExtractor.getLinkTags();

  const styleTags = `${chunkExtractor.getStyleTags()}${styleSheet.getStyleTags()}`;
  const scriptTags = `${chunkExtractor.getScriptTags()}`;

  styleSheet.seal();

  return {
    markup,
    linkTags,
    styleTags,
    scriptTags,
  };
}