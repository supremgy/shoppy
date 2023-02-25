import React from "react";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
const delivery = 3000;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();
  if (isLoading) return <p>Loading...</p>;
  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + parseInt(current.price) * parseInt(current.quantity),
      0
    );
  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        My Cart
      </p>
      {!hasProducts && <p>There is no products in your cart.</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 m-8 p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="delivery fee" price={delivery} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="Total Price" price={totalPrice} />
            <FaEquals className="shrink-0" />
            <PriceCard text="All Price" price={totalPrice + delivery} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
