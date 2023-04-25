import React, { Suspense } from 'react';
import loadable from '@loadable/component';

const Login_register = loadable(() => import('app2/Login_register'), {
  fallback: <div>loading content...</div>,
});

function App(){
  return(
    <>
    <div>sssss</div><br/>

    <Login_register />

    </>
  )
}

export default App;