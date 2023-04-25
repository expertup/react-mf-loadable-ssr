import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { loadableReady } from '@loadable/component';

import Login_register from '../app/index.js';

loadableReady(() => {
  hydrateRoot(document.getElementById('root'), <Login_register />);
});