import { products } from '../data/products';

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(id));
      resolve(product);
    }, 500);
  });
};

