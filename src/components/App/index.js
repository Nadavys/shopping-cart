import React from 'react';

import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
      <div className="main-header-title">
    <h1>Bishulim SF 2020 Passover Order Menu</h1>
    <h2>Contact us regarding inquries at bishulimsf@gmail.com. 415-881-0843 </h2>
    </div>
    <div className="sidebar-main">

<ul>
<li>
All kosher Ingredients (no kitniyot - legumes). The meal will be cooked at Temple Beth Abraham’s kosher for Passover kitchen.
</li>
<li>Portions are per person</li>
<li>Delivery is only for East Bay locations. $25 per delivery.</li>
<li>Delivery on April 8th</li>
<li>Pick up on April 8th from Temple Beth Abraham in Oakland </li>
<li>Orders must be placed before April 1st.</li>
<li>Part of proceeds will be donated to Temple Beth Abraham </li>
<li>Prices include taxes and fees</li>

</ul>
</div>
    <main>
      <Shelf />
    </main>


    <FloatCart />
  </React.Fragment>
);

export default App;
