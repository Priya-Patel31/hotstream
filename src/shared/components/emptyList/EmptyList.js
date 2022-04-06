import { emptyCart } from "../../../assets/images";
import "./emptyList.css";
export const EmptyList = () => {
  return (
    <div className="emptyCart-container flex-col">
      <p className="text-pink">Ohh no !! It's empty ...</p>
      <img src={emptyCart} className="empty-cart-image" alt="empty" />
    </div>
  );
};
