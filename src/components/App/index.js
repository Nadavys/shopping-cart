// import React from 'react';
import React, { useState } from 'react';

import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

const App = () => {

  const [state, setState] = useState({ showModal: false, orderId: "" });

  function triggerSuccessModal(orderId) {
    setState({ showModal: true, orderId })
  }

  function showSuccessModal() {
    console.log("showSuccessModal", arguments)
    if (state.showModal) return SimpleModal({ orderId: state.orderId })
  }

  return storIsClosed();

}

function SimpleModal(props) {
  function restart() {
    console.log("restart!")
    window.location = "/";
  }
  return (
    <div className="hover_bkgr_fricc">
      <span className="helper"></span>
      <div>
        <div className="popupCloseButton" onClick={restart}>&times;</div>
        <h2>Your order request was sent.</h2>
        <p> A payment request will be sent to your email promptly.</p>
        <p> Your order id is: <b>{props.orderId}</b></p>
      </div>
    </div>
  );
}


// function storeOpen(){
//   return(

//     <React.Fragment>
//       <div className="mainheader">
//         <div className="center">
//           <h1>Bishulim SF 2020 Passover Order Menu</h1>
//           <h2>Contact us for inquries at <a href="mailto:bishulimsf@gmail.com">bishulimsf@gmail.com</a> <a href="tel:415-881-0843">415-881-0843</a> </h2>
//           <div className="sidebar-main">

//             <ul>
//               <li>All kosher Ingredients (no kitniyot - legumes). </li>
//               <li>The meal will be cooked at Temple Beth Abraham’s kosher for Passover kitchen.</li>
//               <li>Portions are per person</li>
//               <li>New Delivery requests are available for Easy Bay Area locations ONLY. $25 per delivery.</li>
//               <li>Delivery on April 8th</li>
//               <li>Pick up on April 8th from Temple Beth Abraham in Oakland </li>
//               <li>Orders must be placed before April 1st.</li>
//               <li>Part of proceeds will be donated to Temple Beth Abraham </li>
//               <li>Prices include taxes and fees</li>
//               <li>(V)=Vegetarian (VE)=Vegan (GF)=Gluten Free</li>
//               <li><b>The menu is subject to change due to avialablity of Ingredients</b></li>

//             </ul>
//           </div>
//         </div>
//       </div>
//       <main>
//         <Shelf />
//       </main>
//       <FloatCart triggerSuccessModal={triggerSuccessModal} />

//       {showSuccessModal()}

//       <footer>
//         <div className="copyright">
//           <p>© 2020 - Bishulimsf</p>
//         </div>
//         <div className="social">
//           <a href="https://www.bishulimsf.com/" className="support" target="_blank" >Bishulimsf.com</a>
//           <a href="https://www.facebook.com/bishulimsf/" className="face" target="_blank"><span className="fa fa-facebook"></span></a>
//           <a href="https://www.instagram.com/bishulim_sf/" className="instagram" target="_blank"><span className="fa fa-instagram"></span></a>
//         </div>
//       </footer>
//     </React.Fragment>
//   )};


function storIsClosed() {
  return (

    <React.Fragment>
      <div className="mainheader">
        <div className="center" >
          <h1>Bishulim SF 2020 Passover</h1>
          <h2> We are no longer accepting new orders</h2>
          <h2>Self Pickup and delivies on April 8th</h2>
          <h2> Bishulism SF wishes everybody a happy Passover.</h2>
          <h2> חג פסח שמח </h2>
          <div className="sidebar-main">
            <div style={{textAlign:"center", color: "white", textSizeAdjust:"larger"}}>
              <hr/>
          <div >Starting Friday April 24th,</div> 
      <div>Bishlium will be offering Friday night kosher dinners, for pickup and deliveries.</div>
      </div>
          </div>

        </div>
   
      <main>
 
      </main>
   </div>
      <footer>
        <div className="copyright">
          <p>© 2020 - Bishulimsf</p>
        </div>
        <div className="social">
          <a href="https://www.bishulimsf.com/" className="support" target="_blank" >Bishulimsf.com</a>
          <a href="https://www.facebook.com/bishulimsf/" className="face" target="_blank"><span className="fa fa-facebook"></span></a>
          <a href="https://www.instagram.com/bishulim_sf/" className="instagram" target="_blank"><span className="fa fa-instagram"></span></a>
        </div>
      </footer>
    </React.Fragment>
  )
};

export default App;