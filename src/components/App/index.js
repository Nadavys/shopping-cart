import React from 'react';

import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
      <div className="main-header-title">
    <h1>BishulismSF 2020 Passover Order Menu </h1>

    <p>Contact us regarding inquries or questions at bishulimsf@gmail.com</p>
    </div>
    <main>
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
