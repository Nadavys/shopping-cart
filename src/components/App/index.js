import React from 'react';

import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
      <div className="main-header-title">
    <h1>Bishulim SF 2020 Passover Order Menu </h1>
    <h2>Contact us regarding inquries or questions at bishulimsf@gmail.com. 415-881-0843 </h2>
    </div>
    <div className="sidebar-main">

<ul>
<li>
All kosher Ingredients (no kitniyot - legumes). The meal will be cooked at Temple Beth Abraham’s kosher for Passover kitchen.
</li>
<li>Delivery is only for East Bay locations</li>
<li>Delivery on April 8th</li>
<li>Pick up on April 8th from Temple Beth Abraham in Oakland </li>
<li>The online store will be open for orders until April 1st</li>
<li>A part of the proceeds will be donated to Temple Beth Abraham </li>
<li>Tax is already included in the price</li>
</ul>
</div>
    <main>
      <Shelf />
    </main>


    <FloatCart />
  </React.Fragment>
);

export default App;
