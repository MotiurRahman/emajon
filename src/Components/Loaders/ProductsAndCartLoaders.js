import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoaders = async () => {
  //Get products
  const productsData = await fetch("http://localhost:8000/products");
  const { products } = await productsData.json();

  //get cart
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((products) => products._id === id);

    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
      //console.log(id, quantity);
    }
  }
  return { products: products, initialCart: initialCart };
};
