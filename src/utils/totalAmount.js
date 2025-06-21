export const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => {
    if (typeof item.price === "number") {
      return total + (item.price * item.quantity) / 100;
    }
    return total;
  }, 0);
};
