export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI = "https://passover2020.s3-us-west-2.amazonaws.com/products.json";
// export const productsAPI = "http://192.168.0.110:8001/api/products";
