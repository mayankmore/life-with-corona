import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import { ContextProvider } from './Context';


function Video() {
  return (
    <div className="App">

    <ContextProvider>
      <Form />
    </ContextProvider>

    </div>
  );
}
export default Video;
