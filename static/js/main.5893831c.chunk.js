(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){e.exports=a(391)},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){"use strict";a.r(t);a(159);var n=a(1),r=a.n(n),c=a(154),o=a.n(c),l=a(37),i=a(38),s=a(40),u=a(39),d=a(41),p=a(31),m=a(78),h=a.n(m),f=function(e,t){switch(t){case"BRL":return e.toFixed(2).replace(".",",");default:return e.toFixed(2)}},v={lowestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},highestprice:function(e,t){return e.price>t.price?-1:e.price<t.price?1:0}},y=(a(387),function(){return r.a.createElement("div",{className:"spinner lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),b=Object(p.b)(null,{addProduct:function(e){return{type:"ADD_PRODUCT",payload:e}}})(function(e){var t=e.product,a=e.addProduct;t.quantity=1,t.currencyId="USD",t.currencyFormat="$",t.isFreeShipping=!1;var n=f(t.price,t.currencyId);return r.a.createElement("div",{className:"shelf-item",onClick:function(){return a(t)},"data-sku":t.sku},t.isFreeShipping&&r.a.createElement("div",{className:"shelf-stopper"},"Free shipping"),r.a.createElement("p",{className:"shelf-item__title"},t.title),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("div",{className:"val"},r.a.createElement("small",null,t.currencyFormat),r.a.createElement("b",null,n.substr(0,n.length-3)),r.a.createElement("span",null,n.substr(n.length-3,3)))),r.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))}),E=function(e){return e.products.map(function(e){return r.a.createElement(b,{product:e,key:e.id})})},g=(a(388),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleFetchProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.filters,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sort;a.setState({isLoading:!0}),a.props.fetchProducts(e,t,function(){a.setState({isLoading:!1})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchProducts()}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.products,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(y,null),r.a.createElement("div",{className:"shelf-container"},r.a.createElement(E,{products:e})))}}]),t}(n.Component)),C=Object(p.b)(function(e){return{products:e.shelf.products}},{fetchProducts:function(e,t,a){return function(n){return h.a.get("https://passover2020.s3-us-west-2.amazonaws.com/products.json").then(function(r){var c=r.data.products;return e&&e.length>0&&(c=c.filter(function(t){return e.find(function(e){return t.availableSizes.find(function(t){return t===e})})})),t&&(c=c.sort(v[t])),a&&a(),n({type:"FETCH_PRODUCTS",payload:c})}).catch(function(e){console.log("Could not fetch products. Try again later.")})}}})(g),O=function(e){return function(t){var a=e.reduce(function(e,t){return e+=t.quantity},0),n=e.reduce(function(e,t){return e+=t.price*t.quantity},0);t({type:"UPDATE_CART",payload:{productQuantity:a,installments:e.reduce(function(e,t){return e=t.installments>e?t.installments:e},0),totalPrice:n,currencyId:"USD",currencyFormat:"$"}})}},P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleMouseOver=function(){a.setState({isMouseOver:!0})},a.handleMouseOut=function(){a.setState({isMouseOver:!1})},a.handleOnIncrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity+1,e(t)},a.handleOnDecrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity-1,e(t)},a.state={product:a.props.product,isMouseOver:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.removeProduct,a=this.state.product,n=["shelf-item"];return this.state.isMouseOver&&n.push("shelf-item--mouseover"),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("div",{className:"shelf-item__del",onMouseOver:function(){return e.handleMouseOver()},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){return t(a)}}),r.a.createElement("div",{className:"shelf-item__details"},r.a.createElement("p",{className:"title"},a.title),r.a.createElement("p",{className:"desc"},r.a.createElement("br",null),"Quantity: ",a.quantity)),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("p",null,"".concat(a.currencyFormat,"  ").concat(f(a.price))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOnDecrease,disabled:0===a.quantity,className:"change-product-button"},"-"),r.a.createElement("button",{onClick:this.handleOnIncrease,className:"change-product-button"},"+"))))}}]),t}(n.Component),N=a(79),T=a(54),_={firstName:"",lastName:"",email:"",phone:"",delivery:"",address:"",city:"",comments:""},j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=_,a.handleChange=a.handleChange.bind(Object(T.a)(Object(T.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(T.a)(Object(T.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){console.log("event",e);var t=e.target,a=t.value,n=t.name;this.setState(Object(N.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this,a=this.props.cartProducts.reduce(function(e,t){return t.quantity&&(e[t.id]=t.quantity),e},{});e.preventDefault();var n={data:{customer:this.state,products:a}};console.log("request",JSON.stringify(n)),h.a.post("https://jhl69wbaql.execute-api.us-west-2.amazonaws.com/prod",n).then(function(e){if(console.log(e),console.log(e.data),200===e.data.statusCode){var a=e.data.id;console.log("order id",a),t.clearCart(),t.setState(_),alert("Thank you, your request was sent. Your Order id is: ".concat(a)),window.location="/"}else alert("There was a problem with your order. Please verify all necessary fields were filled out, and try again. If the problem persists please contact us.")})}},{key:"clearCart",value:function(){var e=this.props,t=e.cartProducts,a=e.updateCart;t.length=0,a([]),console.log("*** userform props",this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wpforms-container-full"},r.a.createElement("form",{className:"wpforms-form",onSubmit:this.handleSubmit},r.a.createElement("input",{name:"firstName",placeholder:"First name",value:this.state.firstName,onChange:this.handleChange,required:!0}),r.a.createElement("input",{name:"lastName",placeholder:"Last name",value:this.state.lastName,onChange:this.handleChange,required:!0}),r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0}),r.a.createElement("input",{name:"phone",type:"phone",placeholder:"Phone",value:this.state.phone,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"delivery",value:"false",onChange:this.handleChange,required:!0}),"Self Pickup"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"delivery",value:"true",onChange:this.handleChange,required:!0}),"Delivery($25)"),r.a.createElement("div",{className:"false"===this.state.delivery?"hidden":""},r.a.createElement("p",null,"Delivery is available for the east bay locations only"),r.a.createElement("input",{name:"address",placeholder:"Delivery Address",value:this.state.address,onChange:this.handleChange}),r.a.createElement("input",{name:"city",placeholder:"Delivery City",value:this.state.city,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("textarea",{name:"comments",placeholder:"Comments",onChange:this.handleChange,value:this.state.comments}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit Order"})))}}]),t}(r.a.Component),w=Object(p.b)(function(e){return{cartProducts:e.cart.products,cartTotal:e.total.data}},{updateCart:O})(j),S=(a(389),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,isFinalCheckout:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1}),a.setState({isFinalCheckout:!1})},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=!1;n.forEach(function(t){t.id===e.id&&(t.quantity+=e.quantity,c=!0)}),c||n.push(e),r(n),a.openFloatCart()},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.findIndex(function(t){return t.id===e.id});c>=0&&(n.splice(c,1),r(n))},a.proceedToCheckout=function(){var e=a.props.cartTotal,t=(e.totalPrice,e.productQuantity);e.currencyFormat,e.currencyId;t?a.setState({isFinalCheckout:!0}):alert("Add some product in the cart!")},a.changeProductQuantity=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.find(function(t){return t.id===e.id});c.quantity=e.quantity,c.quantity<=0&&a.removeProduct(c),console.log("-- props",a.props),r(n)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove),e.productToChange!==this.props.productToChange&&this.changeProductQuantity(e.productToChange)}},{key:"render",value:function(){var e=this,t=this.props,a=t.cartTotal,n=t.cartProducts,c=t.removeProduct,o=t.changeProductQuantity,l=n.map(function(e){return r.a.createElement(P,{product:e,removeProduct:c,changeProductQuantity:o,key:e.id})}),i=["float-cart"];return this.state.isOpen&&i.push("float-cart--open"),r.a.createElement("div",{className:i.join(" ")},this.state.isOpen&&r.a.createElement("div",{onClick:function(){return e.closeFloatCart()},className:"float-cart__close-btn"},"X"),!this.state.isOpen&&r.a.createElement("span",{onClick:function(){return e.openFloatCart()},className:"bag bag--float-cart-closed"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("div",{className:!0===this.state.isFinalCheckout?"hidden":"float-cart__content"},r.a.createElement("div",{className:"float-cart__header"},r.a.createElement("span",{className:"bag"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("span",{className:"header-title"},"Cart")),r.a.createElement("div",{className:"float-cart__shelf-container"},l,!l.length&&r.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",r.a.createElement("br",null),":)")),r.a.createElement("div",{className:"float-cart__footer"},r.a.createElement("div",{className:"sub"},"SUBTOTAL"),r.a.createElement("div",{className:"sub-price"},r.a.createElement("p",{className:"sub-price__val"},"".concat(a.currencyFormat," ").concat(f(a.totalPrice,a.currencyId)))),r.a.createElement("div",{onClick:function(){return e.proceedToCheckout()},className:"buy-btn"},"Checkout"))),r.a.createElement("div",{className:!1===this.state.isFinalCheckout?"hidden":"float-cart__content"},r.a.createElement("div",{className:"float-cart__header"},r.a.createElement("span",{className:"header-title"},"Customer Details"),r.a.createElement("p",{className:"title"},"An invoice will be sent to your email. The order will be finalized after the invoice is paid."),r.a.createElement(w,null))))}}]),t}(n.Component)),k=Object(p.b)(function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,productToChange:e.cart.productToChange,cartTotal:e.total.data}},{loadCart:function(e){return{type:"LOAD_CART",payload:e}},updateCart:O,removeProduct:function(e){return{type:"REMOVE_PRODUCT",payload:e}},changeProductQuantity:function(e){return{type:"CHANGE_PRODUCT_QUANTITY",payload:e}}})(S),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-header-title"},r.a.createElement("h1",null,"BishulismSF 2020 Passover Order Menu "),r.a.createElement("p",null,"Contact us regarding inquries or questions at bishulimsf@gmail.com")),r.a.createElement("main",null,r.a.createElement(C,null)),r.a.createElement(k,null))},q=a(42),D=a(157),A=a(26),R={products:[]},U={products:[]},I={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}},Q=Object(q.c)({shelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(A.a)({},e,{products:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CART":return Object(A.a)({},e,{products:t.payload});case"ADD_PRODUCT":return Object(A.a)({},e,{productToAdd:Object.assign({},t.payload)});case"REMOVE_PRODUCT":return Object(A.a)({},e,{productToRemove:Object.assign({},t.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(A.a)({},e,{productToChange:Object.assign({},t.payload)});default:return e}},total:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(A.a)({},e,{data:t.payload});default:return e}}}),M=function(e){e=JSON.parse(window.localStorage.getItem("state"))||e;var t=[D.a],a=Object(q.e)(Q,e,Object(q.d)(q.a.apply(void 0,t)));return a.subscribe(function(){var e=a.getState(),t={cart:e.cart,total:e.total};window.localStorage.setItem("state",JSON.stringify(t))}),a},L=function(e){var t=e.children,a=e.initialState,n=void 0===a?{}:a;return r.a.createElement(p.a,{store:M(n)},t)};a(390);o.a.render(r.a.createElement(L,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.5893831c.chunk.js.map