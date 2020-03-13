import React from 'react';

import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
      <div className="main-header-title">
    <h1>Bishulim SF 2020 Passover Order Menu </h1>

    <p>Contact us regarding inquries or questions at bishulimsf@gmail.com</p>
    </div>
    <main>
      <Shelf />
    </main>

    <div className="sidebar-main">

<ul>
<li>
All kosher Ingredients, the meal will be cooked at Temple Beth Abraham’s kosher for Passover kitchen.
</li>
<li>Delivery is only for east bay orders</li>
<li>Delivery on April 8th</li>
<li>Pick up on April 8th from Temple Beth Abraham in Oakland </li>
<li>The online store will be open for orders until April 1st</li>
<li>A part of the proceeds will be donated to Temple Beth Abraham </li>
<li>Tax is already included in the price</li>
</ul>


    </div>
    <FloatCart />
  </React.Fragment>
);

export default App;
