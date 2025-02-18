import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userprogressctx = useContext(UserProgressContext);

  const totalCartItem = cartCtx.items.reduce((totalNumberOfItem, items) => {
    return totalNumberOfItem + items.quantity;
  }, 0);
  function handleShowCart() {
    userprogressctx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItem})
        </Button>
      </nav>
    </header>
  );
}
