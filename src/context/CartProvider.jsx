import { useMemo } from "react";
import { CartContext } from "./cart-context.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("campuseats-cart", []);
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);

  // Total quantity of all items
  const count = cart.reduce((sum, line) => sum + line.qty, 0);

  // Total price of the cart
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  // Add an item to the cart
  function addToCart(item) {
    setCart((currentCart) => {
      const existing = currentCart.find((line) => line.item.id === item.id);

      if (existing) {
        return currentCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }

      return [...currentCart, { item, qty: 1 }];
    });
  }

  // Change item quantity
  function changeQty(itemId, delta) {
    setCart((currentCart) =>
      currentCart
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  // Remove an item completely
  function removeFromCart(itemId) {
    setCart((currentCart) =>
      currentCart.filter((line) => line.item.id !== itemId),
    );
  }

  // Place an order and clear the cart
  function placeOrder(details) {
    const order = {
      id: `order-${Date.now()}`,
      ...details,
      lines: cart,
      total,
      createdAt: new Date().toISOString(),
    };

    setOrders((currentOrders) => [order, ...currentOrders]);
    setCart([]);

    return order;
  }

  const value = useMemo(
    () => ({
      cart,
      orders,
      count,
      total,
      addToCart,
      changeQty,
      removeFromCart,
      placeOrder,
    }),
    [cart, orders, count, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export default CartProvider;
