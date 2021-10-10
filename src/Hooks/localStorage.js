const addToDb = (id) => {
  const db = getDb();
  let shopping_cart = {};
  if (db) {
    shopping_cart = db;
    if (shopping_cart[id]) {
      shopping_cart[id] = shopping_cart[id] + 1;
    } else {
      shopping_cart[id] = 1;
    }
  } else {
    shopping_cart[id] = 1;
  }
  getDb();
  updateDb(shopping_cart);
};
const updateDb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};
const removeItem = (id) => {
  const shopping_cart = getDb();
  if (shopping_cart) {
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
};
const getStoredCart = () => {
  const exists = getDb();
  return exists ? exists : {};
};
const clearDb = () => {
  localStorage.removeItem("shopping_cart");
};
const getDb = () => {
  const localDb = localStorage.getItem("shopping_cart");
  return JSON.parse(localDb);
};
export { addToDb, getDb, removeItem, getStoredCart, clearDb };
