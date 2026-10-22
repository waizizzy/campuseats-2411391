import CartItem from "./CartItem.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

function CartPage({ cart, onChangeQty, onRemove, onPlaceOrder }) {
  if (cart.length === 0) {
    return (
      <section>
        <h2 className="section-title">Your Cart</h2>
        <p>Your cart is empty. Pick something from a menu first.</p>
      </section>
    );
  }

  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  return (
    <section>
      <h2 className="section-title">Your Cart</h2>

      <ul className="cart-list">
        {cart.map((line) => (
          <CartItem
            key={line.item.id}
            line={line}
            onChangeQty={onChangeQty}
            onRemove={onRemove}
          />
        ))}
      </ul>

      <h3>Total: RM {total.toFixed(2)}</h3>

      <CheckoutForm onPlaceOrder={onPlaceOrder} />
    </section>
  );
}

export default CartPage;
