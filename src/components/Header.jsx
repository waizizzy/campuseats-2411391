function Header({ cartCount, onShowMenu, onShowCart }) {
  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>

      <nav className="nav">
        <button onClick={onShowMenu}>Vendors</button>

        <a href="#">My Orders</a>

        <button onClick={onShowCart} className="cart">
          Cart <span className="badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
