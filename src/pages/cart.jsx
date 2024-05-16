import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center">
      {cart && cart.length > 0 ? (
        <>
          <div className="min-h-[60vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg text-red-800">Productos en tu carrito</h1>
                <p>
                    <span className="font-bold">Total de productos</span>
                    <span>: {cart.length}</span>
                </p>
                <p>
                    <span className="font-bold">Coste total</span>
                    <span>: {totalCart}</span>
                </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Tu carrito está vacio
          </h1>
          <Link to="/">
            <button className="bg-red-800 text-white border-2 rounded-lg font-bold p-4">
              Ver productos
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
